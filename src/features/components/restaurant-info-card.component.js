import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components";

const Title = styled.text`
  padding: 16px;
  color: red;
  text-align: center;
`;

const RestaurantCard = styled(Card)`
  backgroundColor: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  backgroundColor: white;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
