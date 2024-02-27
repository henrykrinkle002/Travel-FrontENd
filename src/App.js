import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import './Components/Navbar/navbar.scss';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';

const App = () => {


	return (
       
      <>
    <BrowserRouter>
     <Navbar />
      <Home />
     <Main />

     <Footer />
    </BrowserRouter> 

      </>

		);
}


export default App;