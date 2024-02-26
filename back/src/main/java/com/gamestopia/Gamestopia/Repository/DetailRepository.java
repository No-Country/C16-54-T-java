
package com.gamestopia.Gamestopia.Repository;

import com.gamestopia.Gamestopia.entities.Detail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DetailRepository extends JpaRepository<Detail, String> {
    List<Detail> findBySale_Id(String saleId);
}
