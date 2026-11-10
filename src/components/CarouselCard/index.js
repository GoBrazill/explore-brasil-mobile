import React from "react";
import {
  CardContainer,
  CardBackground,
  FavoriteButton,
  CardFavoriteIcon,
  CardInfoContainer,
  TitleRow,
  CardTitle,
  CardRateContainer,
  CardRateIcon,
  CardRateText,
  CardLocationContainer,
  CardLocationIcon,
  CardLocationText,
} from "./style";
import { Pressable, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export const CarouselCard = ({
  cardBackground,
  cardFavorite,
  cardTitle,
  cardRateIcon,
  cardRate,
  cardLocationIcon,
  cardLocation,
  onFavoritePress,
}) => {
  return (
    <CardContainer>
      <Pressable onPress={() => { router.push('/place-detail') }}>
        <CardBackground source={cardBackground}>
          <FavoriteButton activeOpacity={0.8} onPress={onFavoritePress}>
            <CardFavoriteIcon source={cardFavorite} resizeMode="contain" />
          </FavoriteButton>
        </CardBackground>
      </Pressable>
      <CardInfoContainer>
        <TitleRow>
          <CardTitle numberOfLines={1}>{cardTitle}</CardTitle>
          <CardRateContainer>
            <CardRateIcon source={cardRateIcon} resizeMode="contain" />
            <CardRateText>{cardRate}</CardRateText>
          </CardRateContainer>
        </TitleRow>
        <CardLocationContainer>
          <CardLocationIcon source={cardLocationIcon} resizeMode="contain" />
          <CardLocationText numberOfLines={1}>{cardLocation}</CardLocationText>
        </CardLocationContainer>
      </CardInfoContainer>
    </CardContainer>
  );
};

export default CarouselCard;