import React from "react";
import { Searchbar } from "react-native-paper";
import { SafeAreaView, StatusBar } from "react-native";
import { RestaurantInfoCard } from "./components/restaurant-info-card.component";
import styled from "styled-components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.view`
  padding: 16px,
`;

const RestaurantListContainer = styled.view`
  flex: 1,
  padding: 16px,
  background-color: "blue",
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);
