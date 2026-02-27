import React, { useState } from 'react';

const AddBook = () => {

  const [formData, setFormData] = useState({
    name: '',
    author: '',
    description: '',
    imageUrl: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.author ||
      !formData.description ||
      !formData.imageUrl
    ) {
      alert('All fields are required');
      return;
    }

    const existingBooks =
      JSON.parse(localStorage.getItem('libraryBooks')) || [];

    const newBook = {
      ...formData,
      id: Math.floor(Math.random() * 900000) + 100000,
      addedAt: new Date().toLocaleString()
    };

    existingBooks.push(newBook);

    localStorage.setItem(
      'libraryBooks',
      JSON.stringify(existingBooks)
    );

    setSuccessMessage('Book added successfully');

    setFormData({
      name: '',
      author: '',
      description: '',
      imageUrl: ''
    });

    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div>
      <h2>Add Book</h2>

      {successMessage && (
        <div style={{
          color: '#28a745',
          marginBottom: '20px'
        }}>
          {successMessage}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '600px',
          marginTop: '30px'
        }}
      >

        <div className="form-group">
          <label>Book Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter book name"
            required
          />
        </div>

        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter author name"
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter Book Description"
            required
          />
        </div>

        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Enter image URL"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Book
        </button>

      </form>
    </div>
  );
};

export default AddBook;