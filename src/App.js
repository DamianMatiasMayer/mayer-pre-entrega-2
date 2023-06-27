import React from "react";
import { NavBar } from "./componentes/NavBar/NavBar";
import "boxicons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductosLista from "./componentes/ItemListContainer/ItemListContainer";



const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/Productos' element={<ProductosLista />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;