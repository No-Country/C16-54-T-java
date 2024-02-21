package com.gamestopia.Gamestopia.controller;


import com.gamestopia.Gamestopia.entities.Category;
import com.gamestopia.Gamestopia.entities.Game;
import com.gamestopia.Gamestopia.service.ICategoryService;
import com.gamestopia.Gamestopia.service.IGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/game")
public class GameController {
    @Autowired
    private IGameService gameServ;

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
    @PutMapping("/edit")
    public String editGame(@RequestBody Game game) {
        gameServ.editGame(game);
        return "Game edited";
    }

    @DeleteMapping ("/delete/{id}")
    public String deleteGame(@PathVariable String id){
        gameServ.deleteGame(id);
        return "Game eliminated";
    }
}