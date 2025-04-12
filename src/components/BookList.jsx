import React, {useEffect, useState} from 'react';
import BookCard from './BookCard';

//BookList is used for fetching books and rendering the list

const BookList = ({books, setBooks, onRemove}) => {
    // Local state to manage loading and errors
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    //Function to fetch books from API


const fetchBooks = async () => {
    try {
        const res = await fetch("https://gutendex.com/books/");
        // maps api data to only the required firles
        const trimmed = data.results.map((book) => ({
            id: book.id,
            title: book.title,
            author: book.authors[0]?.name || "Unknown",
            description: `Download count: #${book.download_count}. Subjects ${book.subjects.slice(0, 3).join(", ")}`,
        }));
        setBooks(trimmed); //save data to global state
        setLoading(false); //set loading to false
    }
catch (error) {
        setError(true); //if fetch fails it shows error
        setLoading(false); //set loading to false   
    }
}
};

// Run fetchBooks once after the component mounts
useEffect(() => {
    fetchBooks();
}, []);

// Render loading state

if (loading) {
    return <h2>Loading...</h2>;
};
// Render error state
if (error) {
    return <h2>Something went wrong...</h2>;
};
//Render if no books
if (books.length === 0) {
    return <h2>No books available</h2>;
    <button onClick= {fetchBooks}>Refresh</button>

//Render the list of BookCards

    return (
        <section className="book-list">
            {books.map((book) => {
                return (
                <BookCard 
                key={book.id} 
                {...book} 
                onRemove={onRemove} 
                />
            );
            })}
    
        
        </section>
    );
};

export default BookList;
