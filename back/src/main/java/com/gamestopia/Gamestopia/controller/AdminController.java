package com.gamestopia.Gamestopia.controller;

import com.gamestopia.Gamestopia.Repository.UserRepository;
import com.gamestopia.Gamestopia.entities.Game;
import com.gamestopia.Gamestopia.entities.Image;
import com.gamestopia.Gamestopia.entities.User;
import com.gamestopia.Gamestopia.exception.GameNotFoundException;
import com.gamestopia.Gamestopia.service.Impl.GameService;
import com.gamestopia.Gamestopia.service.Impl.ImageService;
import com.gamestopia.Gamestopia.service.Impl.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

import static com.gamestopia.Gamestopia.util.Constant.API;
import static com.gamestopia.Gamestopia.util.Constant.RESOURCE_ADMIN;

@RestController
@RequestMapping(value = API + RESOURCE_ADMIN)
@RequiredArgsConstructor
public class AdminController {

    @Autowired
    private UserService userService;
    @Autowired
    private GameService gameService;
    @Autowired
    private ImageService imageService;
    @Secured("ADMIN")
    @GetMapping("/listUser")
    public ResponseEntity<List<User>> listUser(){
        List<User> userList = userService.listUser();
        if(userList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(userList, HttpStatus.OK);
    }
    @Secured("ADMIN")
    @GetMapping("/listGames")
    public ResponseEntity<List<Game>> listGame(){
        List<Game> games = gameService.getGames();
        return ResponseEntity.ok(games);
    }

    @Secured("ADMIN")
    @PostMapping("/createGame")
    public ResponseEntity<Game> createGame(@RequestBody Game game){

        Game newGame = gameService.saveGame(game);
        return ResponseEntity.status(HttpStatus.CREATED).body(newGame);
    }
    @Secured("ADMIN")
    @PostMapping("/uploadPhoto")

    public ResponseEntity<?> uploadPhoto(@RequestParam MultipartFile file, @RequestParam String idGame){
        Image image = imageService.saveImageGame(file, idGame);

        URI uri = ServletUriComponentsBuilder
                .fromCurrentContextPath()
                .path("/v1/api/game/getPhoto")
                .queryParam("idGame", idGame)
                .build()
                .toUri();
        return ResponseEntity.status(HttpStatus.CREATED).body(uri);
    }


    @Secured("ADMIN")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteGame(@PathVariable("id") String id){
        gameService.deleteGame(id);
        return ResponseEntity.noContent().build();
    }
    @Secured("ADMIN")
    @PutMapping("/edit/{id}")
    public ResponseEntity<Game> editGame(@PathVariable String id, @RequestBody Game updateGame) {
        Game game = gameService.editGame(id,updateGame);
        return ResponseEntity.ok(game);
    }
    @Secured("ADMIN")
    @PutMapping("/game/{id}/status")
    public ResponseEntity<?> changeStatus(@PathVariable String id, @RequestParam boolean active){
        try {
            gameService.changeStatus(id, active);
            return ResponseEntity.ok().build();
        }catch (GameNotFoundException ex){
            return ResponseEntity.notFound().build();
        }catch (Exception ex){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al cambiar el estado del juego");
        }
    }





}
