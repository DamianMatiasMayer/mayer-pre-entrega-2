import React from 'react';
import { Header } from "./components/Header";
import 'boxicons';
import { BrowserRouter as Router } from 'react-router-dom';





const App = () => {
  return (
    <Router>
      <Header />      
    </Router>
  );
}

export default App;