package com.gamestopia.Gamestopia.service;

import com.gamestopia.Gamestopia.entities.Image;
import org.springframework.web.multipart.MultipartFile;

public interface ImageServiceIn {
    public Image saveImageUserImage(MultipartFile file, String idUser);
    byte[] getPhotoUser(String idUser);

    public Image saveImageGame (MultipartFile file, String idGame);
    byte[] getPhotoGame(String idGame);
}
