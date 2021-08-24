import React from 'react';
import '../../App.css';
import './Art.css';
// import imgRe from '../elements/layout-element.png';
import Footer from '../Footer';
export default function Art() {
  return (
    <div>
      <div className='art'>
        <div className='title'>ART</div>
        <div className="container">
          <button className="btnART btnSz"><div className="item "> <div className="txtPnl">Digital</div></div></button>
          <button className="btnART btnSz"><div className="item "> <div className="txtPnl">Analog</div></div></button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
