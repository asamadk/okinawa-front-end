import React from "react";
import ServiceCard from "./ServiceCard";
import * as Util from '../Utils/Constants';
import '../Styles/Home.css'
import { Link } from "react-router-dom";

const Home = () => {

    return(
        <>
            <div className="home-main-container">
                <div className="home-left-container">
                    <h1>{Util.HOME_HEADING}</h1>
                    <p>{Util.HOME_SUB_HEADING}</p>
                </div>
                <div className="home-right-container">
                    <img className="img1" src="https://i.ibb.co/YBgw9xV/Jan06.jpg" alt="jess-bailey-mexe-VPl-TB6k-unsplash" border="0"></img>
                    <img className="img2" src="https://i.ibb.co/7ngpbBr/Jan18.jpg" alt="arif-riyanto-v-JP-w-Z6h-GBg-unsplash" border="0"></img>
                </div>
            </div>
            <div className="second-main-container">
                <img className="img3" src="https://i.ibb.co/ZKdhQfv/4565.jpg" alt="dillon-shook-m-Y3-bv-R74f-I-unsplash" border="0"></img>
                <div className="heading-smc">
                    <h1>{Util.WHAT_MAKES_DIFFERENT}</h1>
                    <ul>
                    {Util.DIFFERENT_LIST.map(list => {
                        return(
                            <li>{list}</li>
                    )})}
                    </ul>
                    <Link to='/solutions'><button>{Util.LEARN_MORE}</button></Link>
                </div>
            </div>
            <div className="third-main-container">
                <h1>{Util.OUR_SERVICES}</h1>
                <div className="third-sub-container">
                    {
                        Util.SERVICE_SMALL.map(service => {
                            return(
                                <ServiceCard name = {service.name} img = {service.img}/>
                            )
                        })
                    }
                    
                </div>
            </div>
            <div className="fourth-main-container">
                    <h1>{Util.JOIN_US}</h1>
                    <p>{Util.JOIN_US}</p>
                    <Link to={'/contact'}><button>{Util.GET_STARTED}</button></Link>
            </div>
        </>
    )
}

export default Home;