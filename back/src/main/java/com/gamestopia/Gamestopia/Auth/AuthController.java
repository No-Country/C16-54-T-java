package com.gamestopia.Gamestopia.Auth;

import com.gamestopia.Gamestopia.dto.request.AuthLoginRequestDTO;
import com.gamestopia.Gamestopia.dto.request.AuthRegisterRequestDTO;
import com.gamestopia.Gamestopia.dto.response.AuthResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import static com.gamestopia.Gamestopia.util.Constant.API;
import static com.gamestopia.Gamestopia.util.Constant.RESOURCE_AUTH;
@RestController
@RequestMapping(value = API + RESOURCE_AUTH)

@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponseDTO> register(@RequestBody AuthRegisterRequestDTO request) {
        return ResponseEntity.ok(authService.register(request));
    }
    @PostMapping("/login")
    public ResponseEntity<AuthResponseDTO> login(@RequestBody AuthLoginRequestDTO request){
        return ResponseEntity.ok(authService.login(request));
       /* try {
            return ResponseEntity.ok(authService.login(request));
        } catch (RuntimeException e) {
            return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);
        }*/

    }
}
