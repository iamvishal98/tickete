import React from "react";
import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ChatsCircle from "../../assets/ChatsCircle.svg";
import "./Faq.scss";
import data from "../../data/faq";

const items = data.map((qa) => ({
  key: qa.id,
  label: <p className=" question typography2">{qa.question}</p>,
  children: <p className="answer typography2">{qa.answer}</p>,
}));

const Faq = () => {
  const customExpandIcon = (panelProps) => {
    const { isActive } = panelProps;
    return isActive ? (
      <MinusOutlined style={{ fontSize: "18px" }} />
    ) : (
      <PlusOutlined style={{ fontSize: "18px" }} />
    );
  };

  return (
    <div className="faq-container">
      <div className="faq-all-questions">
        <p className="typography">Frequently asked questions</p>
        <Collapse
          items={items}
          expandIcon={customExpandIcon}
          bordered={false}
        />
      </div>
      <div className="need-help">
        <div className="text-btn">
          <p className="typography">Need help?</p>
          <p className="typography2">We are here to help, 24*7</p>
          <button>Chat with us</button>
        </div>
        <div className="icon">
          <img src={ChatsCircle} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
