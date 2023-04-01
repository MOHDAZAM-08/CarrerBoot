import React, { useEffect, useState } from 'react'
import photo from '../img/dsa.png'
import photo1 from '../img/web1.png'
import photo2 from '../img/web2.png'
import photo3 from '../img/web3.png'
import photo4 from '../img/web4.png'
import photo5 from '../img/web5.png'
import photo6 from '../img/web6.png'
import photo7 from '../img/web7.png'
import photo8 from '../img/web8.png'
import photo9 from '../img/tech.png'
import Navbar from './Navbar'
import Explore from './Explore'
import axios from 'axios'



function Dsa() {
  return <div>
    <h4 style={{ color: "#003b76", fontSize: "4rem", padding: "40px 70px" }}>Data Structures and Algorithms</h4>
    <div className="container fullview">
      <div className="card">
        <div class="accordion" id="accordionExample" style={{ width: "80%", margin: "0 auto" }}>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                Data Structures and Algorithms Road map
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body" style={{ fontSize: "1.3rem" }}>
                <div className="card">
                  <img src={photo} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Data Structures and Algorithms on youtube
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body" style={{ fontSize: "1.3rem" }}>
                <div className="card">
                  <span style={{ color: "blue" }}>1: https://www.freecodecamp.org/news/beginners-roadmap-web-development/ </span><br />
                  <span style={{ color: "blue" }}>2: https://www.scaler.com/topics/software-engineering/web-development-roadmap/ </span><br />
                  <span style={{ color: "blue" }}>3: https://roadmap.sh/ </span><br />
                  <span style={{ color: "blue" }}>4: https://www.geeksforgeeks.org/roadmap-to-become-a-web-developer-in-2022/ </span><br />
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Best paid coures
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body" style={{ fontSize: "1.3rem" }}>
                <span>1: Udemy: Udemy is an online learning platform that offers a wide range of coding courses, including web development, data science, and mobile app development. Some popular courses on Udemy include "The Complete Web Developer Course 2.0" and "The Ultimate MySQL Bootcamp."
                  <br />
                  <br />
                  2: Codecademy Pro: Codecademy Pro is a paid version of Codecademy, which offers interactive coding lessons in a wide range of programming languages, including Python, Java, and Ruby. Codecademy Pro also offers personalized learning plans and access to real-world projects.

                  <br />
                  <br />
                 3:  Coursera: Coursera offers online courses in partnership with top universities and organizations, including coding courses in computer science and data science. Some popular courses on Coursera include "Python for Data Science" and "Web Design for Everybody."

                  <br />
                  <br />
                  4: Pluralsight: Pluralsight offers a wide range of courses in software development, IT operations, and cybersecurity. Pluralsight also offers personalized learning paths and access to hands-on projects to help you apply your skills.

                  <br />
                  <br />
                 5:  edX: edX is an online learning platform that offers courses in a wide range of subjects, including computer science and programming. Some popular coding courses on edX include "Introduction to Computer Science" and "Python for Data Science." </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


}

