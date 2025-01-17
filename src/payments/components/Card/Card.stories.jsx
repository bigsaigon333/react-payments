import React from "react";
import Card from "./Card";
import CardShape from "./CardShape";

export default {
  title: "Card",
  component: Card,
};

const CardTemplate = args => <Card {...args} />;

export const RegisteredCard = CardTemplate.bind({});

RegisteredCard.args = {
  backgroundColor: "bg-custom-green",
  isRegistered: true,
  bank: "국민",
  numberInfos: ["1234", "4567", "xxxx", "xxxx"],
  ownerName: "KYLE",
  expirationDate: "04/21",
};

export const LargeRegisteredCard = CardTemplate.bind({});

LargeRegisteredCard.args = {
  ...RegisteredCard.args,
  scale: "scale-150",
};

export const UnregisteredCard = CardTemplate.bind({});

UnregisteredCard.args = {
  isRegistered: false,
  ownerName: "NAME",
  numberInfos: [],
  expirationDate: "MM/YY",
};

export const CardShapeTemplate = args => <CardShape {...args} />;

CardShapeTemplate.args = {
  isRegistered: false,
};
