import React from 'react'
import * as Utils from '../Utils/Constants'
import '../Styles/Solutions.css'

export default function Solutions() {

  return (
    <div className='solutions-main-container'>
      <div className='solutions-first-container'>
        <h1>{Utils.WHAT_WE_DO}</h1>
        <p>{Utils.WHAT_WE_DO_DETAIL}</p>
      </div>
        {Utils.SERVICE_LIST.map(servide => {
          return(
            <div className='solutions-second-container'>
              <img className='img4' src={servide.img} alt="rachel-moenning-zjx-Ywd4-HOu0-unsplash" border="0"></img>
              <ul>
                <li className='list-heading'><h1>{servide.heading}</h1></li>
                {servide.bullet.map(bull => {
                  return(<li>{bull}</li>)
                })}
              </ul> 
            </div> 
          )})}
    </div>
  )
}
