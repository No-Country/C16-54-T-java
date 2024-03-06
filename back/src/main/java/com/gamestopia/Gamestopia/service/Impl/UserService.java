
package com.gamestopia.Gamestopia.service.Impl;

import com.gamestopia.Gamestopia.Repository.GameRepository;
import com.gamestopia.Gamestopia.Repository.UserRepository;
import com.gamestopia.Gamestopia.entities.Game;
import com.gamestopia.Gamestopia.entities.User;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import com.gamestopia.Gamestopia.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author JAMES
 */
@Service
public class UserService implements IUserService {

     @Autowired
    public UserRepository userRepo;
     @Autowired
     private GameRepository gameRepository;
    
    @Override
    public List<User> listUser() {
        return userRepo.findAll(); 
    }

    @Override
    public void saveUser(User user) {
      userRepo.save(user); 
    }

    @Override
    public void deleteUser(String id) {
      userRepo.deleteById(id); 
    }

    @Override
    public User findUser(String id) {
      User user = userRepo.findById(id).orElseThrow(()-> new NoSuchElementException("No se encuentra el perfil con el id: "+ id ));
      return user;
    }

    @Override
    public void edit(String id, User updateUser) {
      User user = findUser(id);
      //En caso de "no" actualizar algun dato se sobreescribe el anteriormente guardado.
      user.setName(updateUser.getName() != null ? updateUser.getName() : user.getName());
      
      user.setLastName(updateUser.getLastName() != null ? updateUser.getLastName() : user.getLastName());
      
      user.setEmail(updateUser.getEmail() != null ? updateUser.getEmail() : user.getEmail());
     
      user.setPassword(updateUser.getPassword() != null ? updateUser.getPassword() : user.getPassword());
      
//     user.setImg(updateUser.getImg() != null ? updateUser.getImg() : user.getImg());
    }


    //@Override
    //public List<Game> gameList(String id){
    //    List<Game> myGames = new ArrayList<>();
    //    Optional<User> response = userRepo.findById(id);

    //    if(response.isPresent()){
    //        User user = response.get();
    //        myGames = gameRepository.findByUser(user);
    //    }
    //    return myGames;
    //}

}
    

