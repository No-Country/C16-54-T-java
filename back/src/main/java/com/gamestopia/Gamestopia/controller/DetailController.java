
package com.gamestopia.Gamestopia.controller;

import com.gamestopia.Gamestopia.entities.Detail;
import com.gamestopia.Gamestopia.service.DetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/saleDetail")
public class DetailController {

    private final DetailService detailService;

    
    public DetailController(DetailService detailService) {
        this.detailService = detailService;
    }
    @GetMapping("/{sale_id}")
    public ResponseEntity<List<Detail>> getDetailBySale(@PathVariable("sale_id") String saleId) {
        List<Detail> detail = detailService.getDetailBySale(saleId);
        
        if (detail.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);// No se encontraron detalles para la venta específica
        } else {
            return new ResponseEntity<>(detail, HttpStatus.OK); // Se encontraron detalles y se devuelven con HttpStatus.OK
        }
    }
}

