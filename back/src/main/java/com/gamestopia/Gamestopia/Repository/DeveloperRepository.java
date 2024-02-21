package com.gamestopia.Gamestopia.Repository;

import com.gamestopia.Gamestopia.entities.Developer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeveloperRepository extends JpaRepository<Developer, String> {
}
