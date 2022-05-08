import React from 'react'
import * as Utils from '../Utils/Constants';
import '../Styles/About.css'

export default function About() {
  return (
    <div className='about-main-container'>
        <h1>About us</h1>
      <div className='about-first-container'>
        <p>{Utils.ABOUT_US}</p>
      </div>
      <div className='about-images-container'>
        <img className='img5' src="https://i.ibb.co/my92d0t/radowan-nakif-rehan-79g15d8oo4-M-unsplash.jpg" alt="radowan-nakif-rehan-79g15d8oo4-M-unsplash" border="0"></img>
        <img className='img5' src="https://i.ibb.co/hsMXw2V/alexandru-acea-WBYxm-W4yuw-unsplash.jpg" alt="alexandru-acea-WBYxm-W4yuw-unsplash" border="0"></img>
        <img className='img5' src="https://i.ibb.co/DGyL3sQ/oliur-8j-STB6-NLm-VQ-unsplash.jpg" alt="oliur-8j-STB6-NLm-VQ-unsplash" border="0"></img>
      </div>
    </div>
  )
}
