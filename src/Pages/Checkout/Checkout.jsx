import React from "react";
import PaymentDetails from "../../components/Payment/PaymentDetails/PaymentDetails";
import PaymentOverview from "../../components/Payment/PaymentOverview/PaymentOverview";
import Header from "../../components/Header/Header";
import Faq from "../../components/Faq/Faq";
import TrustBooster from "../../components/TrustBooster/TrustBooster";
import "./Checkout.scss";

const Checkout = () => {
  return (
    <div className="max-width-container">
      <div className="checkout-container">
        <Header />
        <h1>Confirm and pay</h1>
        <div className="checkout-content">
          <PaymentDetails />
          <hr className="divider" />
          <PaymentOverview />
        </div>
        <hr className="divider" />
        <Faq />
        <hr className="divider" />
        <TrustBooster />
      </div>
    </div>
  );
};

export default Checkout;
