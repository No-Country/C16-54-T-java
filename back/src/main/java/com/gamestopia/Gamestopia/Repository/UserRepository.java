package com.gamestopia.Gamestopia.Repository;

import com.gamestopia.Gamestopia.entities.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
    
    Optional<User> findByEmail(String email);

    Optional<User> findByUserName(String userName);

    boolean existsByUserName(String userName);
}
