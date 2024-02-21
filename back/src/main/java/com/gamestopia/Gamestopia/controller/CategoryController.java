package com.gamestopia.Gamestopia.controller;

import com.gamestopia.Gamestopia.entities.Category;
import com.gamestopia.Gamestopia.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {
    @Autowired
    private ICategoryService categoryServ;

    //Crear una nueva categoria
    @PostMapping("/create")
    public String saveCategory(@RequestBody Category category) {
        categoryServ.saveCategory(category);

        return "Category created";

    }

    //Traer todas las categorias
    @GetMapping("/list")
    public List<Category> categoryList () {
        return categoryServ.getCategories();
    }

    //Traer categoria
    @GetMapping("/find/{id}")
    public Category findCategory(@PathVariable String id){
        return categoryServ.findCategory(id);
    }

    //Modificar los datos de una categoria
    @PutMapping("/edit")
    public String editCategory(@RequestBody Category category) {
        categoryServ.editCategory(category);
        return "Category edited";
    }

    @DeleteMapping ("/delete/{id}")
    public String deleteCategory(@PathVariable String id){
        categoryServ.deleteCategory(id);
        return "Category eliminated";
    }
}
