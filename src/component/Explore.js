import React from 'react'

export default function Explore() {
    return (
        <>

            <div className='explore'>
                <div className="butt">
                    <h3 style={{ textAlign: "center", color: "", fontWeight: "bolder", fontSize: "3rem", margin: "0 0 50px 0" }}>IN WHICH FILED YOU WANT TO EXPLORE</h3>

                    <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">Web Development</button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" style={{ maxWidth: "800px"  }}>
                            <div class="modal-content" style={{backgroundColor:"white",color:"black"}}>
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Web Development</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <h2>Roadmaps</h2>
                                    <span>Web Development Course by Scaler <br />
                                        The Complete 2022 Web Development Course on Udemy <br />
                                        Web Design for Everybody on Coursera <br />
                                        Web Development with JavaScript by MIT xPRO </span>
                                    <br />
                                    <h2>Youtube Channels</h2>
                                   <span style={{color:"blue"}}>https://www.freecodecamp.org/news/beginners-roadmap-web-development/ </span><br/>
                                   <span style={{color:"blue"}}>https://www.scaler.com/topics/software-engineering/web-development-roadmap/ </span><br/>
                                   <span style={{color:"blue"}}>https://roadmap.sh/ </span><br/>
                                   <span style={{color:"blue"}}>https://www.geeksforgeeks.org/roadmap-to-become-a-web-developer-in-2022/ </span><br/>
                                    {/* <h2>Courses</h2> */}
                                    <span></span>
                                    <span></span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <button className='btn btn-primary'>Android Development</button>
                    <button className='btn btn-primary'>DSA</button>
                    <button className='btn btn-primary'>Blockchain </button>
                    <button className='btn btn-primary'>Artificial Intelligence</button>
                    <button className='btn btn-primary'>Machine Learning</button>
                    <button className='btn btn-primary'>Cybersecurity</button>
                </div>
            </div>
            <div className="acccor">
                <h4 style={{ color: "#003b76", textAlign: "center", padding: "20px 0 40px 0" , fontSize:"2rem",fontWeight:"bolder"}}>OVERVIEW ABOUT ALL THE FILEDS</h4>
                <div class="accordion" id="accordionExample" style={{ width: "80%", margin: "0 auto" }}>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                                Web Development
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={{fontSize:"1.3rem"}}>
                                <span>Web development: As mentioned earlier, web development involves the design, development, and maintenance of websites and web applications. Web developers use programming languages like HTML, CSS, and JavaScript to build websites and web applications.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Android Development
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={{fontSize:"1.3rem"}}>
                                <span>Android app development: Android app development involves the design, development, and maintenance of mobile applications for Android devices. B.Tech graduates with a specialization in computer science and engineering can pursue careers in Android app development as Android developers or mobile application developers.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Data Science
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={{fontSize:"1.3rem"}}>
                                <span>Data Science: Data science involves using statistical and computational methods to analyze and interpret complex data sets. B.Tech graduates with a specialization in computer science and engineering can pursue careers in data science as data analysts, data scientists, or machine learning engineers. </span>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsef" aria-expanded="false" aria-controls="collapsef">
                                Artificial Intelligence
                            </button>
                        </h2>
                        <div id="collapsef" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={{fontSize:"1.3rem"}}>
                                <span>Artificial Intelligence (AI): AI involves developing machines and algorithms that can perform tasks that typically require human intelligence, such as perception, reasoning, and decision-making. B.Tech graduates with a specialization in computer science and engineering can pursue careers in AI as AI engineers, machine learning engineers, or research scientists. </span>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsess" aria-expanded="false" aria-controls="collapsess">
                                Cloud Computing
                            </button>
                        </h2>
                        <div id="collapsess" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={{fontSize:"1.3rem"}}>
                                <span>Cloud Computing: Cloud computing involves the delivery of computing services, including servers, storage, and applications, over the internet. B.Tech graduates with a specialization in computer science and engineering can pursue careers in cloud computing as cloud architects, cloud developers, or cloud security specialists.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseE" aria-expanded="false" aria-controls="collapseE">
                                Cybersecurity
                            </button>
                        </h2>
                        <div id="collapseE" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={{fontSize:"1.3rem"}}>
                                <span>Cybersecurity: Cybersecurity involves protecting computer systems and networks from unauthorized access, theft, and damage. B.Tech graduates with a specialization in computer science and engineering can pursue careers in cybersecurity as information security analysts, cybersecurity analysts, or network security engineers.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
