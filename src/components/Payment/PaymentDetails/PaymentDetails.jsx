import React, { useState } from "react";
import CustomInput from "../../CustomInput/CustomInput";
import Cardpayment from "../../../assets/card-payment.svg";
import Flag from "../../../assets/flag.svg";
import Visa from "../../../assets/Visa.svg";
import SavedCard from "../../../assets/Klarna.svg";
import ButtonLogo from "../../../assets/ShieldCheckered.svg";
import { Button, Divider, Form, Radio } from "antd";
import "./PaymentDetails.scss";

const PaymentDetails = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="payment-details">
      <Form>
        <div className="sub-section-title">
          <h3>Enter your Details</h3>
          <p>
            We'll be sending your tickets to the details below. Booking for a
            friend? Add their details.
          </p>
          <div className="form-inputs">
            <CustomInput label={"Full Name"} placeholder="test123" />
            <CustomInput
              label={"Phone Number"}
              placeholder="test123"
              prefixIcon={Flag}
            />
            <CustomInput label={"Full Name"} placeholder="test123" />
            <Form.Item
              name="username"
              rules={[{ required: true, message: "error message!" }]}
            >
              <CustomInput label={"Full Name"} placeholder="test123" />
            </Form.Item>
          </div>
        </div>
        <div className="sub-section-title">
          <h3>Additional information</h3>
          <p>We need a few more details to complete your reservation.</p>
          <div className="form-inputs">
            <CustomInput label={"Full Name"} placeholder="test123" />
            <CustomInput label={"Dropdown"} type="selector" />
          </div>
        </div>
        <div className="sub-section-title">
          <h3>Select your mode of payment</h3>
          <p>Payments with tickete are secure and encrypted</p>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>
              <img src={Cardpayment} />
              Card Payment
            </Radio>
            {value === 1 && (
              <div className="form-inputs">
                <CustomInput label={"Name on Card"} placeholder="test123" />
                <CustomInput
                  label={"Card Number"}
                  placeholder="test123"
                  suffixIcon={Visa}
                />
                <CustomInput label={"Expiry Date"} placeholder="test123" />
                <CustomInput label={"CVV/CVC"} placeholder="test123" />
              </div>
            )}
            <Divider />
            <Radio value={2}>
              <img src={SavedCard} />
              Klarna
            </Radio>
            <Divider />
          </Radio.Group>
        </div>

        <div className="submission-section">
          <div className="top">
            <h3>Total: 123</h3>
            <p className="underlined-info"> you will be in USD</p>
          </div>
          <div className="card">
            <Radio>
              Receive travel tips, suggestions and offers in your city by email
            </Radio>
          </div>
          <div className="bottom">
            <p className="terms-text">
              With payment, you agree to the
              <span> general terms and conditions of Tickete</span> & the
              <span> activity provider</span>.
            </p>
            <Form.Item>
              <Button htmlType="submit">
                Confirm and pay <img src={ButtonLogo} alt="logo" />
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PaymentDetails;
