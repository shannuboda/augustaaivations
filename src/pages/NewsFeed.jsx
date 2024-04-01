import React from "react";
import "./css/newsfeed.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import im9 from './assets/Privacy-Policy-555x360.jpg'
import im10 from './assets/Good-Speaker-555x400.jpg'
import im11 from './assets/Good-Listner-555x400.jpg'
import { useNavigate } from "react-router-dom";

function NewsFeed() {
  const Navigate = useNavigate()
  return (
    <div>
      <div className="r">
        <div className="d1"></div> <h4>Our Blog </h4>
        <div className="d1"></div>
      </div>
      <div className="r1">
        <h1>Latest News Feed</h1>
      </div>
      <div className="cards">
        <Card
          outline
          style={{
            width: "22rem",
            marginBottom: "3rem",
            alignItems: "center",
            padding:'1rem',
            borderRadius:'20px'
          }}
        >
          <img
            alt="Sample"
            src={im11}
            className="card-image"
          />
          <Card.Text style={{ textAlign: "center" }} className="card-date">
            May 6, 2021
          </Card.Text>
          <Card.Body
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card.Title tag="h2" style={{ fontSize: "1.4rem" }}>
              How to be a good listener
            </Card.Title>

            <Card.Text style={{ textAlign: "center", fontSize: "1.2rem" }}>
              I believe that being a good listener is a crucial element in
              becoming a good conversationalist.
            </Card.Text>
          </Card.Body>
          <span onClick={()=>{Navigate('/post11')}} className="item-link1" style={{cursor:'pointer'}}>
            Read More &#8594;
          </span>
        </Card>
        <Card
          outline
          style={{
            width: "22rem",
            marginBottom: "3rem",
            alignItems: "center",
            padding:'1rem',
            borderRadius:'20px',
           
          }}
        >
          <img
            alt="Sample"
            src={im10}
            className="card-image"
          />
          <Card.Text style={{ textAlign: "center" }} className="card-date">
          August 6, 2022
          </Card.Text>
          <Card.Body
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card.Title tag="h2" style={{ fontSize: "1.4rem" }}>
            How To Be A Good Speaker
            </Card.Title>

            <Card.Text style={{ textAlign: "center", fontSize: "1.2rem" }}>
            I previously failed a voice test. I was the only one in class who did not pass, so I was.
            </Card.Text>
          </Card.Body>
          <span onClick={()=>{Navigate('/post10')}} className="item-link1" style={{cursor:'pointer'}}>
            Read More &#8594;
          </span>
        </Card>
        <Card
          outline
          style={{
            width: "22rem",
            marginBottom: "3rem",
            alignItems: "center",
            padding:'1rem',
            borderRadius:'20px'
          }}
        >
          <img
            alt="Sample"
            src={im9}
            className="card-image"
          />
          <Card.Text style={{ textAlign: "center" }} className="card-date">
            August 6, 2022
          </Card.Text>
          <Card.Body
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card.Title tag="h2" style={{ fontSize: "1.4rem" }}>
            Tips To Make You More Confident
            </Card.Title>

            <Card.Text style={{ textAlign: "center", fontSize: "1.2rem" }}>
            When we look at someone who appears to be confident, we cannot always pinpoint one factor that we believe makes.
            </Card.Text>
          </Card.Body>
          <span onClick={()=>{Navigate('/post9')}} className="item-link1" style={{cursor:'pointer'}}>
            Read More &#8594;
          </span>
        </Card>
      </div>
    </div>
  );
}

export default NewsFeed;
