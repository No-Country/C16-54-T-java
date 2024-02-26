package com.gamestopia.Gamestopia.Repository;

import com.gamestopia.Gamestopia.entities.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, String> {
}
