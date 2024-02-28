package com.gamestopia.Gamestopia.controller;


import com.gamestopia.Gamestopia.entities.Game;
import com.gamestopia.Gamestopia.entities.Image;
import com.gamestopia.Gamestopia.service.IGameService;
import com.gamestopia.Gamestopia.service.ImageServiceIn;
import com.gamestopia.Gamestopia.service.Impl.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

import static com.gamestopia.Gamestopia.util.Constant.*;

@RestController
@RequestMapping(value = API + RESOURCE_GAME)
public class GameController {
    @Autowired
    private IGameService gameServ;
    @Autowired
    ImageService imageService;

    //Crear un nuevo juego
    @PostMapping("/create")
    public String saveGame(@RequestBody Game game) {
        gameServ.saveGame(game);

        return "Game created";
    }

    //Traer todos los juegos
    @GetMapping("/list")
    public List<Game> gameList () {
        return gameServ.getGames();
    }

    //Traer juego
    @GetMapping("/find/{id}")
    public Game findGame(@PathVariable String id){
        return gameServ.findGame(id);
    }

    //Modificar los datos de un juego


    @DeleteMapping ("/delete/{id}")
    public String deleteGame(@PathVariable String id){
        gameServ.deleteGame(id);
        return "Game eliminated";
    }

    @GetMapping("/getPhoto")
    public ResponseEntity<byte[]> getPhoto(@RequestParam String idGame){

        byte[] image = imageService.getPhotoGame(idGame);
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);

        return ResponseEntity.status(HttpStatus.OK).headers(headers).body(image);

    }
}
