// this is home 2 page 
import React from 'react';

const partneradvantage = [
{ title: "Free credits", desc: "Empowering partners to scale", img: "logos/card1.png" },
{ title: "Revenue share", desc: "Get monthly recurring revenues when you refer clients", img: "logos/card2.png" },
{ title: "Training and mentoring sessions", desc: "Enabling partners to deliver the best experience", img: "logos/card3.png" },
{ title: "Special developer access", desc: "Get an all-access to build unlimited PoCs for your clients", img: "logos/card4.png" },
{ title: "Reduced time", desc: "Deliver your products much faster with our partner's programs", img: "logos/card5.png" },
{ title: "Value addition to your users", desc: "We need a 2 line text here", img: "logos/card6.png" },
{ title: "Knowledge sessions", desc: "Access to product and market sessions", img: "logos/card7.png" },
{ title: "On-demand support", desc: "Technical assistance for implementation", img: "logos/card8.png" },
{ title: "Significant passive income", desc: "We need a 2 line text here", img: "logos/card9.png" }
];


const Partner = () => {
  return (
     <>
          <div className="logo-section">
                <div className="logo-slider">
                    {[...Array(2)].map((_, index) => (
                        <React.Fragment key={index}>
                            <div className="logo-box"><img src="logos/aws.png" alt="AWS" /></div>
                            <div className="logo-box"><img src="logos/10x.png" alt="10x" /></div>
                            <div className="logo-box"><img src="logos/microsoft.png" alt="Microsoft" /></div>
                            <div className="logo-box"><img src="logos/nasscom.png" alt="Nasscom" /></div>
                            <div className="logo-box"><img src="logos/techstars.png" alt="Techstars" /></div>
                            <div className="logo-box"><img src="logos/teknopoint.png" alt="Tekno Point" /></div>
                            <div className="logo-box"><img src="logos/cisco.png" alt="Cisco" /></div>
                            <div className="logo-box"><img src="logos/trinax.png" alt="Trinax" /></div>
                            <div className="logo-box"><img src="logos/last.png" alt="Last" /></div>
                        </React.Fragment>
                    ))}
                </div>
                <section className="advantages-section">
                    <p className="subheading d-block d-md-none">The benefits</p>
                    <h2 style={{ fontSize: "30px" }} className="text-white mb-4 d-block d-md-none">Moderation to help<br />your community thrive </h2>

                    {/* Desktop-only */}
                    <p className="subheading d-none d-md-block">Be a partner</p>
                    <h2 className="text-white mb-4 d-none d-md-block">CometChat Partner<br /> Advantages</h2>

                    <div className="advantages-grid">
                        {partneradvantage.map((item, idx) => (
                            <div className="advantage-card" key={idx}>
                                {item.img && (
                                    <img src={item.img} alt={item.title} className="advantage-icon" />
                                )}
                                <h5 style={{ marginTop: "13px" }}>{item.title}</h5>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
    </>
  )
}

export default Partner
