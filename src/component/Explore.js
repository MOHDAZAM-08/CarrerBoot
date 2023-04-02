import React from 'react'

export default function Explore() {
    return (
        <>

            <div className='explore'>
                <div className="butt">
                    <h3 style={{ textAlign: "center", color: "", fontWeight: "bolder", fontSize: "3rem", margin: "0 0 50px 0" }}>IN WHICH FILED YOU WANT TO EXPLORE</h3>

                    <button className='btn btn-primary'>Web Development</button>
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
                <div className="accordion" id="accordionExample" style={{ width: "80%", margin: "0 auto" }}>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                                Web Development
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{fontSize:"1.3rem"}}>
                                <span>Web development: As mentioned earlier, web development involves the design, development, and maintenance of websites and web applications. Web developers use programming languages like HTML, CSS, and JavaScript to build websites and web applications.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Android Development
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{fontSize:"1.3rem"}}>
                                <span>Android app development: Android app development involves the design, development, and maintenance of mobile applications for Android devices. B.Tech graduates with a specialization in computer science and engineering can pursue careers in Android app development as Android developers or mobile application developers.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Data Science
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{fontSize:"1.3rem"}}>
                                <span>Data Science: Data science involves using statistical and computational methods to analyze and interpret complex data sets. B.Tech graduates with a specialization in computer science and engineering can pursue careers in data science as data analysts, data scientists, or machine learning engineers. </span>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsef" aria-expanded="false" aria-controls="collapsef">
                                Artificial Intelligence
                            </button>
                        </h2>
                        <div id="collapsef" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{fontSize:"1.3rem"}}>
                                <span>Artificial Intelligence (AI): AI involves developing machines and algorithms that can perform tasks that typically require human intelligence, such as perception, reasoning, and decision-making. B.Tech graduates with a specialization in computer science and engineering can pursue careers in AI as AI engineers, machine learning engineers, or research scientists. </span>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsess" aria-expanded="false" aria-controls="collapsess">
                                Cloud Computing
                            </button>
                        </h2>
                        <div id="collapsess" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{fontSize:"1.3rem"}}>
                                <span>Cloud Computing: Cloud computing involves the delivery of computing services, including servers, storage, and applications, over the internet. B.Tech graduates with a specialization in computer science and engineering can pursue careers in cloud computing as cloud architects, cloud developers, or cloud security specialists.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseE" aria-expanded="false" aria-controls="collapseE">
                                Cybersecurity
                            </button>
                        </h2>
                        <div id="collapseE" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{fontSize:"1.3rem"}}>
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
