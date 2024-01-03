import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
const Header = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const api= axios.create({
            baseURL: process.env.REACT_APP_HTTP_API
        });
        const token='17';
        api.interceptors.request.use((config) => {
            config.headers.Authorization = 'Basic ' + btoa(token);
            return config;
        }, null, { synchronous: true });
        const fetchData = async () =>{
            api.get("objgroup/?uid=1&grp=7")
                .then((res) => {
                    const dat= res.data.val;
                    setData(dat)
                })
                .catch((err) => err);
        }
        fetchData();
    }, []);
    console.log(data);
    console.log(data);
    console.log(data);
      return (
            <header className="site-navbar py-3" role="banner">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-6 col-xl-2" data-aos="fade-down">
                            <h1 className="mb-0"><a href="index.html" className="text-white h2 mb-0">Nikos Drosakis
                                Portal</a></h1>
                        </div>
                        <div className="col-10 col-md-8 d-none d-xl-block" data-aos="fade-down">
                            <nav className="site-navigation position-relative text-right text-lg-center"
                                 role="navigation">
                                <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                                    <li className="active"><Link to="/">Home</Link></li>
                                    <li className="has-children">
                                        <Link to="/post">Gallery</Link>
                                        <ul className="dropdown">
                                        {data ? data.map(pages => {
                                            return (
                                         <li><Link to={"/post/" + pages.name } >{ pages.name }</Link></li>
                                            )
                                        })
                                         :
                                            <div>None</div>
                                        }
                                        </ul>
                                    </li>
                                    <li><Link to="/services">Services</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-6 col-xl-2 text-right" data-aos="fade-down">
                            <div className="d-none d-xl-inline-block">
                                <ul className="site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0"
                                    data-class="social">
                                    <li>
                                        <a href="\" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
                                    </li>
                                    <li>
                                        <a href="\" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                                    </li>
                                    <li>
                                        <a href="\" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                                    </li>
                                    <li>
                                        <a href="\" className="pl-3 pr-3"><span
                                            className="icon-youtube-play"></span></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
                                 style={{position: 'relative', top: '3px'}}><a href="\"
                                                                               className="site-menu-toggle js-menu-toggle text-black"><span
                                className="icon-menu h3"></span></a></div>
                        </div>
                    </div>
                </div>
            </header>
        );
}
export default Header;