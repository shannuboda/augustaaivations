import React from 'react';
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';

const BlogCards = ({b1}) => {
  console.log(b1);
  const Navigate = useNavigate()
    return (
        <div>
           <div className="blog-card">
            <div className="bc-left">
                <img src={b1.im1} alt="" />
            </div>
            <div className="bc-right">
                <div className="bc-top">
                  <h4>{b1.date}</h4>
                  <h4>{b1.author}</h4>
                </div>
                <h1>{b1.title}</h1>
                <p>{b1.description}</p>
                <span style={{float:'right', cursor:'pointer'}}onClick={()=>{Navigate(b1.link)}} >Read More...</span>
            </div>
          </div> 
        </div>
    );
}

export default BlogCards;
