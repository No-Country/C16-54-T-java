package com.gamestopia.Gamestopia.exception;

public class GameNotFoundException extends RuntimeException{
    public GameNotFoundException(){

    }
    public GameNotFoundException(String msg){
        super(msg);
    }
}
