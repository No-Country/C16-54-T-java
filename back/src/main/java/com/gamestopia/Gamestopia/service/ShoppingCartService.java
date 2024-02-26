package com.gamestopia.Gamestopia.service;

import com.gamestopia.Gamestopia.entities.ShoppingCart;
import com.gamestopia.Gamestopia.repositories.ShoppingCartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ShoppingCartService {

    private final ShoppingCartRepository shoppingCartRepository;
    
    @Autowired
    public ShoppingCartService(ShoppingCartRepository shoppingCartRepository) {
        this.shoppingCartRepository = shoppingCartRepository;
    }
    
    /**
     * Obtiene la lista de productos en el carrito para el cliente dado.
     * @param userName Nombre de usuario del cliente.
     * @return Lista de productos en el carrito.
     */
    public List<ShoppingCart> getListByClient(String userName){
        return this.shoppingCartRepository.findByClient_UserName(userName);
    }
    
    /**
     * Limpia el carrito de compras para un cliente específico.
     * @param clientId ID del cliente.
     */
    public void cleanShoppingCart(String clientId){
        this.shoppingCartRepository.deleteByClient_Id(clientId);
    }
    
    /**
     * Elimina un producto del carrito de compras.
     * @param id ID del producto en el carrito.
     */
    public void removeProduct(String id){
        this.shoppingCartRepository.deleteById(id);
    }
    
    /**
     * Agrega un producto al carrito de compras.
     * @param shoppingCart Producto a agregar al carrito.
     */
    public void addProduct(ShoppingCart shoppingCart){
        this.shoppingCartRepository.save(shoppingCart);
    }
    
    /**
     * Obtiene la cantidad de productos en el carrito para un cliente específico.
     * @param clientId ID del cliente.
     * @return Cantidad de productos en el carrito.
     */
    public Long getCountByClient(String clientId){
        return this.shoppingCartRepository.countByClient_Id(clientId);
    }
}