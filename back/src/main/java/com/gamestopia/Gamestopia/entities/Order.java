package com.gamestopia.Gamestopia.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.UuidGenerator;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "order")
public class Order {
    @Id
    @UuidGenerator
    //@GeneratedValue(generator = "UUID")
    //@GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "id_order", length = 45)
    private String id;
    @Column(name = "total_price", precision = 10, scale = 2)
    private BigDecimal totalPrice;
    @Column(name = "order_date", columnDefinition = "DATE")
    private LocalDate orderDate;
    @ManyToOne
    @JoinColumn(name = "id_payment")
    private Payment payment;
    @OneToOne (targetEntity = ShoppingCart.class)
    @JoinColumn(name = "id_shopping_cart")
    private ShoppingCart shoppingCart;

}
