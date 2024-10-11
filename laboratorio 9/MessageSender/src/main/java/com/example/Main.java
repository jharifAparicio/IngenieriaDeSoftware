package com.example;

public class Main {
    public static void main(String[] args) {
        User user = new User("jharif nelson aparicio casillas", "password123", "jharif@mail.com", "78670010");

        // Enviar mensaje a través de SMS
        ISender smsSender = new MsgPhone(user.getPhone());
        user.send(smsSender, "Este es un mensaje por SMS a " + user.getUsername());

        // Enviar mensaje a través de Email
        ISender emailSender = new MsgEmail(user.getEmail());
        user.send(emailSender, "Este es un mensaje por Email al " + user.getEmail());

        // Enviar mensaje a través de WhatsApp
        ISender whatsappSender = new MsgWhatsApp(user.getPhone());
        user.send(whatsappSender, "Este es un mensaje por WhatsApp al "+user.getPhone());
    }
}
