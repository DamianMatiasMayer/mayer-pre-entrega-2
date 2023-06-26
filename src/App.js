import React from 'react';
import { Header } from "./componentes/Header";
import 'boxicons';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductosLista from './componentes/Productos';







const App = () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route path='/' element={<Header />} />
                <Route path='/Productos' element={<ProductosLista />} />
            </Routes>
    </BrowserRouter>
  );
}

export default App;