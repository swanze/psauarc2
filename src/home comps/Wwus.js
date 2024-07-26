import React from 'react'
import './wwus.css'
import img from '../images/workplace.jpg'

function Wwus() {
    return (
        <div className='home-wwus-body'>
            <div className='home-wwus-img-div'>
                <img className='home-wwus-img' src={img}></img>
            </div>
            <div className='home-wwus-text-div'>
                <div className='home-wwus-text-head-div'>
                    <h1>Work With Us</h1>
                </div>
                <div className='home-wwus-text-dtl-div'>
                    <p>
                        Lorem ipsum dolor sit amet.
                        Sed obcaecati dolor in consectetur nemo non quia animi
                        33 magnam doloremque non modi deserunt.
                        Cum laboriosam voluptatibus et voluptatem fugiat et
                        ipsa reiciendis? Ut odit aliquid sit atque omnis est
                        velit nisi. Quo ipsam totam id nesciunt quas quo vitae
                        voluptatem?
                    </p>
                </div>
                <div className='home-wwus-text-rmbtn-div'>
                    <button>
                        <a className='home-wwus-text-rmbtn-link' href='#'>Read More</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Wwus

//wwus=work with us