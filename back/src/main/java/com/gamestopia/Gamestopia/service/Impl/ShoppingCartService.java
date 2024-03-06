package com.gamestopia.Gamestopia.service.Impl;

import com.gamestopia.Gamestopia.Repository.ShoppinCartRepository;
import com.gamestopia.Gamestopia.Repository.UserRepository;
import com.gamestopia.Gamestopia.entities.Game;
import com.gamestopia.Gamestopia.entities.ShoppingCart;
import com.gamestopia.Gamestopia.entities.User;
import com.gamestopia.Gamestopia.service.IShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShoppingCartService implements IShoppingCartService {

    @Autowired
    private ShoppinCartRepository cartRepository;

    @Autowired
    private UserRepository userRepo;

    @Override
    public ShoppingCart AddToCart(Game game) {
        //Para vincular al juego con el carrito hay que traer los datos del user logueado
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userdetail = (UserDetails) authentication.getPrincipal();
        String email = userdetail.getUsername();
        //Lo buscamos por email ya que es lo que nos brinda los datos de autenticacion
        Optional<User> useropcional = userRepo.findByEmail(email);
        User user = useropcional.orElse(null);
        //Se crea el objeto shoppingCart
        ShoppingCart shoppingCart = new ShoppingCart(game, user);
        return cartRepository.save(shoppingCart);
    }

    @Override
    public void deleteToCart(String Id) {
        cartRepository.deleteById(Id);
    }

    @Override
    public List<ShoppingCart> cartDetail() {
        //Trayendo los datos del user logueado
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userdetail = (UserDetails) authentication.getPrincipal();
        String email = userdetail.getUsername();
        //Lo buscamos por email ya que es lo que nos brinda los datos de autenticacion
        Optional<User> useropcional = userRepo.findByEmail(email);
        User user = useropcional.orElse(null);

        return cartRepository.findByUser(user);
    }

    @Override
    public Double totalPrice() {
        List<ShoppingCart> items = this.cartDetail();
        double finalPrice = 0.00;
        for (ShoppingCart item: items){
            double price =  item.getGame().getPrice().doubleValue();
            finalPrice += price;
        }
        return finalPrice;
    }
}
