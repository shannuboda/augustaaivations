import { useState } from "react";
import "./css/about.css";
import classimg from './assets/NOM03606-scaled.jpg'
import logo from './assets/logo.png'

function About() {
  const [activeButton, setActiveButton] = useState("button1");

  const handleButtonClick = (buttonName) => {
    console.log(buttonName);
    setActiveButton(buttonName);
  };
  return (
    <div>
      <div className="about-main">
        <div className="left">
          <img src={classimg} alt="" />
        </div>
        <div className="right">
          <div className="r">
            <div className="d1"></div> <h4>About Us </h4>
            <div className="d1"></div>
          </div>
          <div className="r1">
            <h1>We Can Creat More Than You Expect</h1>
          </div>
          <div className="about-buttons">
            <button
              className={activeButton === "button1" ? "active" : ""}
              onClick={() => handleButtonClick("button1")}
            >
              Our Mission
            </button>
            <button
              className={activeButton === "button2" ? "active" : ""}
              onClick={() => handleButtonClick("button2")}
            >
              Our Vision
            </button>
            <button
              className={activeButton === "button3" ? "active" : ""}
              onClick={() => handleButtonClick("button3")}
            >
              Solutions
            </button>
          </div>
          <div className="miss-viss-content">
            {activeButton === "button1" && <div> 

                        <div className="button1-content">
                            <img src={logo} alt="" />
                            <h5>Every word of the vision leads to a descriptive mission statement which each one at AUGUSTA Aviation and Hospitality Academy, is committed to accomplish.</h5>
                        </div>
                        <div className="buttongrid-1">
                                <div className="bg1">
                                    <button> &#10003; </button>
                                    <h5>PRIMO – The Best</h5>
                                </div>
                                <div className="bg1">
                                    <button>&#10003;</button>
                                    <h5>ESTABLISH – Constitute</h5>
                                </div>
                                <div className="bg1">
                                    <button>&#10003;</button>
                                    <h5>PROVIDE – Administer</h5>
                                </div>
                                <div className="bg1">
                                    <button>&#10003;</button>
                                    <h5>PROGRESSIVE – Dynamic education</h5>
                                </div>
                        </div>

                </div>}
            {activeButton === "button2" && 
                <div className=""> 

                <div className="button1-content">
                    <img src={logo} alt="" />
                    <h5>To be the Primo in Establishing and Providing Progressive, Competent and World Class Education and Empowerment Solutions in the fields of </h5>
                </div>
                <div className="buttongrid-1">
                        <div className="bg1">
                            <button> &#10003; </button>
                            <h5>Aviation</h5>
                        </div>
                        <div className="bg1">
                            <button>&#10003;</button>
                            <h5>Hospitality</h5>
                        </div>
                        <div className="bg1">
                            <button>&#10003;</button>
                            <h5>Travel Management</h5>
                        </div>
                        <div className="bg1">
                            <button>&#10003;</button>
                            <h5>Customer Service</h5>
                        </div>
                </div>

        </div>
            }

            {activeButton === "button3" && <div className="miss-viss-content">
            <div className="button1-content">
                    <img src={logo} alt="" />
                    <h5>To be a globally recognized Academy and diversified education solutions provider, we innovate dynamic products, services, resources and research-based solutions in accordance with global standards in Aviation and Hospitality. </h5>
                    
                </div>
                
                </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
