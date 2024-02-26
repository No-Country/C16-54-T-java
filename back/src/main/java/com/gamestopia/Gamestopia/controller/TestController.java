package com.gamestopia.Gamestopia.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.annotation.Secured;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/api/test")
@RequiredArgsConstructor
public class TestController {

    @GetMapping()
    public String test(){
        return "Hola mundo";
    }

    @Secured("USER")
    @GetMapping("/endpointUser")
    public String endpointUser(){
        return "Acceso a usuario";
    }
    @Secured("ADMIN")
    @GetMapping("/endpointAdmin")
    public String endpointAdmin(){
        return "Acesso a administrador";
    }

}
