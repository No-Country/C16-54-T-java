package com.gamestopia.Gamestopia.controller;

import com.gamestopia.Gamestopia.entities.Game;
import com.gamestopia.Gamestopia.service.IGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/game/explore")
public class GameExploreController {
    @Autowired
    private IGameService gameServ;

    //Traer por busqueda principal
    @GetMapping("/search")
    public List<Game> findBySearch(@RequestParam String value){
        return gameServ.findBySearch(value);
    }

    //Traer todos los juegos
    @GetMapping("/list")
    public List<Game> gameList () {
        return gameServ.getGames();
    }

    //Traer por categoria
    @GetMapping("/category/estrategy")
    public List<Game> findEstrategyCategory(){
        return gameServ.findByCategory("estrategia");
    }

    @GetMapping("/category/action")
    public List<Game> findActionCategory(){
        return gameServ.findByCategory("accion");
    }

    @GetMapping("/category/sports")
    public List<Game> findSportsCategory(){
        return gameServ.findByCategory("deportes");
    }

}
