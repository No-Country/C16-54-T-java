
package com.gamestopia.Gamestopia.controller;

import com.gamestopia.Gamestopia.entities.Message;
import com.gamestopia.Gamestopia.entities.Sale;
import com.gamestopia.Gamestopia.service.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Null;
import java.util.List;

@RestController
@RequestMapping("/sale")
public class SaleController {

    private final SaleService saleService;

    @Autowired
    public SaleController(SaleService saleService) {
        this.saleService = saleService;
    }
    /**
     * Obtiene las ventas asociadas al cliente autenticado.
     * @return ResponseEntity con la lista de ventas del cliente o NOT_FOUND si no hay ventas.
     */
    @GetMapping("/client")
    public ResponseEntity<List<Sale>> getByClient() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userName = userDetails.getUsername();
        List<Sale> sales = saleService.getSalesByClient(userName);

        if (sales.isEmpty()) {
            // No hay ventas asociadas al cliente
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            // Se encontraron ventas y se devuelven con HttpStatus.OK
            return new ResponseEntity<>(sales, HttpStatus.OK);
        }
    }
    /**
     * Crea una nueva venta asociada al cliente autenticado.
     * @return ResponseEntity con un mensaje indicando el éxito de la compra.
     */
    @PostMapping(path = "/create")
    public ResponseEntity<Message> createSale() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userName = userDetails.getUsername();
        
        // Crea la venta asociada al cliente autenticado
        this.saleService.createSale(userName);

        return new ResponseEntity<>(new Message("Compra exitosa"), HttpStatus.OK);
    }
}