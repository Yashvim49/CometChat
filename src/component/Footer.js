import React, { useEffect } from 'react'
import '../style/Footer.css'

const Footer = () => {
     useEffect(() => {
  const headings = document.querySelectorAll('.footer-column h5');

  // Define handler function separately
  const toggleColumn = (e) => {
    const column = e.target.closest('.footer-column');
    column.classList.toggle('open');
  };

  // Attach listener
  headings.forEach((heading) => {
    heading.addEventListener('click', toggleColumn);
  });

  // Cleanup to remove exact same listener
  return () => {
    headings.forEach((heading) => {
      heading.removeEventListener('click', toggleColumn);
    });
  };
}, []);


    return (
       
        <footer>
            <div className="footer-top">
                <h2 className="footer-heading">Get started for free</h2>
                <p className="footer-subheading">
                    Build and test for as long as you need.<br />Pick a plan when you're ready.
                </p>
                <div className="footer-buttons">
                    <button className="btn-outline">Start free trial</button>
                    <button className="btn-filled">Schedule a demo</button>
                </div>
            </div>

            <div className='footer-section'>
                <div className="footer-logo-head">
                    <span className="comet">comet</span><span className="chat">Chat</span>
                </div>


                <div className="footer-links container">
                    <div className="footer-column">
                        <h5>Platform</h5>
                        <ul>
                            <li className='title'>Features</li>
                            <li>Chat & Messaging</li>
                            <li>Voice & Video Calling</li>
                            <li>Security & Compliance</li>
                            <li>Extensibility</li>
                            <li>Features at a Glance</li>
                            <li>Webhooks & Bots</li>
                            <li>Moderation</li>
                            <li>Analytics & Insights</li>
                            <li className='title'>Implementation</li>
                            <li>Widgets</li>
                            <li>UI Kits</li>
                            <li>SDKs & APIs</li>
                            <li className='title'>Technologies</li>
                            <li>React Chat SDK & API</li>
                            <li>Angular Chat SDK & API</li>
                            <li>Vue Chat SDK & API</li>
                            <li>iOS Chat SDK & API</li>
                            <li>Android Kotlin Chat SDK & API</li>
                            <li>Android Java Chat SDK & API</li>
                            <li>React Native Chat SDK & API</li>
                            <li>Ionic/Capacitor Chat SDK & API</li>
                            <li>WordPress Chat SDK & API </li>
                            <li>Lavarel/PHP Chat SDK & API</li>
                            <li>Flutter Chat SDK & API</li>
                            <li>Next.js Chat SDK & API</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h5>Solutions</h5>
                        <ul>
                            <li className='title'>By use case</li>
                            <li>Social Community</li>
                            <li>Marketplace</li>
                            <li>Healthcare</li>
                            <li>Education</li>
                            <li>Virtual Events </li>
                            <li>On-Demand Service</li>
                            <li>Dating Apps</li>
                            <li>Gaming</li>
                            <li className='title'>By Organization Type</li>
                            <li>Enterprise</li>
                            <li>Startups</li>

                        </ul>
                    </div>

                    <div className="footer-column">
                        <h5>Developers</h5>
                        <ul>
                            <li className='title'>Technologies documentation</li>
                            <li>React</li>
                            <li>Angular</li>
                            <li>Vue</li>
                            <li>IOS Swift</li>
                            <li>Android Kotlin</li>
                            <li>Android Java</li>
                            <li>React Native</li>
                            <li>Ionic/Capacitor</li>
                            <li>WordPress</li>
                            <li>Lavarel/PHP</li>
                            <li>Flutter</li>
                            <li>Next.js</li>
                            <li className='title'>Documentation</li>
                            <li>Documentation</li>
                            <li>Product updates</li>
                            <li>Tutorials</li>
                            <li>Open-source Apps</li>
                            <li>Product status</li>
                            <li>Glossary</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h5>Resources</h5>
                        <ul>
                            <li>Customer Stories</li>
                            <li>Blog</li>
                            <li>Give feedback</li>
                            <li>Community forum</li>
                            <li>Help center</li>
                            <li>Partners</li>
                        </ul>
                        <h5>Competitors</h5>
                        <ul>
                            <li>SendBird</li>
                            <li>GetStream</li>
                            <li>Applozic</li>
                            <li>Twilio</li>
                            <li>PubNub</li>
                        </ul>
                        <h5>Company</h5>
                        <ul>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Partners</li>
                            <li>Pricing</li>
                            <li>Chat with us</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className='last-footer'>
                        <ul>
                        <p>2025 © CometChat</p>
                            <li>Terms of Use</li>
                            <li>Privacy Policy</li>
                        </ul></div>
                    <div className="socia-link">
                        <ul className="footer-social">
                            <li> <img src="logos/facebook.png" alt="Technology"/> Facebook</li>
                            <li><img src="logos/linkedin.png" alt="Technology"/> LinkedIn</li>
                            <li><img src="logos/instagram.png" alt="Technology"/> Instagram</li>
                            <li><img src="logos/twitter.png" alt="Technology"/> Twitter</li>
                            <li><img src="logos/github.png" alt="Technology"/> Github</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer


