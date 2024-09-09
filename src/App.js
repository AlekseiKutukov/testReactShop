import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalog from './page/Catalog';
import Basket from './page/Basket';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import BasketContext from './context/BasketContext';
import Contacts from './page/Contacts';
import Servis from './page/Servis';
import Solucionis from './page/Solucionis';
import Favorites from './page/Favorites';

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

        {/* {modalContext && <Modal />} */}
        <Routes>
          <Route index={true} element={<Catalog />} />
          <Route path="/" element={<Catalog />} />
          <Route path="basket" element={<Basket />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="servis" element={<Servis />} />
          <Route path="solucionis" element={<Solucionis />}></Route>
          <Route path="favorites" element={<Favorites />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </BasketContext.Provider>
  );
}

export default App;
