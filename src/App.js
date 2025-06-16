import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import Main from './components/Main';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import SignUpPage from './Pages/Signup';
import Phone from './Products/phone';
import Headphones from './Products/headphone'
import Airbuds from './Products/airbuds';
import Games from './Products/games';
import Smarttv from './Products/smarttv';
import Speaker from './Products/speaker';
import Loptop from './Products/Loptop';
import Smartwatch from './Products/smartwatch';
import Refregirator from './Products/reffrigirater';
import Tablets from './Products/tablet';
import { AppProviders } from './Provoiders/AppProviders';
// import Login from './Pages/Login';




function App() {
  return (
    <AppProviders>

        
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home2" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signup" element={<SignUpPage />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/airbuds" element={<Airbuds />}/>
        <Route path="/phone" element={<Phone />}/>
        <Route path="/headphone" element={<Headphones />}/>
        <Route path="/game" element={<Games />}/>
        <Route path="/smarttv" element={<Smarttv />}/>
        <Route path="/smartwatch" element={<Smartwatch />}/>
        <Route path="/speaker" element={<Speaker />}/>
        <Route path="/loptop" element={<Loptop />}/>
        <Route path="/refregirator" element={<Refregirator />}/>
        <Route path="/tablet" element={<Tablets />}/>
      </Routes>
    </Router>

    </AppProviders>
  );
}

export default App; 