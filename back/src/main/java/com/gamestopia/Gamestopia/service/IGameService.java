package com.gamestopia.Gamestopia.service;

import com.gamestopia.Gamestopia.entities.Game;

import java.util.List;
import java.util.Optional;

public interface IGameService {
    //Traer todos los juegos
    public List<Game> getGame();
    //Crear un juego
    void saveGame(Game game);
    //Borrar juego
    void deleteGame(String id);
    //Buscar un juego por id
    Game findGame(String id);
    //Editar un juego
    void editGame(String id, Game updateGame);



}