function WebDev() {
  return <div>
    <h4 style={{ color: "#003b76", fontSize: "4rem", padding: "40px 70px" }}>Web Development</h4>
    <div className="container fullview">
      <div className="card">
        <div class="accordion" id="accordionExample" style={{ width: "80%", margin: "0 auto" }}>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
              Web Development Road map
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body" style={{ fontSize: "1.3rem" }}>
                <div className="card">
                  <h2>HTML</h2>
                  <img src={photo1} alt="" />
                  <h2>CSS</h2>
                  <img src={photo2} alt="" />
                  <h2>FRONT-END FREAMWORK</h2>
                  <img src={photo3} alt="" />
                  <h2>STATE MANAGEMENT</h2>
                  <img src={photo4} alt="" />
                  <h2>BACK-END</h2>
                  <img src={photo5} alt="" />
                  <h2>BACK-END FRAME</h2>
                  <img src={photo6} alt="" />
                  <h2>DATABASE</h2>
                  <img src={photo7} alt="" />
                  <h2>AUNTICATION</h2>
                  <img src={photo8} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Web Development on youtube
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body" style={{ fontSize: "1.3rem" }}>
                <div className="card">
                  <span style={{ color: "blue" }}>1: https://www.freecodecamp.org/news/beginners-roadmap-web-development/ </span><br />
                  <span style={{ color: "blue" }}>2: https://www.scaler.com/topics/software-engineering/web-development-roadmap/ </span><br />
                  <span style={{ color: "blue" }}>3: https://roadmap.sh/ </span><br />
                  <span style={{ color: "blue" }}>4: https://www.geeksforgeeks.org/roadmap-to-become-a-web-developer-in-2022/ </span><br />
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Best paid coures
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body" style={{ fontSize: "1.3rem" }}>
                <span>1: Udemy: Udemy is an online learning platform that offers a wide range of coding courses, including web development, data science, and mobile app development. Some popular courses on Udemy include "The Complete Web Developer Course 2.0" and "The Ultimate MySQL Bootcamp."
                  <br />
                  <br />
                  2: Codecademy Pro: Codecademy Pro is a paid version of Codecademy, which offers interactive coding lessons in a wide range of programming languages, including Python, Java, and Ruby. Codecademy Pro also offers personalized learning plans and access to real-world projects.

                  <br />
                  <br />
                 3:  Coursera: Coursera offers online courses in partnership with top universities and organizations, including coding courses in computer science and data science. Some popular courses on Coursera include "Python for Data Science" and "Web Design for Everybody."

                  <br />
                  <br />
                  4: Pluralsight: Pluralsight offers a wide range of courses in software development, IT operations, and cybersecurity. Pluralsight also offers personalized learning paths and access to hands-on projects to help you apply your skills.

                  <br />
                  <br />
                 5:  edX: edX is an online learning platform that offers courses in a wide range of subjects, including computer science and programming. Some popular coding courses on edX include "Introduction to Computer Science" and "Python for Data Science." </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


}

export default function PreviewExplor() {

  const [activeField, setActiveField] = useState("Fields");

  const handleButtonClick = (field) => {
    setActiveField(field);
    const height = window.innerHeight;
    window.scrollTo({
      top: height,
      left: 0,
      behavior: 'smooth'
    });
  };


  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/auth/api/fetch/${activeField}`)
      .then(response => setData(response.data))
      .catch(error => console.log(error));
    }, []);
    console.log(data,"this is data")
    



  return (
    <>

    
      <Navbar />
      <div className="heeed">
        <div className="explorepage">
          <div className="techHead" style={{width:"50%"}}>
          <h1 style={{padding:"120px 0px 0 50px",color:"#022446" }}>EXPLORE FIELDS</h1>
          <h6 style={{  padding:"0 0px 0 50px"}}>Choosing a field in the tech industry can be a challenging task, especially since there are so many options available</h6>
          </div>
        <div className="techimg">
          <img src={photo9} alt="" style={{width:"300px" ,marginLeft:"120px"}} />
        </div>
        </div>
        <h4 style={{color: "#ff8400", padding: "50px 0", textAlign:"center",fontSize:"2rem" }}>
          {activeField}
        </h4>
        <div className='explorePagebtn'>
          <div className="buttexplore">
            <button className='btn btn-primary' onClick={() => handleButtonClick("Web Development")}>Web Development</button>
            <button className='btn btn-primary' onClick={() => handleButtonClick("Android Development")}>Android Development</button>
            <button className='btn btn-primary' onClick={() => handleButtonClick("Data Structures and Algorithms")}>Data Structures and Algorithms</button>
            <button className='btn btn-primary' onClick={() => handleButtonClick("Blockchain")}>Blockchain </button>
            <button className='btn btn-primary' onClick={() => handleButtonClick("Artificial Intelligence")}>Artificial Intelligence</button>
            <button className='btn btn-primary' onClick={() => handleButtonClick("Machine Learning")}>Machine Learning</button>
            <button className='btn btn-primary' onClick={() => handleButtonClick("Cybersecurity")}>Cybersecurity</button>
          </div>
        </div>
        {activeField === "Web Development" && <WebDev />}
        {/* {activeField === "Android Development" && <AndroidDev />} */}
        {activeField === "Data Structures and Algorithms" && <Dsa />}
        {/* {activeField === "Blockchain" && <Blockchain />}
        {activeField === "Artificial Intelligence" && <Ai />}
        {activeField === "Machine Learning" && <MachineLearning />}
        {activeField === "Cybersecurity" && <Cybersecurity />} */}
      </div>
    </>
  )
}

