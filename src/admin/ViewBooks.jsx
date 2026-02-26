import React, { useState, useEffect } from 'react';

const ViewBooks = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks =
      JSON.parse(localStorage.getItem('libraryBooks')) || [];

    setBooks(storedBooks);
  }, []);

  return (
    <div>
      <h2>All Books</h2>

      {books.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '25px',
          marginTop: '30px'
        }}>
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
              <div style={{
                height: '200px',
                backgroundColor: '#f5f5f5'
              }}>
                <img
                  src={book.imageUrl}
                  alt={book.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              <div style={{ padding: '20px' }}>
                <h3 style={{ marginBottom: '10px' }}>
                  {book.name}
                </h3>

                <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
                  <strong>Author:</strong> {book.author}
                </p>

                <p style={{ fontSize: '14px', color: '#777' }}>
                  {book.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewBooks;