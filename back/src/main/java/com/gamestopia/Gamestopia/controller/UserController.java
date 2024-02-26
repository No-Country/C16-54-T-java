package com.gamestopia.Gamestopia.controller;

import com.gamestopia.Gamestopia.entities.User;
import com.gamestopia.Gamestopia.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 *
 * @author JAMES
 */
@RestController
@RequestMapping("/user")//localhost:8080/user

public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/lista")
    public List<User> userList() {
        return userService.listUser();
    }

    @GetMapping("/buscar/{id}")
    public User findUser(@PathVariable String id) {
        return userService.findUser(id);
    }

    @PostMapping("/crear")
    public void saveUser(@RequestBody User user) {
        userService.save(user);
    }

    @DeleteMapping("/borrar/{id}")
    public void deleteUser(@PathVariable String id) {
        userService.deleteUser(id);
    }

    @PutMapping("/actualizar/{id}")
    public void editUser(@PathVariable String id, @RequestBody User updateUser) {
        userService.edit(id, updateUser);
    }
}