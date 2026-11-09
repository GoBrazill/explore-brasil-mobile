import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
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
} from "./style";

import ArrowRight from "../../assets/icons/arrow-right.webp";
import PinIconImg from "../../assets/icons/pin-icon.webp";
import StarIconImg from "../../assets/icons/star-icon.webp";

// Localização mockada padrão do utilizador (Florianópolis)
const DEFAULT_USER_LOCATION = {
  latitude: -27.5850,
  longitude: -48.4900,
};

// 3 Marcadores Mocados
const mockPlaces = [
  {
    id: "1",
    title: "Lagoa da Conceição",
    location: "Florianópolis, SC",
    rate: "4,9",
    latitude: -27.6035,
    longitude: -48.4611,
    image: require("../../assets/images/lagoa-da-conceicao-image.webp"),
  },
  {
    id: "2",
    title: "Praia do Rosa",
    location: "Imbituba, SC",
    rate: "4,8",
    latitude: -27.5948,
    longitude: -48.5482,
    image: require("../../assets/images/santa-catarina-image.webp"),
  },
  {
    id: "3",
    title: "Santo Antônio de Lisboa",
    location: "Florianópolis, SC",
    rate: "4,7",
    latitude: -27.5180,
    longitude: -48.5130,
    image: require("../../assets/images/lagoa-da-conceicao-image.webp"),
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

  const generateLeafletHTML = () => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
          <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
          <style>
            html, body, #map {
              width: 100%;
              height: 100%;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
            }
            .leaflet-control-attribution { display: none; }
            
            /* Reset obrigatório da moldura padrão do Leaflet */
            .leaflet-div-icon {
              background: transparent !important;
              border: none !important;
            }

            /* Círculo Azul da Posição do Utilizador com Animação */
            .user-dot-container {
              width: 36px;
              height: 36px;
              border-radius: 18px;
              background-color: rgba(0, 122, 255, 0.25);
              display: flex;
              justify-content: center;
              align-items: center;
              box-shadow: 0 0 10px rgba(0, 122, 255, 0.4);
            }
            .user-dot {
              width: 16px;
              height: 16px;
              border-radius: 8px;
              background-color: #007aff;
              border: 2px solid #ffffff;
            }

            /* Pin Terracota dos Locais */
            .custom-pin {
              width: 38px;
              height: 38px;
              border-radius: 19px;
              background-color: #c96440;
              border: 2px solid #ffffff;
              display: flex;
              justify-content: center;
              align-items: center;
              box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
            }
            .custom-pin svg {
              width: 18px;
              height: 18px;
              fill: #ffffff;
            }
          </style>
        </head>
        <body>
          <div id="map"></div>
          <script>
            const map = L.map('map', { zoomControl: false });

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
              maxZoom: 19
            }).addTo(map);

            // 1. Criar o Marker do Utilizador (Bolinha Azul)
            const userIcon = L.divIcon({
              className: 'user-icon-marker',
              html: '<div class="user-dot-container"><div class="user-dot"></div></div>',
              iconSize: [36, 36],
              iconAnchor: [18, 18]
            });
            const userMarker = L.marker([${userLocation.latitude}, ${userLocation.longitude}], { 
              icon: userIcon, 
              zIndexOffset: 1000 
            }).addTo(map);

            // 2. Criar os Marcadores de Destino
            const places = ${JSON.stringify(mockPlaces)};
            const allCoords = [[${userLocation.latitude}, ${userLocation.longitude}]];

            places.forEach(place => {
              allCoords.push([place.latitude, place.longitude]);

              const pinIcon = L.divIcon({
                className: 'place-pin-marker',
                html: '<div class="custom-pin"><svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></div>',
                iconSize: [38, 38],
                iconAnchor: [19, 38]
              });

              const marker = L.marker([place.latitude, place.longitude], { icon: pinIcon }).addTo(map);
              
              marker.on('click', () => {
                window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'SELECT_PLACE', id: place.id }));
              });
            });

            // 3. Enquadra o mapa automaticamente para mostrar a bolinha azul E os marcadores na tela
            const bounds = L.latLngBounds(allCoords);
            map.fitBounds(bounds, { padding: [60, 60] });
          </script>
        </body>
      </html>
    `;
  };

  const handleWebViewMessage = (event) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      if (data.type === "SELECT_PLACE") {
        const found = mockPlaces.find((p) => p.id === data.id);
        if (found) {
          setSelectedPlace(found);
        }
      }
    } catch (e) {
      console.warn("Erro ao processar mensagem do mapa:", e);
    }
  };

  return (
    <MainContainer>
      <HeaderOverlay>
        <Header variant="search" placeholder="Busque destinos, cidades..." />
      </HeaderOverlay>

      {loading ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color="#C96440" />
        </View>
      ) : (
        <WebView
          /* A prop key garante que a WebView recarrega o mapa assim que as coordenadas chegam */
          key={`${userLocation.latitude}-${userLocation.longitude}`}
          originWhitelist={["*"]}
          source={{ html: generateLeafletHTML() }}
          style={{ flex: 1 }}
          onMessage={handleWebViewMessage}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      )}

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

      <BottomNav activeTab="map" />
    </MainContainer>
  );
};

export default MapScreen;