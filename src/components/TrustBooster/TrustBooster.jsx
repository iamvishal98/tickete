import React from "react";
import Check from "../../assets/Check.svg";
import Chats from "../../assets/ChatsCircle.svg";
import Calendar from "../../assets/FooterCalendar.svg";
import Secure from "../../assets/Vector.svg";
import "./TrustBooster.scss";

const TrustBooster = () => {
  return (
    <div className="trust-booster ">
      <p className="typography">The Tickete promise</p>
      <div className="promises">
        <div className="promise">
          <img src={Check} alt="check" />
          <div className="promise-text">
            <p className="heading">Official tickets</p>
            <p className="typography2">Authorised reseller to top attraction</p>
          </div>
        </div>
        <div className="promise">
          <img src={Chats} alt="Chat" />
          <div className="promise-text">
            <p className="heading">24/7 dedicated support</p>
            <p className="typography2">We're here to help, talk to an expert</p>
          </div>
        </div>
        <div className="promise">
          <img src={Calendar} alt="Calendar" />
          <div className="promise-text">
            <p className="heading">Flexible bookings</p>
            <p className="typography2">
              Book stress-free with easy cancellation
            </p>
          </div>
        </div>
        <div className="promise">
          <img src={Secure} alt="Secure" />
          <div className="promise-text">
            <p className="heading">100% secure payments</p>
            <p className="typography2">
              Internationally recognized encrypted payment process
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBooster;
