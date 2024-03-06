package com.gamestopia.Gamestopia.Repository;

import com.gamestopia.Gamestopia.entities.ShoppingCart;
import com.gamestopia.Gamestopia.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShoppinCartRepository extends JpaRepository<ShoppingCart, String> {

    List<ShoppingCart> findByUser(User user);

}
