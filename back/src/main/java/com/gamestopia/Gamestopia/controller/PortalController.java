package com.gamestopia.Gamestopia.controller;

import com.gamestopia.Gamestopia.entities.Game;
import com.gamestopia.Gamestopia.service.Impl.GameService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static com.gamestopia.Gamestopia.util.Constant.API;
import static com.gamestopia.Gamestopia.util.Constant.RESOURCE_PORTAL;

@RestController
@RequestMapping(value = API + RESOURCE_PORTAL)
@RequiredArgsConstructor
public class PortalController {

    @Autowired
    private GameService gameService;
    @GetMapping("/list")
    public ResponseEntity<List<Game>> inicio(){
        List<Game> games = gameService.getGames();
        return ResponseEntity.ok(games);
    }

    //Traer por busqueda principal
    @GetMapping("/search")
    public ResponseEntity<?> findBySearch(@RequestParam String value){
        try {
            return ResponseEntity.ok(gameService.findBySearch(value));
        }catch (RuntimeException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    //Traer por categoria
    @GetMapping("/category/estrategy")
    public ResponseEntity<List<Game>> findEstrategyCategory(){
        List<Game> gameEstrategyList = gameService.findByCategory("estrategia");
        return ResponseEntity.ok(gameEstrategyList);
    }

    @GetMapping("/category/action")
    public ResponseEntity<List<Game>> findActionCategory(){
        List<Game> gameActionList = gameService.findByCategory("accion");
        return ResponseEntity.ok(gameActionList);
    }

    @GetMapping("/category/sports")
    public ResponseEntity<List<Game>> findSportsCategory(){
        List<Game> gameSportsList = gameService.findByCategory("deportes");
        return ResponseEntity.ok(gameSportsList);
    }
}
