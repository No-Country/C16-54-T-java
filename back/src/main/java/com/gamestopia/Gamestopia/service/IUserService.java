
package com.gamestopia.Gamestopia.service;

import com.gamestopia.Gamestopia.entities.Game;
import com.gamestopia.Gamestopia.entities.User;
import java.util.List;

/**
 *
 * @author JAMES
 */
public interface IUserService {
    //Traer una lista de usuarios
    public List<User> listUser();
    
    //Guardar usuario
    public void saveUser(User user);
    
    //Eliminar un usuario por ID
    public void deleteUser(String id);
    
    //Buscar un Usuario por ID
    public User findUser(String id);
    
    // Editar Usuario
    public void edit(String id, User updateUser);


    List<Game> gameList(String id);
}
