import React from "react";
import { Card, Text } from "react-native-paper";
import styled from "styled-components";

const Title = styled(Text)`
  padding: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.colors.ui.primary};
  text-align: center;
  font-family: ${({theme}) => theme.fonts.body}
`;

const RestaurantCard = styled(Card)`
  backgroundColor: ${({ theme }) => theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space[3]};
  backgroundColor: ${({ theme }) => theme.colors.bg.primary};
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
