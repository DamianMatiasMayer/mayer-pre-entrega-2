import React from 'react';
import { Header } from "./componentes/Header";
import 'boxicons';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductosLista from './componentes/Productos';






const App = () => {
  return (
    <Router>
      <Header /> 
      <ProductosLista/>
    </Router>
  );
}

export default App;