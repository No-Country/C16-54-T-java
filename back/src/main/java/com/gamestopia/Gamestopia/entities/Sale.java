
package com.gamestopia.Gamestopia.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;

@Entity
@AllArgsConstructor
@NoArgsConstructor 
public class Sale{
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Getter @Setter
    private String id;
    
    @NotNull
    @Getter @Setter
    private Double total;
    
    @NotNull
    @Getter @Setter
    @Column(columnDefinition = "DATE")
    private Date date;
    
    @ManyToOne(optional = false, cascade = CascadeType.DETACH, fetch = FetchType.EAGER)
    @Getter @Setter
    private User client;

    public Sale(double total, Date date, User client) {
        this.total = total;
        this.date = date;
        this.client = client;
    }

    public Sale(double parseDouble, Date date, com.gamestopia.Gamestopia.entities.User client) {
        throw new UnsupportedOperationException("Not supported yet."); 
    }
}