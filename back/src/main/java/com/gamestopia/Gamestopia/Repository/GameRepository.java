package com.gamestopia.Gamestopia.Repository;

import com.gamestopia.Gamestopia.entities.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameRepository extends JpaRepository <Game, String> {
}
