import React, { useState, useEffect } from 'react';
import booksData from '../data/Books.json';

const BrowseBooks = () => {

  const [books, setBooks] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {

    const storedBooks =
      JSON.parse(localStorage.getItem('libraryBooks')) || [];

    let finalBooks = [];

    if (storedBooks.length === 0) {
      finalBooks = booksData;
      localStorage.setItem(
        'libraryBooks',
        JSON.stringify(booksData)
      );
    } else {

      finalBooks = [...booksData];

      storedBooks.forEach(book => {
        const exists = finalBooks.find(
          b => b.id === book.id
        );

        if (!exists) {
          finalBooks.push(book);
        }
      });

      localStorage.setItem(
        'libraryBooks',
        JSON.stringify(finalBooks)
      );
    }

    fetch("https://openlibrary.org/search.json?q=library")
      .then(res => res.json())
      .then(data => {
        const apiBooks = data.docs.slice(0, 6).map((item, index) => ({
          id: "api" + index,
          name: item.title,
          author: item.author_name ? item.author_name[0] : "Unknown",
          description: "Book fetched from Open Library API",
          imageUrl: item.cover_i
            ? `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`
            : "https://via.placeholder.com/150"
        }));
        const mergedBooks = [...finalBooks, ...apiBooks];

        setBooks(mergedBooks);

      })
      .catch(error => {

        console.log("API error:", error);
        setBooks(finalBooks);

      });
  }, []);

  const handleBorrow = (book) => {

    const existingBorrowed =
      JSON.parse(localStorage.getItem('borrowedBooks')) || [];

    const alreadyBorrowed = existingBorrowed.find(
      b => b.id === book.id
    );

    if (alreadyBorrowed) {
      alert('Book already borrowed');
      return;
    }

    existingBorrowed.push(book);

    localStorage.setItem(
      'borrowedBooks',
      JSON.stringify(existingBorrowed)
    );

    setSuccessMessage('Book borrowed successfully');

    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div>
      <h2>Browse Books</h2>

      {successMessage && (
        <div style={{ color: '#28a745', marginTop: '15px' }}>
          {successMessage}
        </div>
      )}

      {books.length === 0 ? (
        <p style={{ marginTop: '20px' }}>
          No books available.
        </p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '25px',
            marginTop: '30px'
          }}
        >

          {books.map((book, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
              }}
            >
              <div style={{ height: '200px' }}>
                <img
                  src={book.imageUrl}
                  alt={book.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    backgroundColor: '#f5f5f5'
                  }}
                />
              </div>

              <div style={{ padding: '20px' }}>
                <h3 style={{ marginBottom: '10px' }}>
                  {book.name}
                </h3>

                <p style={{ fontSize: '14px', color: '#666' }}>
                  <strong>Author:</strong> {book.author}
                </p>

                <p style={{ fontSize: '14px', color: '#777', marginTop: '8px' }}>
                  {book.description}
                </p>

                <button
                  onClick={() => handleBorrow(book)}
                  className="submit-btn"
                  style={{ marginTop: '15px', width: '100%' }}
                >
                  Borrow
                </button>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseBooks;