import React from 'react'
import './mss.css'
import { NavLink } from 'react-router-dom'


function Mss(props) {
    return (
        <div className='serv-mss-body'>
            <div className='serv-mss-img-div'>
                <img className='serv-mss-img' src={props.mssimg}></img>
            </div>
            <div className='serv-mss-text-div'>
                <div className='serv-mss-text-head-div'>
                    <h1 className='serv-mss-text-head'>{props.msshead}</h1>
                </div>
                <div className='serv-mss-text-dtl-div'>
                    <p className='serv-mss-text-dtl'>
                        {props.mssdtl}
                    </p>
                </div>
                <div>
                    <button>
                        <NavLink>Read More</NavLink>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Mss


// Sed placeat tempore ex explicabo voluptate nam
// dignissimos doloremque non voluptates cumque.
// Ut explicabo aspernatur et nemo minima aut eveniet
// harum cum sint voluptas.