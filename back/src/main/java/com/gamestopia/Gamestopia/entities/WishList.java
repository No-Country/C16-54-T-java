package com.gamestopia.Gamestopia.entities;

import jakarta.persistence.*;
import org.hibernate.annotations.UuidGenerator;

@Entity
@Table(name = "wish_list")
public class WishList {

    @Id
    @UuidGenerator
    private String id;

    @ManyToOne
    @JoinColumn(name = "id_user")
    private User user;

    @ManyToOne
    @JoinColumn(name = "id_game")
    private Game game;
}
