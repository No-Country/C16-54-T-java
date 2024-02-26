package com.gamestopia.Gamestopia.service.Impl;


import com.gamestopia.Gamestopia.Repository.GameRepository;
import com.gamestopia.Gamestopia.Repository.ImageRepository;
import com.gamestopia.Gamestopia.Repository.UserRepository;
import com.gamestopia.Gamestopia.entities.Game;
import com.gamestopia.Gamestopia.entities.Image;
import com.gamestopia.Gamestopia.entities.User;
import com.gamestopia.Gamestopia.service.ImageServiceIn;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class ImageService implements ImageServiceIn {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ImageRepository imageRepository;
    @Autowired
    private GameRepository gameRepository;
    @Override
    public Image saveImageUser(MultipartFile file, String idUser) {
        User user = userRepository.findById(idUser).orElseThrow();

        try {
            Image image = new Image();
            image.setImageContent(file.getBytes());
            imageRepository.save(image);

            user.setImage(image);
            userRepository.save(user);
            return image;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public byte[] getPhotoUser(String idUser) {

        User user = userRepository.findById(idUser).orElseThrow();
        byte[] file = user.getImage().getImageContent();

        return file;
    }

    @Override
    public Image saveImageGame(MultipartFile file, String idGame) {
        Game game = gameRepository.findById(idGame).orElseThrow();

        try {
            Image image = new Image();
            image.setImageContent(file.getBytes());
            imageRepository.save(image);

            game.setImage(image);
            gameRepository.save(game);
            return image;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public byte[] getPhotoGame(String idGame) {

        Game game = gameRepository.findById(idGame).orElseThrow();
        byte[] file = game.getImage().getImageContent();

        return file;
    }
}
