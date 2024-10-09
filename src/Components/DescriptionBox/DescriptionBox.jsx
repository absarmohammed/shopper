import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="discriptionbox">
      <div className="discriptionbox-navigator">
        <div className="discriptionbox-nav-box">Description</div>
        <div className="discriptionbox-nav-box fade">Reviews (144)</div>
      </div>
      <div className="discriptionbox-description">
        <p>
          An e-commerce website is a digital platform where businesses and
          individuals can buy and sell products or services online. Typically
          designed for user convenience, the website features an intuitive
          interface, enabling customers to browse categories, compare items,
          read reviews, and make secure transactions. </p>
          
          <p>With personalized
          recommendations, fast search options, and real-time inventory updates,
          the site caters to diverse customer needs. Most e-commerce platforms
          offer multiple payment methods, including credit cards, digital
          wallets, and more, while ensuring customer data privacy through
          encryption. The website also supports order tracking, shipping
          details, and customer service for a seamless shopping experience.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
