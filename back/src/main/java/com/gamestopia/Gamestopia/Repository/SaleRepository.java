
package com.gamestopia.Gamestopia.repositories;

import com.gamestopia.Gamestopia.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SaleRepository extends JpaRepository<Sale,String> {
    // Método personalizado para buscar ventas por el nombre de usuario del cliente
    List<Sale> findByClient_UserName(String userName);
}