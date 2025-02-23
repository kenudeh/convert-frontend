// NotFound.js
import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

function NotFound() {
  return (
    <div>
      <NavBar />
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Footer />
    </div>
  );
}

export default NotFound;