package com.gamestopia.Gamestopia.controller;

import com.gamestopia.Gamestopia.entities.Game;
import com.gamestopia.Gamestopia.entities.ShoppingCart;

import com.gamestopia.Gamestopia.service.Impl.GameService;
import com.gamestopia.Gamestopia.service.Impl.ShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/shopping_cart")
public class ShoppingCartController {

    @Autowired
    private ShoppingCartService shoppingCartService;

    @Secured("USER")
    @PostMapping("/add")
    public ResponseEntity<ShoppingCart> addCart(@RequestBody Game game){
        ShoppingCart addtoCart = shoppingCartService.AddToCart(game);
        return ResponseEntity.status(HttpStatus.CREATED).body(addtoCart);
    }

    @Secured("USER")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteToCart(@PathVariable String id){
        shoppingCartService.deleteToCart(id);
        return ResponseEntity.noContent().build();
    }

    @Secured("USER")
    @GetMapping("/list")
    public ResponseEntity<List<ShoppingCart>> listCart(){
        List<ShoppingCart> listCart = shoppingCartService.cartDetail();
        return ResponseEntity.ok(listCart);
    }

    @Secured("USER")
    @GetMapping("/total")
    public ResponseEntity<Double> totalPrice(){
        Double total = shoppingCartService.totalPrice();
        return ResponseEntity.ok(total);
    }

}
