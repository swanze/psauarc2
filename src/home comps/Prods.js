import React from 'react'
import './prods.css'
import dubaiimg from '../images/dubai.jpg'
import balkashimg from '../images/Balkash.jpg'
import capimg from '../images/Cairo-airport.jpg'
import kukriimg from '../images/Kukrimukri.jpg'
// import Opdtl from './prodsdown/Opdtl'

function Prods(props) {
    return (
        <div className='home-prod-body'>
            <div className='home-prod-text-body'>
                <div className='home-prod-head-div'>
                    <h2 className='home-prod-head'>Our Products</h2>
                </div>
                <div className='main-opdtl-div'>
                    <div className='one-opdtl-div'>
                        <div className='opdtl-body-div'>
                            <div className='opdtl-head-div'>
                                <h4 className='opdtl-head'>
                                    Imageries
                                </h4>
                            </div>
                            <div className='opdtl-dtl-div'>
                                <p className='opdtl-dtl'>
                                    these are details for opdtl
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='one-opdtl-div'>
                        <div className='opdtl-body-div'>
                            <div className='opdtl-head-div'>
                                <h4 className='opdtl-head'>
                                    Imageries
                                </h4>
                            </div>
                            <div className='opdtl-dtl-div'>
                                <p className='opdtl-dtl'>
                                    these are details for opdtl
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='one-opdtl-div'>
                        <div className='opdtl-body-div'>
                            <div className='opdtl-head-div'>
                                <h4 className='opdtl-head'>
                                    Imageries
                                </h4>
                            </div>
                            <div className='opdtl-dtl-div'>
                                <p className='opdtl-dtl'>
                                    these are details for opdtl
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-prod-rmbtn-div'>
                <button className='home-prod-rmbtn'>
                    <a href='#' className='home-prod-rmbtn-link'>
                        Read More
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Prods



/* <button className='home-prod-btn'>
<div className='home-prod-btn-in'>
<a href={props.prodlink}>
    <div className='home-prod-img-div' >
        <img className='home-prod-img' src={props.prodimg} alt={props.prodimgalt}></img>
    </div>
    <div className='home-prod-text'>
        <div className='home-prod-head-div'>
            <h2 className='home-prod-head'>{props.prodhead}</h2>
        </div>
        <div className='home-prod-dtl-div'>
            <p className='home-prod-dtl'>{props.proddtl}</p>
        </div>
    </div>
</a>
</div>
</button> */
// <div className='home-prod-ext'>
//     <div className='home-prod-int'>
//         <div className='home-prod-dtl'>
//             <div className='abc'>
//                 <h2>Our Products</h2>
//                 <p>
//                     Lorem ipsum dolor sit amet.
//                     Sed repellat deserunt ut libero voluptatem aut nesciunt sunt et
//                 </p>
//             </div>
//         </div>
//         <div className='home-prod-gallery'>
//             <div className='home-prod-gallery-top'>
//                 <div className='home-prod-gallery-img home-prod-dubaiimg'>
//                     <img src={dubaiimg}></img>
//                 </div>
//                 <div className='home-prod-gallery-img home-prod-balimg'>
//                     <img src={balkashimg}></img>
//                 </div>
//             </div>
//             <div className='home-prod-gallery-btm'>
//                 <div className='home-prod-gallery-img home-prod-capimg'>
//                     <img src={capimg}></img>
//                 </div>
//                 <div className='home-prod-gallery-img home-prod-kukriimg'>
//                     <img src={kukriimg}></img>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>