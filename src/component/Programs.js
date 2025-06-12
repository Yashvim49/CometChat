import React from 'react'

const Programs = () => {
  return (
     <section className="programs-section">
                <p className="subheading">Our Programs</p>
                <h1 className="mb-4">Types of Partnership<br/> Programs</h1>
                <div className="programs-grid">
                    <div className="program-box">
                        <img src="logos/icon1.png" alt="Affiliate" className="program-icon" />
                        <h5>Affiliate Partner Program</h5>
                        <p>Bring value to your customers with a world-class in-app messaging tool that increases
                             user-to-user engagement and retention.Get incentivized for referring CometChat to any of your Customers</p>
                    </div>
                    <div className="program-box">
                        <img src="logos/icon2.png" alt="Technology" className="program-icon" />
                        <h5>Technology Partner Program</h5>
                        <p>Development tearms can use our plug and play solution to build 
                            top class solutions for their clients using our SDKs and APIs.it's simple,safe and secure!</p>
                    </div>
                    <div className="program-box">
                        <img src="logos/icon3.png" alt="Startup Growth" className="program-icon" />
                        <h5>Startup Growth Program</h5>
                        <p>We help incubators, accelerators, co-working space that foster an ecosystem of start-ups. 
                            This program also enables VCs to accelerate the growth of their portfolio companies</p>
                    </div>
                </div>
            </section>
  )
}

export default Programs