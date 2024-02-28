
package com.gamestopia.Gamestopia.controller;

import com.gamestopia.Gamestopia.entities.Game;
import com.gamestopia.Gamestopia.entities.Image;
import com.gamestopia.Gamestopia.entities.User;
import com.gamestopia.Gamestopia.service.Impl.ImageService;
import com.gamestopia.Gamestopia.service.Impl.UserService;

import java.net.URI;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import static com.gamestopia.Gamestopia.util.Constant.API;
import static com.gamestopia.Gamestopia.util.Constant.RESOURCE_USER;

/**
 *
 * @author JAMES
 */
@RestController
@RequestMapping(value = API + RESOURCE_USER)

public class UserController {
    
    @Autowired
    UserService iUserService;
    @Autowired
    ImageService imageService;

   @GetMapping("/lista")
    public List<User> userList() {
        List<User> list = iUserService.listUser();
        return list;
    }
    
    @GetMapping("/buscar/{id}")
     public User findUser(@PathVariable String id){
         User user = iUserService.findUser(id);
         return user;    
     }

    @PostMapping("/crear")
    public void saveUser(@RequestBody User user){
        iUserService.saveUser(user);
    }
    
    @DeleteMapping("/borrar/{id}")
    public void deleteUser(@PathVariable String id){
        iUserService.deleteUser(id);
    }
    
    @PutMapping("/actualizar/{id}")
    public void editUser(@PathVariable String id, 
                         @RequestBody User updateUser){
        iUserService.edit(id, updateUser);
    }
    //listar juegos asociados al usuario por id
    @GetMapping("/{id}/games")
    public ResponseEntity<List<Game>> showGames(@PathVariable String id){
        List<Game> games = iUserService.gameList(id);
        return new ResponseEntity<>(games, HttpStatus.OK);
    }

    @PostMapping("/uploadPhoto")

    public ResponseEntity<?> uploadPhoto(@RequestParam MultipartFile file, @RequestParam String idUser){
        Image image = imageService.saveImageUser(file, idUser);

        URI uri = ServletUriComponentsBuilder
                .fromCurrentContextPath()
                .path("/v1/api/user/getPhoto")
                .queryParam("idUser", idUser)
                .build()
                .toUri();
        return ResponseEntity.status(HttpStatus.CREATED).body(uri);
    }
    @GetMapping("/getPhoto")
    public ResponseEntity<byte[]> getPhoto(@RequestParam String idUser){

        byte[] image = imageService.getPhotoUser(idUser);
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);

        return ResponseEntity.status(HttpStatus.OK).headers(headers).body(image);

    }
}
