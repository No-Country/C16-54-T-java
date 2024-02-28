package com.gamestopia.Gamestopia.Repository;

import com.gamestopia.Gamestopia.entities.Game;
import com.gamestopia.Gamestopia.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GameRepository extends JpaRepository <Game, String> {

    List<Game> findByUser(User user);
}
