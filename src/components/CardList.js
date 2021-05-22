import React from "react";
import Card from "./Card";

const CardList = ({ robots = [] }) => {
  const cardsArray = robots.map((robot) => (
    <Card key={robot.id} robot={robot} />
  ));

  return <div>{cardsArray}</div>;
};

export default CardList;
