import React, {useEffect} from 'react'
import '../css/subpagescss/cabincrew.css'
import Getintouch from './Getintouch'
import Courses from '../Courses'
function Cabincrew() {
  useEffect(() => {
    // Scroll to the top of the page when the component is loaded
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
       <div className="cabincrewbanner">
        <h3>Certificate In Cabin Crew Course</h3>
        <p>Home . Courses</p>
      </div>
      <div className="container ground-head">
        <h2>AUGUSTA certified Cabin Crew professionals</h2>
        <hr />
        <h4>About Cabin Crew Course </h4>
        <p>
        Aviation, one of the most exciting profession in the world, requires the most talented and energetic staffs. In addition to punctuality, service quality levels also have to be met by those people. The staffs who working in an airport may remain unseen by most passengers, belong to what is known as ground handling; have got great impact on the success of each airline. Ground handling is an integral part of airline operations. Starting from the staffs at check-in counter to the staffs that putting their hands on aircrafts for its maintenance come under this advanced trained people. By means of its Airport Handling Manual (AHM), the International Air Transport Association (IATA) sets a series of standards for secure, efficient airport operations. We here at AUGUSTA Aviation academy is regularly monitoring and empowering our self to reach at those International standards. We have no compromise on the quality and standards assured for our courses. We are enabling our students to reach at the highest value of studies in aviation by giving the exposure to the wide range of scope of different job profiles in an airport. Our advanced syllabus of ground handling will provide the best results in overall performance and help them to grab the best in the field of their dream job.
        </p>
        <h4>Cabin Crew </h4>

        <ul>
          <li>
            <i
              className="fa fa-telegram"
              aria-hidden="true"
              style={{
                background: "maroon",
                color: "white",
                fontSize: "1.2rem",
              }}
            ></i>
            &nbsp;&nbsp;&nbsp;{" "}
            <span>
            Cabin crew strive to make the flying experience a pleasant one for the passengers and will serve refreshments and meals.

            </span>
          </li>

          <li>
            <i
              className="fa fa-telegram"
              aria-hidden="true"
              style={{
                background: "maroon",
                color: "white",
                fontSize: "1.2rem",
              }}
            ></i>
            &nbsp;&nbsp;&nbsp;{" "}
            <span>
            The role of a cabin crew member is to provide excellent customer service to passengers while ensuring their comfort and safety throughout the flight. They are trained to deal with security and emergency situations which may arise and can administer first aid to passengers.

            </span>
          </li>

          <li>
            <i
              className="fa fa-telegram"
              aria-hidden="true"
              style={{
                background: "maroon",
                color: "white",
                fontSize: "1.2rem",
              }}
            ></i>
            &nbsp;&nbsp;&nbsp;{" "}
            <span>
            Tasks may vary depending on whether it is a short or long-haul flight and the size of the team you are working in. However, your duties will include. Attending a pre-flight briefing, during which air cabin crew are assigned their working positions for the upcoming flight. Crew are also informed of flight details, the Schedule, the number of infants on board and if there are passengers with any special requirements, such as diabetic passengers or passengers in wheelchairs. Carrying out pre-flight duties, including checking the safety equipment and security checks, ensuring the aircraft is clean and tidy and that the information in the seat pockets is up to date and that all meals, drinks and stock are on board.

            </span>
          </li>

          <li>
            <i
              className="fa fa-telegram"
              aria-hidden="true"
              style={{
                background: "maroon",
                color: "white",
                fontSize: "1.2rem",
              }}
            ></i>
            &nbsp;&nbsp;&nbsp;{" "}
            <span>
            Giving first aid where necessary. Ensuring passengers disembark safely at the end of a flight and checking that there is no luggage left in the overhead lockers and no stowaways or suspicious items on board. Completing paperwork, including writing a flight report.

            </span>
          </li>

        
        </ul>
        <Getintouch courseName={"CabinCrew"} />
        <Courses></Courses>
      </div>

    </div>
  )
}

export default Cabincrew