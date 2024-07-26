import React from 'react'
import Mss from '../services comps/Mss'
import img1 from '../images/mss-military service.jpg'
import img2 from '../images/mss-cvls.png'
import img3 from '../images/mss-agroeconomy.jpeg'
import Ht from '../components/Ht'
import Footer from '../components/Footer'

function Services() {
  return (
    <div>
      <Ht/>
      <Mss mssimg={img1} msshead='military and security' 
      mssdtl='lorem ipsum dolor sit amet'/>
      <Mss mssimg={img2} msshead='civil service' 
      mssdtl='lorem ipsum dolor sit amet'/>
      <Mss mssimg={img3} msshead='agro-economy' 
      mssdtl='lorem  ipsum dolor sit amet'/>
      <Footer/>
    </div>
  )
}

export default Services

//mss=military and security services
//cvls=civil services
//raep=role in agro-economy of pakistan

{/* <div>
        military and security services
      </div>
      <div>
        civil services
      </div>
      <div>
        our role in agro-economics of pakistan
      </div> */}