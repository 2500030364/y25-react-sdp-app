import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero-section">
        <h1>Welcome to Olive Digital Library</h1>
        <p>Discover, Explore and Read Beautifully Curated Books</p>
        <button className="hero-btn mb-4">Explore Collection</button>

        <div style={{ marginTop: "80px" }}>
          <img 
          src="https://educationalvoice.co.uk/wp-content/uploads/2024/11/v2-liov5-25t5r.jpg" 
          alt="Library"  className="w-full h-[300px] object-cover rounded-lg"/>
        </div>

      </div>

    </>
  );
};

export default Home;