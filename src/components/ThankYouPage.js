import React, { useEffect } from 'react';

const ThankYouPage = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = 'https://payqin.com';
    }, 3000);
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Merci pour votre inscription !</h1>
      <p>Redirection vers notre partenaire PayQin...</p>
    </div>
  );
};

export default ThankYouPage;