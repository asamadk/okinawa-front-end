import React from "react";
import ServiceCard from "./ServiceCard";
import '../Styles/Home.css'
import { Link } from "react-router-dom";

const Home = () => {

    
    const Services = [
        {
            id:1,
            name : 'web development' ,
            img : 'https://i.ibb.co/8sKd9JJ/Pngtree-modern-flat-design-concept-of-5332909.png'
        },
        {
            id:2,
            name : 'App development',
            img : 'https://i.ibb.co/M84tpYr/Pngtree-modern-flat-design-concept-of-5331513.png'
        },
        {
            id:3,
            name : 'Devops' ,
            img : 'https://i.ibb.co/Tcz7QgC/Pngtree-modern-flat-design-concept-of-5332904.png'
        },
        {
            id:4,
            name : 'Maintainance' ,
            img : 'https://i.ibb.co/fXgYJmg/Pngtree-system-updates-or-maintenance-flat-6198778.png'
        }
    ];

    return(
        <>
            <div className="home-main-container">
                <div className="home-left-container">
                    <h1>lorem ipsum dummy text lorem picsum us aafm porem ipsum dorm lipsum</h1>
                    <p>ponu hcandu hagu pandu ida pota nanu tota</p>
                </div>
                <div className="home-right-container">
                    <img className="img1" src="https://i.ibb.co/DRPDrBt/jess-bailey-mexe-VPl-TB6k-unsplash.jpg" alt="jess-bailey-mexe-VPl-TB6k-unsplash" border="0"></img>
                    <img className="img2" src="https://i.ibb.co/0KcKdRt/arif-riyanto-v-JP-w-Z6h-GBg-unsplash.jpg" alt="arif-riyanto-v-JP-w-Z6h-GBg-unsplash" border="0"></img>
                </div>
            </div>
            <div className="second-main-container">
                {/* <img className="img2" src="https://picsum.photos/200/300"/> */}
                <img className="img3" src="https://i.ibb.co/KzwRPmY/dillon-shook-m-Y3-bv-R74f-I-unsplash.jpg" alt="dillon-shook-m-Y3-bv-R74f-I-unsplash" border="0"></img>
                <div className="heading-smc">
                    <h1>what makes us different from others</h1>
                    <ul>
                        <li>Latest and feasible topics</li>
                        <li>curated speakers</li>
                        <li>available on all platforms</li>
                        <li>Many different topics</li>
                    </ul>
                    <Link to='/solutions'><button>Learn more</button></Link>
                </div>
            </div>
            <div className="third-main-container">
                <h1>Our Services</h1>
                <div className="third-sub-container">
                    {
                        Services.map(service => {
                            return(
                                <ServiceCard name = {service.name} img = {service.img}/>
                            )
                        })
                    }
                    
                </div>
            </div>
            <div className="fourth-main-container">
                    <h1>Join Our growing community</h1>
                    <p>see how IT solution can grow your business</p>
                    <Link to={'/contact'}><button>Get started</button></Link>
            </div>
        </>
    )
}

export default Home;