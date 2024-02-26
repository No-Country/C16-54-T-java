
package com.gamestopia.Gamestopia.controller;

import com.gamestopia.Gamestopia.entities.Message;
import com.gamestopia.Gamestopia.entities.ShoppingCart;
import com.gamestopia.Gamestopia.service.ShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/shoppingList")
public class ShoppingCartController {
    private final ShoppingCartService shoppingCartService;

    @Autowired
    public ShoppingCartController(ShoppingCartService shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }

    /**
     * Obtiene la lista de productos en el carrito para el cliente autenticado.
     * @return ResponseEntity con la lista de productos en el carrito o NOT_FOUND si está vacío.
     */
    @GetMapping()
    public ResponseEntity<List<ShoppingCart>> getListByClient() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userName = userDetails.getUsername();
        List<ShoppingCart> shoppingCartList = this.shoppingCartService.getListByClient(userName);

        if (shoppingCartList.isEmpty()) {
            // El carrito de compras está vacío
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            // Se encontraron productos en el carrito y se devuelven con HttpStatus.OK
            return new ResponseEntity<>(shoppingCartList, HttpStatus.OK);
        }
    }
    
    /**
     * Obtiene la cantidad de productos en el carrito para un cliente específico.
     * @param id ID del cliente.
     * @return ResponseEntity con la cantidad de productos en el carrito.
     */
    @GetMapping("/count/{client_id}")
    public ResponseEntity<Long> countByClient(@PathVariable("client_id")String id){
        return new ResponseEntity<>(this.shoppingCartService.getCountByClient(id),HttpStatus.OK);
    }
    
    /**
     * Agrega un producto al carrito de compras.
     * @param shoppingCart   Producto a agregar al carrito.
     * @param bindingResult  Resultado de la validación.
     * @return ResponseEntity con un mensaje indicando el resultado de la operación.
     */
    @PostMapping()
    public ResponseEntity<Message> addProduct(@Valid @RequestBody ShoppingCart shoppingCart,
            BindingResult bindingResult){
        if (bindingResult.hasErrors())
            return new ResponseEntity<>(new Message("Revise los campos"),HttpStatus.BAD_REQUEST);
        
        this.shoppingCartService.addProduct(shoppingCart);
        return new ResponseEntity<>(new Message("Producto agregado"),HttpStatus.OK);
    }
    
     /**
     * Elimina un producto del carrito de compras.
     * @param id ID del producto en el carrito.
     * @return ResponseEntity con un mensaje indicando el resultado de la operación.
     */
    @DeleteMapping("/clean/{item_id}")
    public ResponseEntity<Message> removeProduct(@PathVariable("item_id")String id){
        this.shoppingCartService.removeProduct(id);
        return new ResponseEntity<>(new Message("Eliminado"),HttpStatus.OK);
    }
}