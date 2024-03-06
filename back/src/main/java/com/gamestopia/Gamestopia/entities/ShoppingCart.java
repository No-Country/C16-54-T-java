package com.gamestopia.Gamestopia.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.UuidGenerator;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "shopping_cart")
public class ShoppingCart {
    @Id
    @UuidGenerator
    @Column (name = "id_shoppingcart")
    private String id;
    @ManyToOne(targetEntity = Game.class, optional = false, cascade = CascadeType.DETACH, fetch = FetchType.EAGER)
    @JoinColumn (name = "id_game")
    private Game game;

    @ManyToOne(targetEntity = User.class, optional = false, cascade = CascadeType.DETACH, fetch = FetchType.EAGER)
    @JoinColumn (name = "id_user")
    private User user;

    public ShoppingCart(Game game, User user) {
        this.game = game;
        this.user = user;
    }
}
