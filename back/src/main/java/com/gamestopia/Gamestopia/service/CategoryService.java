package com.gamestopia.Gamestopia.service;

import com.gamestopia.Gamestopia.Repository.CategoryRepository;
import com.gamestopia.Gamestopia.entities.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService implements ICategoryService{

    @Autowired
    private CategoryRepository categoryRepo;

    @Override
    public List<Category> getCategories() {
        return categoryRepo.findAll();
    }

    @Override
    public void saveCategory(Category category) {
        categoryRepo.save(category);
    }

    @Override
    public void deleteCategory(String id) {
        categoryRepo.deleteById(id);
    }

    @Override
    public Category findCategory(String id) {
        return categoryRepo.findById(id).orElse(null);
    }

    @Override
    public void editCategory(Category category) {
        this.saveCategory(category);
    }
}
