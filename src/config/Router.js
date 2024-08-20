import React from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Home from '../mainpages/Home'
import About from '../mainpages/About';
import Careers from '../mainpages/Careers';
import Contact from '../mainpages/Contact';
import Ei from '../mainpages/Ei'
import Icap from '../mainpages/Icap';
import News from '../mainpages/News';
import Services from '../mainpages/Services';
import Sp from '../mainpages/Sp';
//below are paths to pages for under-ei
import Nwsc from '../ei-under pages/Nwsc';
import Ulp from '../ei-under pages/Ulp'
import Cwo from '../ei-under pages/Cwo'
import Eiswu from '../ei-under pages/Eiswu'
//below are paths for revision
import Rev1 from '../revision/Rev1';

function Router() {
  return (
    <BrowserRouter basename='/psauarc2'>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/career" element={<Careers/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/ei" element={<Ei/>}></Route>
            <Route path="/icap" element={<Icap/>}></Route>
            <Route path="/news" element={<News/>}></Route>
            <Route path="/serv" element={<Services/>}></Route>
            <Route path="/sp" element={<Sp/>}></Route>
            <Route path='/rev' element={<Rev1/>}></Route>
            {/* below are links to pages for under-ei */}
            <Route path="/ei/nwsc" element={<Nwsc/>}></Route>
            <Route path='ei/ulp' element={<Ulp/>}></Route>
            <Route path='ei/cwo' element={<Cwo/>}></Route>
            <Route path='ei/eiswu' element={<Eiswu/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router