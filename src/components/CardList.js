import React from "react";
import Card from "./Card";

const CardList = ({ robots = [] }) => {
  const cards = robots.map((robot) => <Card key={robot.id} robot={robot} />);

  return <div>{cards}</div>;
};

export default CardList;
