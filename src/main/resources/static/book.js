const API_URL = "http://localhost:8080/books";

// отримати id з URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// завантажити книгу
async function loadBook() {
    const res = await fetch(`${API_URL}/${id}`);
    const book = await res.json();

    document.getElementById("title").textContent = book.title;
    document.getElementById("author").textContent = book.author;
    document.getElementById("description").textContent = book.description;
}

loadBook();
