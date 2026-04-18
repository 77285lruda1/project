package com.example.books.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/")
    public String home() {
        return "index.html";
    }
    

    @GetMapping("/book")
    public String book() {
        return "book"; // templates/book.html
    }
}
