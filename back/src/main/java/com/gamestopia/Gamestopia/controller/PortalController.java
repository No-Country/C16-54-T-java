package com.gamestopia.Gamestopia.controller;

import com.gamestopia.Gamestopia.entities.Game;
import com.gamestopia.Gamestopia.service.Impl.GameService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
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
    @GetMapping()
    public ResponseEntity<List<Game>> inicio(){
        List<Game> games = gameService.getGames();
        return ResponseEntity.ok(games);
    }


}
