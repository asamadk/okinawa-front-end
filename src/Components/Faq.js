import React from 'react'
import Collapsable from './Collapsable'
import { Link } from "react-router-dom";
import '../Styles/Faq.css'

export default function Faq() {

  const faq = [
    {
      question : 'What other services you provide',
      answer : 'We provide all IT services from development to deployment'
    },
    {
      question : 'Question',
      answer : 'answer'
    },
    {
      question : 'Question',
      answer : 'answer'
    },
    {
      question : 'Question',
      answer : 'answer'
    },
    {
      question : 'Question',
      answer : 'answer'
    },
  ]

  return (
    <>
      <div className='faq-main-container'>
        <h1>FAQs</h1>
        <p>These are some frequently asked questions by our visitors, If you don't find what you are looking for feel free to </p>
        <Link to='/contact'>contact us</Link>
        <div className='faq-sub-container'>
        {
          faq.map(f => {
            return(
            <Collapsable question ={f.question} answer = {f.answer}/>
            )
          })
        }
        </div>
      </div>
    </>
  )
}
