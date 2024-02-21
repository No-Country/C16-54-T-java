
package com.gamestopia.Gamestopia.controller;

import com.gamestopia.Gamestopia.entities.User;
import com.gamestopia.Gamestopia.service.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author JAMES
 */
@RestController
@RequestMapping("/user")//localhost:8080/user
public class UserController {
    
    @Autowired
    UserService iUserService;

    @GetMapping("/lista")
    public List<User> userList() {
        List<User> list = iUserService.listUser();
        return list;
    }
    
    @GetMapping("/buscar/{id}")
     public User findUser(@PathVariable String id){
         User user = iUserService.findUser(id);
         return user;    
     }
    
    @PostMapping("/crear")
    public void saveUser(@RequestBody User user){
        iUserService.saveUser(user);
    }
    
    @DeleteMapping("/borrar/{id}")
    public void deleteUser(@PathVariable String id){
        iUserService.deleteUser(id);
    }
    
    @PutMapping("/actualizar/{id}")
    public void editUser(@PathVariable String id, 
                         @RequestBody User updateUser){
        iUserService.edit(id, updateUser);
    }
}
