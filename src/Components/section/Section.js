import React from 'react'
import './Section.scss'
import underline from '../../Assets/underline.png'

function Section() {
      return (
        <div className="section-wrapper">
          <div className="title-container">
            <h1>Pick your plan</h1>
            <img src={underline} alt="" />
          </div>
          <div className="plan-box">
            <div className="box1">
              <h3 id="plan-duration">Monthly</h3>
              <h3 id="plan-price">$18/mo</h3>
              <button>FIND YOUR BOX</button>
            </div>
            <div className="box2">
              <h3 id="plan-duration">yearly</h3>
              <h3 id="plan-price">$15/mo</h3>
              <button>FIND YOUR BOX</button>
            </div>
          </div>
            <p>
              Your plan auto-renews at the end of 30 days from the 1st day you
              signed-up.
            </p>
        </div>
      );
}

export default Section