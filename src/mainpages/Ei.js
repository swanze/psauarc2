import React from 'react'
import './cssf/ei.css'
import Ht from '../components/Ht'
import Footer from '../components/Footer'
import img1 from '../images/school space program.jpeg'
import img2 from '../images/univ lvl programs.jpeg'
import img3 from '../images/courses we offer.webp'
import img4 from '../images/serve with us.png'
import { NavLink } from 'react-router-dom';
import video1 from '../videos/PakTES-1A Video on Internet.mp4'

function Ei() {
  return (
    <div>
      <Ht />
      <div className='Ei-nwsc-body'>
        <div className='Ei-nwsc-img-div'>
          {/* <img className='Ei-nwsc-img' src={img1}></img> */}
          <video controls src={video1} className='Ei-nwsc-img'>
          </video>
        </div>
        <div className='Ei-nwsc-text-div'>
          <div className='Ei-nwsc-text-head-div'>
            <h1>nation-wide school campaigns</h1>
          </div>
          <div className='Ei-nwsc-text-dtl-div'>
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
          <div className='Ei-nwsc-text-rmbtn-div'>
            <button className='Ei-nwsc-text-rmbtn'>
              <NavLink to='/ei/nwsc' className='Ei-nwsc-text-rmbtn-link'>Read More</NavLink>
            </button>
          </div>
        </div>
      </div>
      <div className='Ei-nwsc-body'>
        <div className='Ei-nwsc-text-div'>
          <div className='Ei-nwsc-text-head-div'>
            <h1>University level programs</h1>
          </div>
          <div className='Ei-nwsc-text-dtl-div'>
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
          <div className='Ei-nwsc-text-rmbtn-div'>
            <button className='Ei-nwsc-text-rmbtn'>
              <NavLink to='/ei/ulp' className='Ei-nwsc-text-rmbtn-link'>Read More</NavLink>
            </button>
          </div>
        </div>
        <div className='Ei-nwsc-img-div'>
          <img className='Ei-nwsc-img' src={img2}></img>
        </div>
      </div>
      <div className='Ei-nwsc-body'>
        <div className='Ei-nwsc-img-div'>
          <img className='Ei-nwsc-img' src={img3}></img>
        </div>
        <div className='Ei-nwsc-text-div'>
          <div className='Ei-nwsc-text-head-div'>
            <h1>Courses we offer</h1>
          </div>
          <div className='Ei-nwsc-text-dtl-div'>
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
          <div className='Ei-nwsc-text-rmbtn-div'>
            <button className='Ei-nwsc-text-rmbtn'>
              <NavLink to='/ei/cwo' className='Ei-nwsc-text-rmbtn-link'>Read More</NavLink>
            </button>
          </div>
        </div>
      </div>
      <div className='Ei-nwsc-body'>
        <div className='Ei-nwsc-text-div'>
          <div className='Ei-nwsc-text-head-div'>
            <h1>serve with us</h1>
          </div>
          <div className='Ei-nwsc-text-dtl-div'>
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
          <div className='Ei-nwsc-text-rmbtn-div'>
            <button className='Ei-nwsc-text-rmbtn'>
              <NavLink to='/ei/eiswu' className='Ei-nwsc-text-rmbtn-link'>Read More</NavLink>
            </button>
          </div>
        </div>
        <div className='Ei-nwsc-img-div'>
          <img className='Ei-nwsc-img' src={img4}></img>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Ei

//ei=educational initiatives
//nwsc=nation-wide school campaigns



/*<div>
        nation-wide school campaigns
      </div>
      <div>
        University-level programs
      </div>
      <div>
        courses we offer
      </div>
      <div>
        serve with us
      </div> */

// Nwsp=Nationwide school campaigns
// Ulp=univ lvl programs
// Cwo=courses we offer
// ei.swu=ei/serve with us