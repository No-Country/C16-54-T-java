package com.gamestopia.Gamestopia.service;

import com.gamestopia.Gamestopia.Repository.GameRepository;
import com.gamestopia.Gamestopia.entities.Game;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService implements IGameService {

    @Autowired
    private GameRepository gameRepo;

    @Override
    public List<Game> getGames() {
        return gameRepo.findAll();
    }

    @Override
    public void saveGame(Game game) {
        gameRepo.save(game);
    }

    @Override
    public void deleteGame(String id) {
        gameRepo.deleteById(id);
    }

    @Override
    public Game findGame(String id) {
        return gameRepo.findById(id).orElse(null);
    }

    @Override
    public void editGame(Game game) {
        this.saveGame(game);
    }
}
