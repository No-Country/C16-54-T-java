package com.gamestopia.Gamestopia.service;

import com.gamestopia.Gamestopia.entities.Detail;
import com.gamestopia.Gamestopia.entities.Sale;
import com.gamestopia.Gamestopia.entities.ShoppingCart;
import com.gamestopia.Gamestopia.repositories.SaleRepository;
import com.gamestopia.Gamestopia.entities.User;
import java.math.BigDecimal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.util.Date;
import java.util.List;
import java.util.Locale;

@Service
@Transactional
public class SaleService {

    private final SaleRepository saleRepository;
    private final UserService userService;
    private final ShoppingCartService shoppingCartService;
    private final DetailService detailService;

    @Autowired
    public SaleService(SaleRepository saleRepository, UserService userService, ShoppingCartService shoppingCartService, DetailService detailService) {
        this.saleRepository = saleRepository;
        this.userService = userService;
        this.shoppingCartService = shoppingCartService;
        this.detailService = detailService;
    }

    /**
     * Obtiene las ventas asociadas al cliente.
     *
     * @param userName Nombre de usuario del cliente.
     * @return Lista de ventas del cliente.
     */
    public List<Sale> getSalesByClient(String userName) {
        return this.saleRepository.findByClient_UserName(userName);
    }

    /**
     * Crea una nueva venta asociada al cliente y actualiza los detalles y el
     * carrito de compras.
     *
     * @param userName Nombre de usuario del cliente.
     */
    public void createSale(String userName) {
        User client = this.userService.getByUserName(userName).get();
        List<ShoppingCart> shoppingCartList = this.shoppingCartService.getListByClient(client.getUserName());

        // Formateo del total de la venta
        DecimalFormat decimalFormat = new DecimalFormat("0.00", new DecimalFormatSymbols(Locale.US));
        decimalFormat.setRoundingMode(RoundingMode.DOWN);
        double total = shoppingCartList.stream()
                .mapToDouble(shoppingCartItem -> shoppingCartItem.getGame().getPrice()
                .multiply(BigDecimal.valueOf(shoppingCartItem.getAmount())).doubleValue()).sum();

        // Creación de la venta
        Sale sale = new Sale(Double.parseDouble(decimalFormat.format(total)), new Date(), client);
        Sale saveSale = this.saleRepository.save(sale);
        
        // Creación de los detalles asociados a la venta
        for (ShoppingCart shoppingCart : shoppingCartList) {
            Detail details = new Detail();
            details.setGames(shoppingCart.getGame());
            details.setAmount(shoppingCart.getAmount());
            details.setSale(saveSale);
            this.detailService.createDetail(details);
        }
        // Limpieza del carrito de compras
        this.shoppingCartService.cleanShoppingCart(client.getId());
    }
}
