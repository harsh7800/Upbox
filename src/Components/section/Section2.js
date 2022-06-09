import React from 'react'
import './Section2.scss'
import underline2 from '../../Assets/underline(1).png'
import work1 from '../../Assets/Group 2.png'
import work2 from '../../Assets/Group 1.png'
import work3 from '../../Assets/Mask Group.png'

function Section2() {
  return (
    <div className="section2-wrapper">
      <div className="title-container">
        <h1>How it works</h1>
        <img src={underline2} alt="" />
      </div>
      <div className="work1-container"> {/* work-1 container */}
        <img src={work1} alt="" />
        <div className="work1-info"> {/* work-1 info */}
          <h1>Setup your profile & preferences</h1>
          <p>
            Once you create an account, you can start to tell us your likes and
            dislikes so we can tailor the experience just for you.
          </p>
        </div>
        </div>
        <div className="work2-container"> {/* work-1 container */}
          <img src={work2} alt="" />
          <div className="work2-info">  {/* work-1 info */}
            <h1>Review your custom box</h1>
            <p>
              Once we get to know you, we will show you the box we’ve crafted.
              This is your chance to approve it before we ship it to your house.
            </p>
          </div>
        </div>
        <div className="work3-container"> {/* work-1 container */}
          <img src={work3} alt="" />
          <div className="work3-info">  {/* work-1 info */}
            <h1>Try it on at home</h1>
            <p>
              Your box will arrive within 3-5 days (usually sooner) and you get
              the joy to unbox your Upbox. Try it all on and send back whatever
              you’re not in love with.
            </p>
          </div>
        </div>
        <button>
              TRY IT FOR YOURSELF <i id='angle-right' className="fa-solid fa-angle-right"></i>
        </button>
    </div>
  );
}

export default Section2