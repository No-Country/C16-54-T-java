package com.gamestopia.Gamestopia.controller;

import com.gamestopia.Gamestopia.entities.Developer;
import com.gamestopia.Gamestopia.service.IDeveloperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/developer")
public class DeveloperController {

    @Autowired
    private IDeveloperService developerServ;

    //Crear un nuevo desarrollador
    @PostMapping("/create")
    public String saveDeveloper(@RequestBody Developer developer) {
        developerServ.saveDeveloper(developer);

        return "Developer created";

    }

    //Traer todos los desarrolladores
    @GetMapping("/list")
    public List<Developer> developerList () {
        return developerServ.getDevelopers();
    }

    //Traer desarrollador
    @GetMapping("/find/{id}")
    public Developer findDeveloper(@PathVariable String id){
        return developerServ.findDeveloper(id);
    }

    //Modificar los datos de un desarrollador
    @PutMapping("/edit")
    public String editDeveloper(@RequestBody Developer developer) {
        developerServ.editDeveloper(developer);
        return "Developer edited";
    }

    @DeleteMapping ("/delete/{id}")
    public String deleteDeveloper(@PathVariable String id){
        developerServ.deleteDeveloper(id);
        return "Developer eliminated";
    }
}
