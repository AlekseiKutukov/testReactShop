import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalog from './components/page/Catalog';
import Basket from './components/page/Basket';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import BasketContext from './context/BasketContext';

function App() {
  const [basketContext, setBasketContext] = useState(
    JSON.parse(sessionStorage.getItem('cartIds')) === null
      ? 0
      : JSON.parse(sessionStorage.getItem('cartIds')).length
  );

  return (
    <BasketContext.Provider value={[basketContext, setBasketContext]}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="basket" element={<Basket />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </BasketContext.Provider>
  );
}

export default App;
