package com.gamestopia.Gamestopia.service;

import com.gamestopia.Gamestopia.entities.Category;

import java.util.List;
import java.util.Optional;

public interface ICategoryService {

    //Traer todas las categorias
    List<Category> getCategories();
    //Crear una categoria
    void saveCategory(Category category);
    //Borrar categoria
    void deleteCategory(String id);
    //Buscar una categoria por id
    Category findCategory(String id);
    //Editar una categoria
    void editCategory(Category category);


}
