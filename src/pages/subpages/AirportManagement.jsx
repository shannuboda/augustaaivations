import React from 'react'
import "../css/subpagescss/airportmanagement.css"
import Getintouch from './Getintouch'
import im1 from '../css/subpagescss/images/Airline-Reservation.jpg'
import im2 from '../css/subpagescss/images/check-in-Board.jpg'
import im3 from '../css/subpagescss/images/BAGGAGE-HANDLING.jpg'
import im4 from '../css/subpagescss/images/Cargo-Management.jpg'
import im5 from '../css/subpagescss/images/Aviation-Secuirity.jpg'
import im6 from '../css/subpagescss/images/Dangerous.jpg'
import im8 from '../css/subpagescss/images/LOAD-TRIM.jpg'
import im10 from '../css/subpagescss/images/MARSHELLING.jpg'
import im9 from '../css/subpagescss/images/RAMP-MANAGEMENT.jpg'

import Courses from '../Courses'
import { useEffect } from "react"
function AirportManagement() {
  useEffect(() => {
    // Scroll to the top of the page when the component is loaded
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
    
       <div className="airportbanner" >
            <h3>Airport Management Course</h3>
            <p>Home . Courses</p>
        </div>
          <h1  style={{textAlign:'center'}}>Certificate in Airport Management Course</h1>
        <div class="container airportmanagementcols">
           <div class="row">
              <div class="col-sm-6">Aviation, one of the most exciting profession in the world, requires the most talented and energetic staffs. In addition to punctuality, service quality levels also have to be met by those people. The staffs who working in an airport may remain unseen by most passengers, belong to what is known as ground handling; have got great impact on the success of each airline. Ground handling is an integral part of airline operations. Starting from the staffs at check-in counter to the staffs that putting their hands on aircrafts for its maintenance come under this advanced trained people. By means of its Airport Handling Manual (AHM), the International Air Transport Association (IATA) sets a series of standards for secure, efficient airport operations.</div>
              <div class="col-sm-6">We here at AUGUSTA Aviation academy is regularly monitoring and empowering our self to reach at those International standards. We have no compromise on the quality and standards assured for our courses. We are enabling our students to reach at the highest value of studies in aviation by giving the exposure to the wide range of scope of different job profiles in an airport. Our advanced syllabus of ground handling will provide the best results in overall performance and help them to grab the best in the field of their dream job.</div>
           </div>
        </div>
        <div className="container depts">
          <h2>Departments</h2>
          <hr />
          <div className="sub-depts">
            <h4>AIRLINE RESERVATION</h4>
            <p>The modern airline reservation system is comprehensive suite of products to provide a system that assists with a variety of airline management tasks and service customer needs from the time of initial reservation through completion of the flight.</p>
            <img src={im1} alt="" srcset="" />
          </div>

          <div className="sub-depts">
            <h4>CHECK-IN & BOARDING</h4>
            <p>The check-in process at airports enables passengers to confirm they will be on the respective flight, obtain a boarding pass, possibly select their seat (if hasn’t happened already or allowed by airline), and check in luggage onto a plane, if desired.</p>
            <img src={im2} alt="" srcset="" />

          </div>

          <div className="sub-depts">
            <h4>BAGGAGE HANDLING</h4>
            <p>Airport baggage handlers move all sorts of baggage, such as luggage and cargo, on and off planes.
They are responsible for checking luggage against flight lists and taking it to the aircraft or to the reclaim conveyor belt. They need to work quickly and accurately while taking care not to cause damage</p>
          <img src={im3} alt="" srcset="" />

          </div>

          <div className="sub-depts">
            <h4>CARGO MANAGEMENT</h4>
            <p>Air cargo operations can be very complex. Precision delivery and safety rely on how well air cargo professionals are trained. Taught by industry experts, our courses focus on industry best practices and change management to help you adapt to the increasingly complex air transport environment. We offer quality training solutions to respond to the diverse learning needs of the industry.</p>
            <img src={im4} alt="" srcset="" />

          </div>

          <div className="sub-depts">
            <h4>AVIATION SECURITY</h4>
            <p>Being one of the most sensitive area, airport is one of the potential targets for terrorism and other forms of crime because of the number of people local.

Airport security attempts to prevent any threats or potentially dangerous situations from arising or entering the country. Ted in one place.</p>
            <img src={im5} alt="" srcset="" />

          </div>

          <div className="sub-depts">
            <h4>DANGEROUS GOODS REGULATIONS</h4>
            <p>A wide range of requirements apply when transporting dangerous goods.

Dangerous goods are items or substances that when transported by aircraft are a risk to health, safety, property or the environment.

These recommendations aim to eliminate or minimize risks, promote safety and facilitate the transport of dangerous goods.</p>
          <img src={im6} alt="" srcset="" />

          </div>

          <div className="sub-depts">
            <h4>LOAD & TRIM</h4>
            <p>Airport baggage handlers move all sorts of baggage, such as luggage and cargo, on and off planes.

They are responsible for checking luggage against flight lists and taking it to the aircraft or to the reclaim conveyor belt. They need to work quickly and accurately while taking care not to cause damage</p>
        <img src={im8} alt="" srcset="" />

          
          </div>

          <div className="sub-depts">
            <h4>RAMP MANAGEMENT</h4>
            <p>Ramp handling services ensure the efficient turnaround of aircraft so that flights stay on schedule. This course offers an introduction to ramp services as well as the ground handling standards and safety requirements you need to know to work safely on the ramp.</p>
            <img src={im9} alt="" srcset="" />

          </div>

          <div className="sub-depts">
            <h4>MARSHELLING</h4>
            <p>Marshalling is one-on-one visual communication and a part of aircraft ground handling. It may be as an alternative to, or additional to, radio communications between the aircraft and air traffic control.</p>
            <img src={im10} alt="" srcset="" />

          </div>

        


        </div>



          <Getintouch courseName={"Airport Management"}></Getintouch>
          <Courses></Courses>
    </div>
  )
}

export default AirportManagement