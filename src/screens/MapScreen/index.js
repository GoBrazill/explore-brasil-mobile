import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import MapView, { Marker, UrlTile } from "react-native-maps";
import * as Location from "expo-location";

import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";

import {
  MainContainer,
  HeaderOverlay,
  CardOverlay,
  FloatingPlaceCard,
  PlaceImage,
  PlaceInfo,
  PlaceTitle,
  LocationRow,
  LocationIcon,
  LocationText,
  RateRow,
  RateIcon,
  RateText,
  ActionButton,
  ActionIcon,
  CustomPin,
  PinIcon,
  UserDotContainer,
  UserDot,
} from "./style";

import ArrowRight from "../../assets/icons/arrow-right.webp";
import PinIconImg from "../../assets/icons/pin-icon.webp";
import StarIconImg from "../../assets/icons/star-icon.webp";

// Coordenada mockada padrão do usuário em Florianópolis
const DEFAULT_USER_LOCATION = {
  latitude: -27.5850,
  longitude: -48.4900,
};

// 3 Marcadores Mocados no mapa
const mockPlaces = [
  {
    id: "1",
    title: "Lagoa da Conceição",
    location: "Florianópolis, SC",
    rate: "4,9",
    latitude: -27.6035,
    longitude: -48.4611,
    image: require("../../assets/images/lagoa-da-conceicao-image.webp"),
    categoryIcon: require("../../assets/icons/museum-icon.webp"),
  },
  {
    id: "2",
    title: "Praia do Rosa",
    location: "Imbituba, SC",
    rate: "4,8",
    latitude: -27.5948,
    longitude: -48.5482,
    image: require("../../assets/images/santa-catarina-image.webp"),
    categoryIcon: require("../../assets/icons/museum-icon.webp"),
  },
  {
    id: "3",
    title: "Santo Antônio de Lisboa",
    location: "Florianópolis, SC",
    rate: "4,7",
    latitude: -27.5180,
    longitude: -48.5130,
    image: require("../../assets/images/lagoa-da-conceicao-image.webp"),
    categoryIcon: require("../../assets/icons/museum-icon.webp"),
  },
];

export const MapScreen = () => {
  const [userLocation, setUserLocation] = useState(DEFAULT_USER_LOCATION);
  const [selectedPlace, setSelectedPlace] = useState(mockPlaces[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status === "granted") {
          let location = await Location.getLastKnownPositionAsync({});
          if (!location) {
            location = await Location.getCurrentPositionAsync({
              accuracy: Location.Accuracy.Balanced,
            });
          }
          if (location) {
            setUserLocation({
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            });
          }
        }
      } catch (error) {
        console.warn("Usando localização mockada padrão.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const initialRegion = {
    latitude: -27.5700,
    longitude: -48.5000,
    latitudeDelta: 0.18,
    longitudeDelta: 0.18,
  };

  return (
    <MainContainer>
      {/* 1. Header Flutuante */}
      <HeaderOverlay>
        <Header variant="search" placeholder="Busque destinos, cidades..." />
      </HeaderOverlay>

      {/* 2. Mapa do OpenStreetMap */}
      {loading ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color="#C96440" />
        </View>
      ) : (
        <MapView
          style={{ flex: 1 }}
          initialRegion={initialRegion}
          mapType="none" // 1. Desativa a camada nativa do Google Maps que estava bloqueando o mapa
          showsUserLocation={false}
        >
          {/* 2. Camada oficial de Tiles do OpenStreetMap */}
          <UrlTile
            urlTemplate="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            maximumZ={19}
            tileSize={256}
            shouldReplaceMapContent={true} // 3. Força o OpenStreetMap como o mapa principal
          />

          {/* Marker A: Posição do Usuário */}
          {userLocation && (
            <Marker
              coordinate={userLocation}
              title="Você está aqui"
              tracksViewChanges={false}
            >
              <UserDotContainer>
                <UserDot />
              </UserDotContainer>
            </Marker>
          )}

          {/* Marker B: 3 Pontos Fixos Mocados */}
          {mockPlaces.map((place) => (
            <Marker
              key={place.id}
              coordinate={{
                latitude: place.latitude,
                longitude: place.longitude,
              }}
              onPress={() => setSelectedPlace(place)}
              tracksViewChanges={false}
            >
              <CustomPin>
                <PinIcon source={place.categoryIcon} resizeMode="contain" />
              </CustomPin>
            </Marker>
          ))}
        </MapView>
      )}

      {/* 3. Card Flutuante de Destino Selecionado */}
      {selectedPlace && (
        <CardOverlay>
          <FloatingPlaceCard>
            <PlaceImage source={selectedPlace.image} />
            <PlaceInfo>
              <PlaceTitle numberOfLines={1}>{selectedPlace.title}</PlaceTitle>
              <LocationRow>
                <LocationIcon source={PinIconImg} resizeMode="contain" />
                <LocationText numberOfLines={1}>{selectedPlace.location}</LocationText>
              </LocationRow>
              <RateRow>
                <RateIcon source={StarIconImg} resizeMode="contain" />
                <RateText>{selectedPlace.rate}</RateText>
              </RateRow>
            </PlaceInfo>

            <ActionButton activeOpacity={0.8}>
              <ActionIcon source={ArrowRight} resizeMode="contain" />
            </ActionButton>
          </FloatingPlaceCard>
        </CardOverlay>
      )}

      {/* 4. BottomNav Fixo */}
      <BottomNav activeTab="map" />
    </MainContainer>
  );
};

export default MapScreen;