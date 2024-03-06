package com.gamestopia.Gamestopia.service;

import com.gamestopia.Gamestopia.entities.Game;
import com.gamestopia.Gamestopia.entities.ShoppingCart;

import java.util.List;

public interface IShoppingCartService {
    //Agregar producto al carrito
    ShoppingCart AddToCart(Game game);

    //Borrar producto de carrito
    void deleteToCart(String Id);

    //Traer carrito por usuario
    List<ShoppingCart> cartDetail();

    //Sumar productos del carrito
    Double totalPrice();


}
