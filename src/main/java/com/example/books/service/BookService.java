package com.example.books.service;

import com.example.books.model.Book;
import java.util.List;

public interface BookService {
    List<Book> getAllBooks();
    Book createBook(Book book);
    Book getBookById(Long id);
}
