import React, {useState} from 'react';

// BookCard renders indidual book details
const BookCard = ({id, title, author, description, onRemove}) => {
    //local state to toggle read more / show less
    const [readMore, setReadMore] = useState(false);
    const safeDescription = description || "No description available"; // Fallback for missing description
    // render the bookCard

    return (
        <article className="book-card">
            <h3>{title}</h3>
            <h5>{author}</h5>


            <p>
                {(readMore ? safeDescription : safeDescription.slice(0, 80)+"...")}
                <button onClick={() => setReadMore(!readMore)}>
                    {readMore ? 'Show Less' : 'Read More'}
                </button>
            </p>
            {/* remove button to remove button*/}
            <button className="btn-remove" onClick={() => {
                onRemove(id)
            }}>Remove Book</button>
        </article>
    )
}

export default BookCard;
