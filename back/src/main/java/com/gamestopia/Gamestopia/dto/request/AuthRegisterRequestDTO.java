package com.gamestopia.Gamestopia.dto.request;

import com.gamestopia.Gamestopia.entities.Image;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthRegisterRequestDTO {
    String name;
    String lastName;
    String email;
    String password;
}
