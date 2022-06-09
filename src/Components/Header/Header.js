import React from 'react'
import headerImg from '../../Assets/BOX.png'
import './Header.scss'

function Header() {
  return (
    <div className="header-wrapper">
      <div className="banner-info">
        <div className="info-box">
          <h1>Look good without</h1>
          <h1>leaving your house.</h1>
        </div>
        <p>
          Upbox is the easiest way to look your best without having to hunt for
          the perfect makeup combination. Our stylists curate the latest trends
          and send them directly to your door every month.
        </p>
        <button>
          SIGN UP <i id="angle-right" className="fa-solid fa-angle-right"></i>
        </button>
      </div>
      <div className="img-box">
        <img src={headerImg} alt="" />
      </div>
    </div>
  );
}

export default Header