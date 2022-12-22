import React from "react";
import { Searchbar } from "react-native-paper";
import { SafeAreaView, StatusBar } from "react-native";
import { RestaurantInfoCard } from "./components/restaurant-info-card.component";
import styled from "styled-components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.space[3]};
  backgroundColor: ${({ theme }) => theme.colors.bg.secondary};
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
