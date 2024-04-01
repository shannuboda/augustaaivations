import React from 'react'
import  '../css/subpagescss/aboutus.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import NewsFeed from '../NewsFeed'
function AboutUs() {
  return (
    <div>
        <div className="banner">
            <h3>About US</h3>
            <p>Home . About</p>
        </div>
            <div className="missviss">
                <h1>Vision</h1>
                <p>To be the Primo in Establishing and Providing Progressive, Competent and World Class Education and Empowerment Solutions in the fields of Aviation, Hospitality, Travel Management and Customer Service.</p>
            
                <h1>Mission</h1>
                <p>Every word of the vision leads to a descriptive mission statement which each one at AUGUSTA Aviation and Hospitality Academy, is committed to accomplish.</p>

                <h4>PRIMO – The Best</h4>
                <p>We are working to be the best in the industry, meaning we shall be inquirers, upgraded, aware, research based, innovative, and technology oriented, globally competent and cohesive in all that we do</p>
                
                <h4>ESTABLISH – Constitute</h4>
                <p>Educational institutions created by us across the globe will serve as an exemplar of highest quality of facilities, resources, education and service from early childhood education to higher education and beyond</p>
                
                <h4>PROVIDE – Administer</h4>
                <p>To make quality education evenly available and promote entrepreneurship, we empower visionaries to establish quality institutions by providing them the best technical and operational know how. Through constant guidance, training, mentoring and monitoring we ensure exalted services from each of our associates. Through franchising / consultancy we embrace individuals, trusts, organizations to achieve concerted aspirations. </p>
                
                <h4>PRIMO – The Best</h4>
                <div className="mv1">
                  <ul>
                    <li> <FontAwesomeIcon icon={faStar} style={{ color: "#3e0404" }} />&nbsp;Engaging the learner</li>
                    <li><FontAwesomeIcon icon={faStar} style={{ color: "#3e0404" }} />&nbsp;Empowered Facilitators and Trainers</li>
                    <li><FontAwesomeIcon icon={faStar} style={{ color: "#3e0404" }} />&nbsp;Elated Learning Communities/Parents</li>
                  </ul>
                </div>
                 <h4>Engaging the Learner:</h4>
                <p>We provide a high quality, balanced educational program which allows each learner to develop his / her whole being in all areas of development – (academic, physical, emotional, spiritual and social) We offer well equipped and safe environment and resources where each learner is challenged and supported to become a critical and compassionate thinker, dedicated learner for life, and a contributing member of local and global community.</p>
                
                <h4>Empowered Team of Facilitators and Trainers:</h4>
                <p>Educational institutions created by us across the globe will serve as an exemplar of highest quality of facilities, resources, education and service from early childhood education to higher education and beyond</p>
                
 <h4>Elated Learning Communities/Parents:</h4>
                <p>The AUGUSTA Aviation and Hospitality Academy learning community views the world as the broadest context for learning, where everyone involved in the life of the academy is recognized: learners and their families, all academy staff members and facilitators, other important adults in the learners’ lives and the community at large.</p>
                
 <h4>COMPETENT: Affordable Education and Rewarding returns</h4>
                <p>We constantly strive to provide value for money for all our learners and associates. By strategic resource planning we provide the best learning solutions at the most competent prices in the market.Rewarding Returns Keeping the learners’ and their associates’ interest as the fulcrum, we guide our associates to invest appropriately in the academy thereby leading to maximum ROI by safeguarding the world-class education that is imparted at our academy</p>
                
 <h4>WORLD CLASS</h4>
                <p>Our academy provides felicitous infrastructure, facilities and resources in accordance with global standards in Aviation and Hospitality, thus providing an opportunity for the learners to explore and learn in a conducive and a competent environment.</p>
                
 <h4>EDUCATION SOLUTIONS</h4>
                <p>To be a globally recognized diversified education solutions provider, we innovate dynamic products, services, resources and research-based solutions in accordance with global standards in Aviation and Hospitality.</p>
                
            
            </div>
        
        <NewsFeed></NewsFeed>
    </div>
  )
}

export default AboutUs