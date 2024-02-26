package com.gamestopia.Gamestopia.repository;

import com.gamestopia.Gamestopia.entities.Game;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GameRepository extends JpaRepository<Game,String> {
   
    // Encuentra juegos por categoría y excluye el juego con el ID especificado
    List<Game> findByCategoryAndIdNot(String category, String GameId);
    
    // Encuentra los primeros 5 juegos ordenados por precio ascendente
    List<Game> findFirst5ByOrderByPriceAsc();
}