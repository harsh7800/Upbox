import React from 'react'
import './Footer.scss'
import Logo from '../../Assets/Logo.png'
import instagram from '../../Assets/ig.png'
import snapchat from '../../Assets/sc.png'
import twitter from '../../Assets/tw.png'
import facebook from '../../Assets/fb.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="logo-social-container">
        <img id="logo" src={Logo} alt="" />
        <div className="social-container">
          <img src={instagram} alt="insta" />
          <img src={facebook} alt="fb" />
          <img src={twitter} alt="twitter" />
          <img src={snapchat} alt="snap" />
        </div>
      </div>
      <div className="footer-navlinks">
        <div className="upbox">
          <h3>UPBOX</h3>
          <Link id="navlinks" to="/Upbox-Bag">
            Upbox Bag
          </Link>
          <Link id="navlinks" to="/Upbox-Box-Platinum">
            Upbox Box Platinum
          </Link>
          <Link id="navlinks" to="/Upbox-Box-VIP">
            Upbox Box VIP
          </Link>
          <Link id="navlinks" to="/Deals">
            Deals
          </Link>
          <Link id="navlinks" to="/Seasonal-items">
            Seasonal items
          </Link>
          <Link id="navlinks" to="/Upbox-Promise">
            Upbox Promise
          </Link>
        </div>
        <div className="find-us-on">
          <h3>Find Us On</h3>
          <Link id="navlinks" to="/Instagram">
            Instagram
          </Link>
          <Link id="navlinks" to="/Facebook">
            Facebook
          </Link>
          <Link id="navlinks" to="/TikTok">
            TikTok
          </Link>
          <Link id="navlinks" to="/SnapChat">
            SnapChat
          </Link>
          <Link id="navlinks" to="/Twitter">
            Twitter
          </Link>
        </div>
        <div className="product">
          <h3>Product</h3>
          <Link id="navlinks" to="/Get-the-App">
            Get the App
          </Link>
          <Link id="navlinks" to="/Loyalty-Program">
            Loyalty Program
          </Link>
          <Link id="navlinks" to="/Affiliates">
            Affiliates
          </Link>
          <Link id="navlinks" to="/Press">
            Press
          </Link>
        </div>
        <div className="help">
          <h3>Help</h3>
          <Link id="navlinks" to="/Returns">
            Returns
          </Link>
          <Link id="navlinks" to="/FAQ">
            FAQ
          </Link>
          <Link id="navlinks" to="/Contact">
            Contact
          </Link>
          <Link id="navlinks" to="/Community">
            Community
          </Link>
          <Link id="navlinks" to="/Videos">
            Videos
          </Link>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p>© 2020 Quest AI. Upbox is a Sample Project and open source design
        project free for personal and commercial use.</p>
        <div className="terms-policy">
              <Link id='navlinks' to='/Terms'>Terms</Link>
              <Link id='navlinks' to='/Policy'>Policy</Link>
        </div>
        
      </div>
    </div>
  );
}

export default Footer