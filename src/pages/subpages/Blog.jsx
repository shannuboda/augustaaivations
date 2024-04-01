import React from "react";
import "../css/subpagescss/blogcss.css";
import BlogCards from "../subpages/BlogCards";
import im1 from "../assets/7-Ways-to-Stay-Motivated_v3-01-1-e1662622687609-555x400.jpg";
import im2 from "../assets/handshake-etiquette-555x400.jpg";
import im3 from '../assets/self-disciplined-555x400.png'
import im4 from '../assets/coffe.png'
import im5 from '../assets/email-etiquette-555x400.jpg'
import im6 from '../assets/HOTEL-MANAGEMENT-TIPS-555x400.jpg'
import im7 from '../assets/What-are-Email-Etiquettes-555x400.png'
import im8 from '../assets/interview-questions-555x400.png'
import im9 from '../assets/Privacy-Policy-555x360.jpg'
import im10 from '../assets/Good-Speaker-555x400.jpg'
import im11 from '../assets/Good-Listner-555x400.jpg'


function Blog() {
 const b1 = [

   { im1:im1,
    date:'19 September 2012',
    author: 'Ankruti Sharma',
    title: 'How to Stay Motivated?',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At quia quidem placeat sed architecto deleniti illo nihil fuga est expedita.',
    link:'/post1'
  },

{
    im1:im2,
    date:'19 September 2012',
    author: 'Ankruti Sharma',
    title: 'The Corporate Handshake Etiquette',
    description: 'The Corporate Handshake Etiquette ByMs. Anukriti SharmaCommunication Skills and Etiquette Trainer Now that life has returned to normal, we are...',
    link:'/post2'
  },
  {
    im1:im3,
    date:'29 September 2012',
    author: 'Ankruti Sharma',
    title: 'How to be self-disciplined',
    description: 'How to be self-disciplined ByMs. Anukriti SharmaCommunication Skills and Etiquette Trainer What is discipline? Discipline is a set of guidelines...',
    link:'/post3'
  
  },
  {
    im1:im4,
    date:'39 September 2012',
    author: 'Ankruti Sharma',
    title: 'COFFEE ETIQUETTE',
    description: 'HISTORY There are two stories about the discovery of coffee beans and their origin. According to one legend, they were...',
    link:'/post4'
  },
  {
    im1:im5,
    date:'39 September 2012',
    author: 'Ankruti Sharma',
    title: '10 Most Common Etiquette Mistakes',
    description: '10 Most Common Etiquette Mistakes Etiquette is important, and many people make etiquette mistakes unconsciously. Here are a few of...',
    link:'/post5'
 
  },
  {
    im1:im6,
    date:'39 September 2012',
    author: 'Ankruti Sharma',
    title: 'HOTEL MANAGEMENT TIPS',
    description: 'HOTEL MANAGEMENT TIPS ByMs. Anukriti SharmaCommunication Skills and Etiquette Trainer WHAT IS HOTEL FRONT OFFICE DEPARTMENT The front office is....',
    link:'/post6'
  
  },
  {
    im1:im7,
    date:'39 September 2012',
    author: 'Ankruti Sharma',
    title: 'Email Etiquette',
    description: '“ Today, we can t imagine our lives without email. We wake up responding to an email. We go to bed....',
    link:'/post7'
  },
  {
    im1:im8,
    date:'39 September 2012',
    author: 'Ankruti Sharma',
    title: 'How to Prepare for a Job Interview',
    description: 'What is a job interview?  “ A job interview is the final stage of a recruitment process in which interviewers,...',
    link:'/post8'
  },

  {
    im1:im9,
    date:'39 September 2012',
    author: 'Ankruti Sharma',
    title: 'Tips To Make You More Confident',
    description: 'When we look at someone who appears to be confident, we cannot always pinpoint one factor that we believe makes....',
    link:'/post9'
  
  },

  {
    im1:im10,
    date:'39 September 2012',
    author: 'Ankruti Sharma',
    title: 'How To Be A Good Speaker',
    description: 'I previously failed a voice test. I was the only one in class who did not pass, so I was...',
    link:'/post10'
  },
  {
    im1:im11,
    date:'39 September 2012',
    author: 'Ankruti Sharma',
    title: 'How to be a good listener',
    description: 'I believe that being a good listener is a crucial element in becoming a good conversationalist.  Listening and actively listening....',
    link:'/post11'
  
  },
 ]
  return (
    
    <div>
      <div className="blogbanner">
        <h3>BLOG - AUGUSTA</h3>
      </div>
      <div className="blog-details">

        {
          b1.map((b1)=>(
            <BlogCards b1={b1} ></BlogCards>
          ))
        }
      


         
      </div>

       
      
    </div>
  );
}

export default Blog;
