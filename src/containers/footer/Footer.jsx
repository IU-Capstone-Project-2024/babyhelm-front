import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Babyhelm. All rights reserved.</p>
        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="/about">About</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer