import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Post from './pages/Post';
const App = () => {
        let page = useParams();
        console.log(page);
        return (
            <div className="site-wrap">
                <div className="site-mobile-menu">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                </div>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/post/:page" element={<Post/>} />
                </Routes>
            </div>
        );
}

export default App;
