import React from 'react'
import Collapsable from './Collapsable'
import * as Utils from '../Utils/Constants';
import '../Styles/Faq.css'

export default function Faq() {
  
  return (
      <div className='faq-main-container'>
        <h1>FAQs</h1>
        <p>{Utils.CONTACT_US}</p>
        <div className='faq-sub-container'>
        {Utils.FAQs.map(f => {
          return(
            <Collapsable question ={f.question} answer = {f.answer}/>
        )})}
        </div>
      </div>
  )
}
