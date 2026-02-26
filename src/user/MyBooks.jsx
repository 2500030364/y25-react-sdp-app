import React, { useState, useEffect } from 'react';

const MyBooks = () => {

  const [borrowed, setBorrowed] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const storedBorrowed =
      JSON.parse(localStorage.getItem('borrowedBooks')) || [];

    setBorrowed(storedBorrowed);
  }, []);

  const handleReturn = (id) => {

    const updatedBooks = borrowed.filter(
      book => book.id !== id
    );

    localStorage.setItem(
      'borrowedBooks',
      JSON.stringify(updatedBooks)
    );

    setBorrowed(updatedBooks);

    setMessage('Book returned successfully');

    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div>
      <h2>My Books</h2>

      {message && (
        <div style={{ color: '#28a745', marginTop: '15px' }}>
          {message}
        </div>
      )}

      {borrowed.length === 0 ? (
        <p style={{ marginTop: '20px' }}>
          You have not borrowed any books.
        </p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '25px',
          marginTop: '30px'
        }}>
          {borrowed.map((book, index) => (
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
                    objectFit: 'cover'
                  }}
                />
              </div>

              <div style={{ padding: '20px' }}>
                <h3>{book.name}</h3>

                <p style={{ fontSize: '14px', color: '#666' }}>
                  <strong>Author:</strong> {book.author}
                </p>

                <button
                  onClick={() => handleReturn(book.id)}
                  className="submit-btn"
                  style={{ marginTop: '15px', width: '100%' }}
                >
                  Return
                </button>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBooks;