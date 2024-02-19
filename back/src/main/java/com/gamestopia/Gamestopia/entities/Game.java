package com.gamestopia.Gamestopia.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.UuidGenerator;

import java.math.BigDecimal;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "game")
public class Game {
    @Id
    @UuidGenerator
    //@GeneratedValue(generator = "UUID")
    //@GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "id_game", length = 45)
    private String id;
    @Column(name = "name", length = 45)
    private String name;
    @Column(name = "description", length = 100)
    private String description;
    @Column(precision = 10, scale = 2)
    private BigDecimal price;
    @Column(columnDefinition = "TINYINT(1)")
    private boolean active;
    @Column(columnDefinition = "TINYINT(1)")
    private boolean promotion;
    @ManyToOne
    @JoinColumn(name = "id_developer")
    private Developer developer;
    @ManyToOne
    @JoinColumn(name = "id_clasification")
    private Clasification clasification;
    @ManyToOne
    @JoinColumn(name = "id_category")
    private Category category;
    //Esta faltando aun colocar el atributo para almacenar las imagenes
}
