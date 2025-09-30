import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row">

          {/* Column 1 */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold text-uppercase">ZEN CLASS</h6>
            <ul className="list-unstyled small">
              <li>Full Stack Development</li>
              <li>Data Science</li>
              <li>Software Development</li>
              <li>Intel AIML</li>
              <li>Automation & Testing</li>
              <li>UI/UX</li>
              <li>DevOps</li>
              <li>Digital Marketing</li>
              <li>All Programs</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold text-uppercase">Popular Courses</h6>
            <ul className="list-unstyled small">
              <li>Python – IITM Pravartak</li>
              <li>Java</li>
              <li>Mobile Hacking</li>
              <li>C Programming</li>
              <li>AWS</li>
              <li>Angular</li>
              <li>Dark Web</li>
              <li>All Courses</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold text-uppercase">Practice Platforms</h6>
            <ul className="list-unstyled small">
              <li>CodeKata</li>
              <li>WebKata</li>
              <li>SQLKata</li>
              <li>Debugging</li>
              <li>IDE</li>
            </ul>

            <h6 className="fw-bold text-uppercase mt-3">Resources</h6>
            <ul className="list-unstyled small">
              <li>Success Stories</li>
              <li>Learn Hub</li>
              <li>Free Resources</li>
              <li>Web Stories</li>
              <li>Rewards</li>
              <li>Refer a Friend</li>
              <li>Become an Affiliate</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold text-uppercase">Company</h6>
            <ul className="list-unstyled small">
              <li>Refund Policy</li>
              <li>FAQs</li>
              <li>Contact Us</li>
              <li>About Us</li>
            </ul>

            <div className="mt-3">
              <img src="https://nextrarecruitment.com/wp-content/uploads/2024/05/cropped-image4-2048x820.png" alt="GUVI Logo" className="mb-2" width="120" />
              <p className="small">
                GUVI (Grab Your Vernacular Imprint) Geek Network Private Limited is a leading online learning
                and skills development company, incubated by IIT Madras and IIM Ahmedabad.
              </p>
            </div>

            {/* Social icons */}
            <div className="d-flex gap-2 mb-3">
              <a href="#"><img src="https://www.guvi.in/assets/DpDJVw-s-facebook.webp" alt="Facebook" width="28" /></a>
              <a href="#"><img src="https://www.guvi.in/assets/CgqVvrZ9-instagram.webp" alt="Instagram" width="28" /></a>
              <a href="#"><img src="https://www.guvi.in/assets/DoUuF0af-linkedin.webp" alt="LinkedIn" width="28" /></a>
              <a href="#"><img src="https://www.guvi.in/assets/Df_J19ru-twitter.webp" alt="Twitter" width="28" /></a>
              <a href="#"><img src="https://www.guvi.in/assets/C6Exv61E-telegram.webp" alt="Telegram" width="28" /></a>
              <a href="#"><img src="https://www.guvi.in/assets/P0wSDXgo-youtube.webp" alt="YouTube" width="28" /></a>
            </div>

            {/* App store buttons */}
            <div className="d-flex gap-2">
              <a href="#"><img src="https://www.guvi.in/assets/W3f-xw2p-app-store.webp" alt="App Store" width="120" /></a>
              <a href="#"><img src="https://www.guvi.in/assets/CBovHX22-google-play.webp" alt="Google Play" width="120" /></a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-3" />

        {/* Bottom Row */}
        <div className="text-center small text-muted pb-3">
          © {new Date().getFullYear()} GUVI Geeks Network Pvt. Ltd. | Terms & Conditions | Privacy Policy
        </div>
      </div>
    </footer>
  );
}
