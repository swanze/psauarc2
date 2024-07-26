import React from 'react'
import video1 from '../videos/PakTES-1A Video on Internet.mp4'
import './cssf/sp.css'
import Ht from '../components/Ht'
import Footer from '../components/Footer'
import img1 from '../images/paksp.jpg'

function Sp() {
  return (
    <div>
      <Ht />
      <div className='sp-comp1-body'>
        <div className='sp-comp1-video-div'>
          <video 
          className='sp-comp1-video' 
          controls 
          src={video1}
          poster={img1}>
          </video>
        </div>
        <div>
          <div>
            <h3>heading</h3>
          </div>
          <div>
            lorem ipsum dolor sit amet.
            me kone hun?
            maa antum?
            hazal kitabu lakum.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Sp

//sp=space programs