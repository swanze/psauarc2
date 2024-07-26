import React from 'react'
import Cwsp from '../icap comps/Cwsp'
import '../icap comps/cwsp.css'
import img1 from '../images/dubai.jpg'
import img2 from '../images/logo.jpg'
import img3 from '../images/mss-cvls.png'

function Icap() {
  return (
    <div className="faculties">
      <Cwsp img={img1} head='cwsp' dtl='lorem ipsum dolor sit amet'/>
      <Cwsp img={img2} head='jvbc' dtl='consectitur adipiscin elit'/>
      <Cwsp img={img3} head='rpsd' dtl='ye he kia cheez!?'/>
    </div>
  )
}

export default Icap

//icap=internaitonal cooooperration and participations