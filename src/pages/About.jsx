import React from 'react'

export default function About() {

  const containerStyle = {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",   // White background
    color: "#556B2F",             // Olive green text
    textAlign: "center"
  }

  const cardStyle = {
    backgroundColor: "#f8f8f8",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    border: "2px solid #556B2F",
    width: "60%"
  }

  const titleStyle = {
    fontSize: "36px",
    marginBottom: "20px",
    letterSpacing: "2px"
  }

  const textStyle = {
    fontSize: "18px",
    lineHeight: "1.6"
  }

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>About Page</h2>
        <p style={textStyle}>
          Welcome to our website. This page gives information about our project.
        </p>
      </div>
    </div>
  )
}