import React from "react";
import { GoBell } from "react-icons/go";
function Footer() {
  return (
    <>
      <footer>
        <div className="footer_container">
          <div className="footer_column">
            <h3>ONLINE SHOPPING</h3>

            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Card</a>
            <a href="#">Myntra Insider</a>
          </div>

          <div className="footer_column">
            <h3>CUTOMER POLICIES</h3>

            <a href="#">Contact Us</a>
            <a href="#">FAQ</a>
            <a href="#">T&C</a>
            <a href="#">Term Of Use</a>
            <a href="#">Track Orders</a>
            <a href="#">Shipping</a>
            <a href="#">Cancellation</a>
          </div>

          <div className="footer_column third">
            <h3>EXPERIENCE MYNTRA APP ON MOBILE</h3>
            <div className="Btn">
              <a href="https://play.google.com/store/apps/details?id=com.myntra.android">
                <img src="images/play.png" alt="" />
              </a>
              <a href="https://apps.apple.com/in/app/myntra-fashion-shopping-app/id907394059">
                <img src="images/app.png" alt="" />
              </a>
            </div>
            <h3>Keep In Touch</h3>
            <div className="logo">
              <a href="https://www.facebook.com/myntra">
                <img src="images/fb.png" alt="" />
              </a>
              <a href="https://twitter.com/myntra">
                <img src="images/twiter.png" alt="" />
              </a>
              <a href="https://www.youtube.com/user/myntradotcom">
                <img src="images/you.png" alt="" />
              </a>
              <a href="https://www.instagram.com/myntra">
                <img src="images/insta.png" alt="" />
              </a>
            </div>
          </div>

          <div className="footer_column">
            <div className="gurantee">
              <img src="images/original.png" alt="" />
              <p>
                100% ORIGINAL{" "}
                <span>guarantee for all products at myntra.com</span>
              </p>
            </div>
            <div className="gurantee">
              <img src="images/rotate.png" alt="" />
              <p>
                Return within 14days <span>of receiving your order</span>
              </p>
            </div>
          </div>
        </div>
        <hr />

        <div className="copyright">
          © 2023 www.myntra.com. All rights reserved.
        </div>
      </footer>
      <div className="bell-button">
        <GoBell className="imgg" />
      </div>
    </>
  );
}

export default Footer;
