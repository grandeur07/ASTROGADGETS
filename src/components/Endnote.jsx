import React from 'react'

const Endnote = () => {
  return (
    <div>
      <h2 className="display-4">Our Store</h2>

      <section className="row text-center bg-secondary">
        <div className="col-md-3">
          <span className="bg-warning badge">FREE DELIVERY</span> <br />
          <b>We Deliver Country Wide</b>
        </div>

        <div className="col-md-3">
          <span className="bg-warning badge">ONLINE SUPPORT 24/7</span> <br />
          <b>Call us</b> <br />
          <i>0759136485</i>
        </div>

        <div className="col-md-3">
          <span className="bg-warning badge">MEMBER DISCOUNT</span> <br />
          <b>Become a Member Today and Enjoy our Exclusive Discounts</b>
        </div>

        <div className="col-md-3">
          <span className="bg-warning badge">LOCATION</span> <br />
          <b>Platinum Plaza Opp Imenti</b> <br />
          <b>2nd Floor</b> <br />
          <b>Shop S17/S18</b> <br />
        </div>
      </section>

      <footer className="text-light bg-dark p-2 text-center">
        

{/* FOOTER */}
        <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h2 className="footer-logo">AstroGadgets</h2>
          <p>
            Premium Accessories, Trusted Dealers, and Nonstop Playing — All in one place
          </p>
        </div>

        {/* Explore */}
        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li><a href="#">Browse Accessories</a></li>
            <li><a href="#">Sell Your Accessory</a></li>
            <li><a href="#">Accessories Reviews</a></li>
            <li><a href="#">Latest Deals</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Terms & Privacy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3>Stay Updated</h3>
          <p>Get the latest gaming gadgets and games.</p>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button className='text-dark'>Subscribe</button>
          </div>
        </div>

      </div>
      

      {/* Bottom */}
      <h5 className='footer-bottom'>Developed by Grandeur.&copy; 2026. All Rights Reserved</h5>

      {/* Styles */}
      <style>{`
        .footer {
          background: #0a0a0a;
          color: #ddd;
          padding: 50px 20px 20px;
        }

        .footer-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
        }

        .footer-logo {
          color: #fff;
          margin-bottom: 10px;
        }

        .footer-section h3 {
          margin-bottom: 10px;
          color: #fff;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
        }

        .footer-section ul li {
          margin-bottom: 8px;
        }

        .footer-section a {
          color: #bbb;
          text-decoration: none;
          transition: 0.3s;
        }

        .footer-section a:hover {
          color: #ffffff;
        }

        .newsletter {
          display: flex;
          margin-top: 10px;
        }

        .newsletter input {
          flex: 1;
          padding: 8px;
          border: none;
          outline: none;
          border-radius: 4px 0 0 4px;
        }

        .newsletter button {
          padding: 8px 12px;
          border: none;
          background: #ff3c00;
          color: white;
          cursor: pointer;
          border-radius: 0 4px 4px 0;
        }

        .footer-bottom {
          text-align: center;
          margin-top: 40px;
          border-top: 1px solid #222;
          padding-top: 15px;
          font-size: 14px;
          color: #888;
        }
      `}</style>
      </footer>
    </div>
  )
}

export default Endnote