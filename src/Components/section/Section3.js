import React from 'react'
import './Section3.scss'

function Section3() {
  return (
    <div className="section3-wrapper">
      <div className="title-container">
        <h1>Social Posts</h1>
      </div>
      <div className="posts-container">
        <div className="post1-container">
          <div className="post1"></div>
          <p>How to rock the lip look that turns heads</p>
        </div>
        <div className="post2-container">
          <div className="post2"></div>
          <p>Find the perfect shade for the season</p>
        </div>
        <div className="post3-container">
          <div className="post3"></div>
          <p>The 5 eye shadow secrets you never knew</p>
        </div>
        <div className="post4-container">
          <div className="post4"></div>
          <p>The pro-tips for at home hair dying</p>
        </div>
      </div>
      <button>
        FOLLOW US ON INSTAGRAM
      </button>
    </div>
  );
}

export default Section3