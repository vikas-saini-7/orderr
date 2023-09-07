import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Header from './components/Header';
// import Footer from './components/Footer';

const AppRouter = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element={<HomePage page='home' />} />
                <Route path="/cart" element={<CartPage page='cart' />} />
            </Routes>
            {/* <Footer/> */}
        </Router>
    );
}

export default AppRouter;
