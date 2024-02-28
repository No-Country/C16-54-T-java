package com.gamestopia.Gamestopia.exception;

public class InvalidPassword extends RuntimeException{
    public InvalidPassword(){

    }
    public InvalidPassword(String msg){
        super(msg);
    }
}
