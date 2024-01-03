import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
function Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
const Post = () => {
    const url = useParams();
    const page = url.page;
    const [data, setData] = useState([]);
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
            api.get("obj/?uid=1&grp=7")
                .then((res) => {
                    const dat= res.data.val;
                    setData(dat)
                })
                .catch((err) => err);
        }
        fetchData();
    }, []);
    console.log(data);
    return (
            <>
                <Header/>
                <div className="site-section" data-aos="fade">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-md-7">
                                <div className="row mb-5">
                                    <div className="col-12 ">
                                        <h2 className="site-section-heading text-center">{Capitalize(page)} Gallery</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            data.length > 0 ? data.map(item =>
                                <div className="row" id="lightgallery">
                                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 item" data-aos="fade"
                                         data-src="images/big-images/nature_big_1.jpg"
                                         data-sub-html="<h4>Fading Light</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque hic excepturi fugit, sunt impedit fuga tempora, ad amet aliquid?</p>">
                                        <Link to={`/post/${page}`}>
                                            <img src={ "/images/"+page+"/" + item.filename } alt={ item.filename } className="img-fluid"/>
                                        </Link>
                                    </div>
                                </div>
                            ) :
                                <div>
                                    No images here
                                </div>
                        }
                    </div>
                </div>
                <Footer/>
            </>
        );
}
export default Post;