package com.gamestopia.Gamestopia.controller;

import com.gamestopia.Gamestopia.entities.Game;
import com.gamestopia.Gamestopia.service.IGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/game")
public class GameController {
    @Autowired
    private IGameService gameServ;

    //Crear un nuevo juego
    @PostMapping("/create")
    public ResponseEntity<String> saveGame(@RequestBody @Valid Game game) {
        try {
            gameServ.saveGame(game);
            return ResponseEntity.status(HttpStatus.CREATED).body("Game created");
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid input data", e);
    }
}

    //Traer todos los juegos
    @GetMapping("/list")
    public ResponseEntity<List<Game>> getAllGame() {
        List<Game> games = gameServ.getGame();
        return ResponseEntity.ok(games);
} 

    // Traer juego por ID
    @GetMapping("/find/{id}")
    public ResponseEntity<Game> findGame(@PathVariable String id) {
        Game game = gameServ.findGame(id);
        return game != null ? ResponseEntity.ok(game) : ResponseEntity.notFound().build();
    }

   // Modificar los datos de un juego
      @PutMapping("/edit/{id}")
    public ResponseEntity<String> editGame(@PathVariable String id, @RequestBody @Valid Game updateGame) {
        try {
            gameServ.editGame(id, updateGame);
            return ResponseEntity.ok("Game edited");
        } catch (RuntimeException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Game not found", e);
        }
    }

    // Eliminar juego por ID
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteGame(@PathVariable String id) {
        try {
            gameServ.deleteGame(id);
            return ResponseEntity.ok("Game eliminated");
        } catch (RuntimeException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Game not found", e);
        }
    }
}
