import React from "react";
import ServiceCard from "./ServiceCard";
import '../Styles/Home.css'
import { Link } from "react-router-dom";

const Home = () => {

    
    const Services = [
        {
            id:1,
            name : 'web development' 
        },
        {
            id:2,
            name : 'app development' 
        },
        {
            id:3,
            name : 'Web Security' 
        },
        {
            id:4,
            name : 'Maintainance' 
        },
        {
            id:5,
            name : 'Devops' 
        },
        {
            id:6,
            name : 'Devops' 
        },
        {
            id:7,
            name : 'Devops' 
        },
        {
            id:8,
            name : 'Devops' 
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
                    <img className="img1" src="https://picsum.photos/200/300"/>
                    <img src="https://picsum.photos/200/300"/>
                </div>
            </div>
            <div className="second-main-container">
                <img className="img2" src="https://picsum.photos/200/300"/>
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
                                <ServiceCard name = {service.name}/>
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