import React, { useState } from 'react';
import BookList from './components/BookList';

//Root component of the app
function App() {
//global state to hold list of books
const [books, setBooks] = useState([]);

// Function to remove a book by its ID
const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
};
return (
    <main>
        <h1>Book Explorer</h1>
        <BookList books={books} setBooks={setBooks} onRemove={removeBook} />

    </main>
)
}

export default App;
