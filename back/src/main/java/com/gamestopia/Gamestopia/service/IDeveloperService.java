package com.gamestopia.Gamestopia.service;

import com.gamestopia.Gamestopia.entities.Developer;

import java.util.List;
import java.util.Optional;

public interface IDeveloperService {
    //Traer todos los desarrolladores
    List<Developer> getDevelopers();
    //Crear un desarrollador
    void saveDeveloper(Developer developer);
    //Borrar desarrollador
    void deleteDeveloper(String id);
    //Buscar un desarrollador por id
    Developer findDeveloper(String id);
    //Editar un Desarrollador
    void editDeveloper(Developer developer);
}
