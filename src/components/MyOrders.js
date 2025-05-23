import React from 'react';

const MyOrders = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Suivi de vos commandes</h2>
      <form>
        <label>Adresse de livraison finale : </label>
        <input type="text" placeholder="Ex: Dakar, Sénégal" style={{ display: 'block', margin: '10px 0' }} />
        <label>Capture de votre commande : </label>
        <input type="file" accept="image/*" style={{ display: 'block', margin: '10px 0' }} />
        <button type="submit">Envoyer</button>
      </form>
      <hr />
      <p>Suivi colis : <a href="https://www.17track.net/fr" target="_blank" rel="noreferrer">Accéder à 17track</a></p>
    </div>
  );
};

export default MyOrders;