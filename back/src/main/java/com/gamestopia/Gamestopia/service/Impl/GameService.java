package com.gamestopia.Gamestopia.service.Impl;

import com.gamestopia.Gamestopia.Repository.GameRepository;
import com.gamestopia.Gamestopia.entities.Game;
import com.gamestopia.Gamestopia.exception.GameNotFoundException;
import com.gamestopia.Gamestopia.service.IGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GameService implements IGameService {

    @Autowired
    private GameRepository gameRepo;

    @Override
    public List<Game> getGames() {
        return gameRepo.findAll();
    }

    @Override
    public Game saveGame(Game game) {
        return gameRepo.save(game);
    }

    @Override
    public void deleteGame(String id) {
        gameRepo.deleteById(id);
    }

    @Override
    public Game findGame(String id) {
        return gameRepo.findById(id).orElse(null);
    }

    /**
     * Editar
     *
     * @param id El primer número entero.
     * @param updateGame El segundo número entero.
     * @return la actualizacion de juego si existe.
     */
    @Override
    public Game editGame(String id, Game updateGame) {
        Optional<Game> response = gameRepo.findById(id);

        if(response.isEmpty()){
            throw new GameNotFoundException("El juego con el Id "+ id + " no existe");
        }
        Game existingGame = response.get();

        if (updateGame.getName() != null) {
            existingGame.setName(updateGame.getName());
        }
        if (updateGame.getDescription() != null) {
            existingGame.setDescription(updateGame.getDescription());
        }
        if (updateGame.getClasification() != null) {
            existingGame.setClasification(updateGame.getClasification());
        }
        if (updateGame.getCategory() != null) {
            existingGame.setCategory(updateGame.getCategory());
        }
        if (updateGame.getDeveloperCompany() != null) {
            existingGame.setDeveloperCompany(updateGame.getDeveloperCompany());
        }
        if (updateGame.getPrice() != null) {
            existingGame.setPrice(updateGame.getPrice());
        }
        if (updateGame.isActive() != existingGame.isActive()) {
            existingGame.setActive(updateGame.isActive());
        }
        if (updateGame.isPromotion() != existingGame.isPromotion()) {
            existingGame.setPromotion(updateGame.isPromotion());
        }
        if (updateGame.getImage() != null) {
            existingGame.setImage(updateGame.getImage());
        }

        return gameRepo.save(existingGame);
    }

    @Override
    public void changeStatus(String id, boolean active) {
        Optional<Game> response = gameRepo.findById(id);
        if(response.isPresent()){
            Game game = response.get();
            game.setActive(active);
            gameRepo.save(game);
        }else{
            throw new GameNotFoundException("El juego no se encuentra con el Id= " + id);
        }

    }
    @Override
    public List<Game> findBySearch(String value) {
        List<Game> gameList = gameRepo.findBySearch(value);
        if (gameList.isEmpty()) {
            throw new RuntimeException("No se encontraron resultados para " + value);
        }
        return gameList;
    }
    @Override
    public List<Game> findByCategory(String category) {
        return gameRepo.findByCategory(category);

    }

}

