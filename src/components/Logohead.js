import React from 'react'
import './csss/logohead.css';
import img from '../images/logo.jpg'

function Logohead() {
  return (
    <div className='bodi'>
        <div className="imgdiv">
            <img src={img}></img>
        </div>
        <div className='mbdiv'>
            <ul className='mbdivdown'>
                <li>
                    <a href='#'>Sign in</a>
                </li>
                <p className='istyles'>I</p>
                <li>
                    <a href='#'>Get a Quote</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Logohead