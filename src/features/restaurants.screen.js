import React from "react";
import { Searchbar } from "react-native-paper";
import { SafeAreaView, StatusBar } from "react-native";
import { RestaurantInfoCard } from "./components/restaurant-info-card.component";
import styled from "styled-components";

const RestaurantContainer = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight};
`;

const RestaurantSearch = styled.view`
  padding: 16,
`;

const RestaurantList = styled.view`
  flex: 1,
  padding: 16,
  background-color: "blue",
`;

export const RestaurantsScreen = () => (
  <RestaurantContainer>
    <RestaurantSearch>
      <Searchbar />
    </RestaurantSearch>
    <RestaurantList>
      <RestaurantInfoCard />
    </RestaurantList>
  </RestaurantContainer>
);
