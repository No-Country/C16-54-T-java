package com.gamestopia.Gamestopia.Auth;

import com.gamestopia.Gamestopia.dto.AuthResponse;
import com.gamestopia.Gamestopia.dto.LoginDTO;
import com.gamestopia.Gamestopia.dto.RegisterDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginDTO datos){
        try {
            return ResponseEntity.ok(authService.login(datos));
        } catch (RuntimeException e) {
            return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);
        }

    }
    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterDTO data) {

        try {
            return ResponseEntity.ok(authService.register(data));
        } catch (RuntimeException e) {
            return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
