package com.gamestopia.Gamestopia.service;

import com.gamestopia.Gamestopia.Repository.DeveloperRepository;
import com.gamestopia.Gamestopia.entities.Developer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeveloperService implements IDeveloperService {

    @Autowired
    private DeveloperRepository developerRepo;

    @Override
    public List<Developer> getDevelopers() {
        return developerRepo.findAll();
    }

    @Override
    public void saveDeveloper(Developer developer) {
        developerRepo.save(developer);
    }

    @Override
    public void deleteDeveloper(String id) {
        developerRepo.deleteById(id);
    }

    @Override
    public Developer findDeveloper(String id) {
        return developerRepo.findById(id).orElse(null);
    }

    @Override
    public void editDeveloper(Developer developer) {
        this.saveDeveloper(developer);
    }
}
