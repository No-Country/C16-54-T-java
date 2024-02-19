package com.gamestopia.Gamestopia.Auth;

import com.gamestopia.Gamestopia.Enum.Role;
import com.gamestopia.Gamestopia.Jwt.JwtService;
import com.gamestopia.Gamestopia.Repository.UserRepository;
import com.gamestopia.Gamestopia.dto.AuthResponse;
import com.gamestopia.Gamestopia.dto.LoginDTO;
import com.gamestopia.Gamestopia.dto.RegisterDTO;
import com.gamestopia.Gamestopia.entities.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.authentication.AuthenticationManager;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    public AuthResponse login(LoginDTO datos) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(datos.getEmail(), datos.getPassword()));
        UserDetails user = userRepository.findByEmail(datos.getEmail()).orElseThrow();
        String token = jwtService.getToken(user);
        return AuthResponse.builder()
                .token(token)
                .build();

    }

    public AuthResponse register(RegisterDTO datos){
        Optional<User> userOptional = userRepository.findByEmail(datos.getEmail());

        if (userOptional.isPresent()) {
            throw new RuntimeException("Ya existe un usuario con ese email");
        }

        User user = User.builder()
                .email(datos.getEmail())
                .password(passwordEncoder.encode(datos.getPassword()))
                .name(datos.getName())
                .lastName(datos.getLastName())
                .role(Role.valueOf(datos.getRole()))
                .build();

        userRepository.save(user);

        return AuthResponse.builder()
                .token(jwtService.getToken(user))
                .build();
    }
}
