import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalog from './components/page/Catalog';
import Basket from './components/page/Basket';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import React, { useState } from "react";
import { Context } from "./Context";

function App() {

  const [context, setContext] = useState(JSON.parse(sessionStorage.getItem('cartIds')) === null ? 0 : JSON.parse(sessionStorage.getItem('cartIds')).length);

  return (  
    <Context.Provider value={[context, setContext]}>  
      <BrowserRouter>  
        <Header />   
          <Routes>      
            <Route path="/" element={<Catalog />} />
            <Route path="basket" element={<Basket />} />
          </Routes>
        <Footer />
      </BrowserRouter>    
    </Context.Provider> 
  );
}

export default App;