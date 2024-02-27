package com.gamestopia.Gamestopia.Repository;

import com.gamestopia.Gamestopia.entities.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GameRepository extends JpaRepository <Game, String> {

    @Query("SELECT g FROM Game g WHERE g.name LIKE %?1% OR g.category LIKE %?1% "
            + "OR g.description LIKE %?1% OR g.developerCompany LIKE %?1%")
    List<Game> findBySearch(String value);

    List<Game> findByCategory(String category);

}
