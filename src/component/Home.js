import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import "../style/Home.css"
import Partner from './Partner';
import Programs from './Programs';
import Faq from './Faq';
import Footer from './Footer';

const Home = () => {
     const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNavbar = () => {
        setIsNavOpen((prev) => !prev);
    };
  return (
       <>
            <div className="partner-page">
                <nav className="navbar navbar-expand-lg navbar-dark px-4 py-3 ">
                    <div className="container-fluid">
                        <span className="navbar-brand" to="#">comet<span className="fw-bold">Chat</span></span>

                        <div className="d-flex gap-3 align-items-center order-lg-2 ms-auto">
                            <Link to="#" className="text-white text-decoration-none">Log in</Link>
                            <button className="btn btn-primary rounded px-3 py-1 d-none d-lg-block">Schedule a demo</button>
                        </div>

                        <button className="navbar-toggler order-lg-3" type="button" onClick={toggleNavbar}>
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Menu */}
                        <div className={`collapse navbar-collapse justify-content-center order-lg-1 ${isNavOpen ? 'show' : ''}`} id="navbarNav" >
                            <ul className="navbar-nav gap-3">
                                <li className="nav-item"><Link className="nav-link" to="#">Platform</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="#">Solutions</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="#">Developers</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="#">Resources</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="#">Pricing</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>


                <div className="partner-section">
                    <div className="partner-text">
                        <h1>Join the CometChat <br />partner universe</h1>
                        <p>Create value for your clients, leveraging our world-class technology. Partner with us and grow your business!</p>
                    </div>

                    <form className="partner-form">
                        <h3 className="form_head">Became a Partner</h3><br />
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full name</label>
                            <input type="text" className="form-control" placeholder="Type your name here.." />
                        </div>
                        <label htmlFor="name" className="form-label">Email address</label>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="✉ Type email something.." />
                        </div>
                        <label htmlFor="name" className="form-label">Companies name</label>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Type your Company's name" />
                        </div>
                        <button type="submit" className="btn hero-button"> Submit Application</button>
                    </form>
                </div>
            </div>

          {/* be a partner page  partner,js*/}
          <Partner/>
          {/* over beapartner page */}

            {/* third section this is our program  Program.js*/}
           <Programs/>
            {/* over program */}

            {/* faq section faq.js*/}
            <Faq/>
            {/* over faq */}

             {/* footer section footer.js*/}
            <Footer/>
            {/* over footer */}
        </>
  )
}

export default Home

