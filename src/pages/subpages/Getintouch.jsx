import React, { useState } from "react";
import "../css/subpagescss/getintouch.css";
function Getintouch({ courseName }) {
  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    Contactemail: "",
    Contactphone: "",
    Contactcourse: courseName || "", // Using courseName prop as initial value
    Comment: "",
  });
  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
    })
  }
 const doSubmit = (event) =>{
   event.preventDefault();
   console.log(event.target);
    // const formDatab = new FormData(formData);
    // console.log(formDatab);
    fetch(
      "https://script.google.com/macros/s/AKfycbwMhZlsnIrhpuEewu06KS99A54fSvf6IswFD5zcmzYM7IEgeSZWugAIznOSN2yRHMCj/exec",
      {
        method: "POST",
        body: new FormData(event.target),
      }
    )
      .then((res) => {
        res.json()
        alert("Your Form has been submitted Successfully|| Our Person will contact you as soon as possible")
        setFormData({Fname: "",
    Lname: "",
    Contactemail: "",
    Contactphone: "",
    Contactcourse: courseName || "", // Using courseName prop as initial value
    Comment: "",})
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  
  }
  return (
    <div>
      <div className="container">
        <div className="contact-section">
          <h2 className="ct-section-head">Get Intouch With Us</h2>
          <div className="row contact-fields">
            <div className="col-md-8 left-form">
              <form className="form" onSubmit={doSubmit}>
                <div className="form-group">
                  <label className="sr-only" for="fname">
                    First Name *
                  </label>
                  <input
                    className="required form-control"
                    id="fname"
                    name="Fname"
                    placeholder="First Name&nbsp;*"
                    type="text"
                    value={formData.Fname}
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label class="sr-only" for="lname">
                    Last Name *
                  </label>
                  <input
                    class="required form-control"
                    id="lname"
                    name="Lname"
                    placeholder="Last Name&nbsp;*"
                    type="text"
                    value={formData.Lname}
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label class="sr-only" for="contactEmail">
                    Email *
                  </label>
                  <input
                    class="required form-control h5-email"
                    id="contactEmail"
                    name="Contactemail"
                    placeholder="Email&nbsp;*"
                    type="text"
                    value={formData.Contactemail}
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label class="sr-only" for="contactPhone">
                    Phone *
                  </label>
                  <input
                    class="required form-control h5-phone"
                    id="contactPhone"
                    name="Contactphone"
                    placeholder="Phone&nbsp;*"
                    type="text"
                    value={formData.Contactphone}
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label class="sr-only" for="contactCourse">
                    Course Name *
                  </label>
                  <input
                    class="required form-control h5-phone"
                    id="contactCourse"
                    name="Contactcourse"
                    placeholder="Enter Interested Course"
                    value={formData.Contactcourse}
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label class="sr-only" for="comment">
                    Type your message here
                  </label>
                  <textarea
                    class="required form-control"
                    id="comment"
                    name="Comment"
                    placeholder="Type your message here&nbsp;*"
                    rows="3"
                    value={formData.Comment}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button class="btn23 btn-accent " type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Getintouch;
