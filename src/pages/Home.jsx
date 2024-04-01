import "./css/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import c1 from "./assets/IMG-20240223-WA0001.jpg";
import c2 from "./assets/IMG-20240223-WA0002.jpg";
import About from "./About";
import Courses from "./Courses";
import Label from "./Label";
import NewsFeed from "./NewsFeed";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const [index, setIndex] = useState(0);
  const Navigate = useNavigate()

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div style={{ background: "#eee5e9" }}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className="home-1">
              <div className="home1_1">
                <h1>
                  Augusta{" "}
                  <span style={{ color: "#55042a" }}>
                    Certification Courses
                  </span>
                </h1>
                <p>
                At Augusta Aviation Institute, we fuel dreams with expertise and passion, guiding aspiring aviators towards the boundless skies of opportunity.
                </p>
                <img
                  src="/src/pages/assets/Admission-Open-Limited-Seats.png"
                  alt=""
                />
                <div className="buttons">
                  <button onClick={()=>{Navigate('/contactForm')}}>Contact Us</button>
                  <button onClick={()=>{Navigate('/whyaugusta')}}>Courses</button>
                </div>
              </div>
              <div className="home1_2">
                <img
                  src={c1}
                  alt=""
                  style={{ width: "35rem", height: "30rem" }}
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="home-1">
              <div className="home1_1">
                <h1>
                  The Perfect Opportunity To{" "}
                  <span style={{ color: "#55042a" }}>
                    Kick Start Your Career
                  </span>
                </h1>
                <p>
                Join us in our journey where innovation and tradition converge, offering an exhilarating exploration of the artistry of flight and the vast expanse of aerospace.
                </p>
                <img
                  src="/src/pages/assets/Admission-Open-Limited-Seats.png"
                  alt=""
                />
                <div className="buttons">
                  <button onClick={()=>{Navigate('/contactForm')}}>Contact Us</button>
                  <button onClick={()=>{Navigate('/whyaugusta')}}>Why Choose US?</button>
                </div>
              </div>
              <div className="home1_2">
                <img
                  src={c2}
                  alt=""
                  style={{ width: "35rem", height: "30rem" }}
                />
              </div>
            </div>
          </Carousel.Item>
          {/* <Carousel.Item>
      <img src={c2} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
        </Carousel>
      </div>
      <About></About>
      <Courses></Courses>
      <Label></Label>
      <NewsFeed></NewsFeed>
    </>
  );
}

export default Home;
