import React from "react";
import Card from "../Components/Card";

const imageData = [
  {
    src: "https://i.pinimg.com/474x/6b/50/4e/6b504e4793f316ba39b4e92a0d04b851.jpg",
    title: "Customers List",
    info: "View all customers here",
    link: "/customers",
  },
  {
    src: "https://static.thenounproject.com/png/2272167-200.png",
    title: "Money Transfer",
    info: "Transfer your money from here",
    link: "/transfer-money",
  },
  {
    src: "https://static.thenounproject.com/png/2684061-200.png",
    title: "Transaction History",
    info: "View all transactions",
    link: "/transaction-history",
  },
];

const Homepage = () => {
  return (
    <div className="Home">
      {imageData.map((img, key) => {
        return (
          <Card
            src={img.src}
            title={img.title}
            info={img.info}
            key={key}
            path={img.link}
          />
        );
      })}
    </div>
  );
};

export default Homepage;
