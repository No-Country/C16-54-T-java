package com.gamestopia.Gamestopia.service.Impl;

import com.gamestopia.Gamestopia.Repository.GameRepository;
import com.gamestopia.Gamestopia.entities.Game;
import com.gamestopia.Gamestopia.service.IGameService;
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
    public void editGame(String id, Game updateGame) {
        Game game = this.findGame(id);

        if (updateGame.getName() != null) {
            game.setName(updateGame.getName());
        }
        if (updateGame.getDescription() != null) {
            game.setDescription(updateGame.getDescription());
        }
        if (updateGame.getClasification() != null) {
            game.setClasification(updateGame.getClasification());
        }
        if (updateGame.getCategory() != null) {
            game.setCategory(updateGame.getCategory());
        }
        if (updateGame.getDeveloperCompany() != null) {
            game.setDeveloperCompany(updateGame.getDeveloperCompany());
        }
        if (updateGame.getPrice() != null) {
            game.setPrice(updateGame.getPrice());
        }
        if (updateGame.isActive() != game.isActive()) {
            game.setActive(updateGame.isActive());
        }
        if (updateGame.isPromotion() != game.isPromotion()) {
            game.setPromotion(updateGame.isPromotion());
        }

        this.saveGame(game);
    }
}

