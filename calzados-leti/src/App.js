
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route  path="/" Component={Home} />
            <Route path="/productos/:id" Component={ProductDetails} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
