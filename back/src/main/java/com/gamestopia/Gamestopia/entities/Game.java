package com.gamestopia.Gamestopia.entities;

import com.gamestopia.Gamestopia.Enum.Clasification;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.UuidGenerator;

import java.math.BigDecimal;

@Entity
@Data
@Builder
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
    @Enumerated(EnumType.STRING)
    Clasification clasification;
    @Column(name = "category", length = 45)
    private String category;
    @Column(name = "developer_company", length = 45)
    private String developerCompany;
    @OneToOne
    protected Image image;
}
