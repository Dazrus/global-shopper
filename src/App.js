import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThankYouPage from './components/ThankYouPage';
import MyOrders from './components/MyOrders';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/orders" element={<MyOrders />} />
      </Routes>
    </Router>
  );
}

export default App;