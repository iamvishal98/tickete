import React from "react";
import { Divider } from "antd";
import Image from "../../../assets/product-image.svg";
import TicketIcon from "../../../assets/Ticket.svg";
import ClockIcon from "../../../assets/Clock.svg";
import CalendarIcon from "../../../assets/Calendar.svg";
import TagIcon from "../../../assets/Tag.svg";
import "./PaymentOverview.scss";

const PaymentOverview = () => {
  return (
    <div className="payment-overview">
      <div className="ticket-image-container">
        <img src={Image} alt="ticket-image" />
      </div>
      <p className="ticket-info typography">
        Amsterdam opeg boat canal cruise - Live Ggide - from Anne Frgnk House
      </p>
      <div className="ticket-timelines">
        <p className="typography3">
          <img src={TicketIcon} alt="ticket" /> Varaint Name
        </p>
        <p className="typography3">
          <img src={CalendarIcon} alt="Calendar" /> Calendar
        </p>
        <p className="typography3">
          <img src={ClockIcon} alt="Clock" /> Time
        </p>
      </div>
      <Divider />
      <div className="ticket-overview">
        <h4 className="typography">Ticket Overview</h4>
        <div className="price-breakup">
          <p className="typography3">
            Pax type <span>123</span>
          </p>
          <p className="typography3">
            Pax type <span>123</span>
          </p>
          <p className="typography3">
            Fee <span>123</span>
          </p>
          <p className="typography3">
            Discount applied <span>-12</span>
          </p>
        </div>
      </div>
      <Divider />
      <p className="discount">
        <img src={TagIcon} alt="tag" />
        Have a promo Code?
      </p>
      <Divider />
      <div className="ticket-final-price-and-info">
        <p className="final-price">
          Total <span>555</span>
        </p>
        <p className="underlined-info">You will pay in USD</p>
        <div className="card">
          <p>Free cancellation</p>
          <p>Cancel before date for a full refund</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentOverview;
