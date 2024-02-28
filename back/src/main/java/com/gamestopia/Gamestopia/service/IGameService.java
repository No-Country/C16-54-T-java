package com.gamestopia.Gamestopia.service;

import com.gamestopia.Gamestopia.entities.Game;

import java.util.List;

public interface IGameService {
    //Traer todos los juegos
    List<Game> getGames();
    //Crear un juego
    void saveGame(Game game);
    //Borrar juego
    void deleteGame(String id);
    //Buscar un juego por id
    Game findGame(String id);
    //Editar un juego
    void editGame(String id, Game updateGame);
    //Buscador principal
    List<Game> findBySearch(String value);
    //Buscador por categoria
    List<Game> findByCategory(String category);

}
