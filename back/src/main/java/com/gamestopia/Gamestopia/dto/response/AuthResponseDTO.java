package com.gamestopia.Gamestopia.dto.response;

import com.gamestopia.Gamestopia.Enum.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponseDTO {

    String token;
    String id;
    String name;
    String lastName;
    String email;
    Role role;

}
