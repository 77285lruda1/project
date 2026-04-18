const API_URL = "http://localhost:8080/books";

const form = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");

// Завантажити книги
async function loadBooks() {
    const res = await fetch(API_URL);
    const books = await res.json();

    bookList.innerHTML = "";

    books.forEach(book => {
        const li = document.createElement("li");
    
        const link = document.createElement("a");
        link.href = `book.html?id=${book.id}`;
        link.textContent = `${book.title} - ${book.author}`;
    
        li.appendChild(link);
        bookList.appendChild(li);
    });
    
}



// Додати книгу
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const book = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        author: document.getElementById("author").value
    };

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    });

    form.reset();
    loadBooks();
});

// старт
loadBooks();
