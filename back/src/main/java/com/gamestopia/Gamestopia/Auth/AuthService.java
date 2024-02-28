package com.gamestopia.Gamestopia.Auth;

import com.gamestopia.Gamestopia.Enum.Role;
import com.gamestopia.Gamestopia.Jwt.JwtService;
import com.gamestopia.Gamestopia.Repository.UserRepository;

import com.gamestopia.Gamestopia.dto.request.AuthLoginRequestDTO;
import com.gamestopia.Gamestopia.dto.request.AuthRegisterRequestDTO;
import com.gamestopia.Gamestopia.dto.response.AuthResponseDTO;
import com.gamestopia.Gamestopia.entities.User;
import com.gamestopia.Gamestopia.exception.InvalidPassword;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.util.StringUtils;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    public AuthResponseDTO login(AuthLoginRequestDTO request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        String token = jwtService.getToken(user);

        String id = user.getId();
        String email = user.getEmail();
        String lastName = user.getLastName();
        String name = user.getName();
        Role role = user.getRole();

        return AuthResponseDTO.builder()
                .id(id)
                .lastName(lastName)
                .name(name)
                .role(role)
                .email(email)
                .token(token)
                .build();

    }

    public AuthResponseDTO register(AuthRegisterRequestDTO request){
        Optional<User> userOptional = userRepository.findByEmail(request.getEmail());

        if (userOptional.isPresent()) {
            throw new RuntimeException("Ya existe un usuario con ese email");
        }

        validatePassword(request);
        User user = User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .name(request.getName())
                .lastName(request.getLastName())
                .role(Role.USER)
                .build();

        userRepository.save(user);

        String id = user.getId();
        String email = user.getEmail();
        String lastName = user.getLastName();
        String name = user.getName();
        Role role = user.getRole();

        return AuthResponseDTO.builder()
                .id(id)
                .lastName(lastName)
                .name(name)
                .role(role)
                .email(email)
                .token(jwtService.getToken(user))
                .build();
    }
    private void validatePassword(AuthRegisterRequestDTO request) {

        if(!StringUtils.hasText(request.getPassword()) || !StringUtils.hasText(request.getRepeatedPassword())){
            throw new InvalidPassword("El Password no coincide");
        }

        if(!request.getPassword().equals(request.getRepeatedPassword())){
            throw new InvalidPassword("Passwords no coincide");
        }
    }
}
