import styled from "styled-components/native";

export const MainContainer = styled.View`
  flex: 1;
  background-color: #ffffff;
  position: relative;
`;

// Container do Header flutuante sobre o mapa
export const HeaderOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 25;
`;

// Card flutuante sobreposto (logo acima da BottomNav)
export const CardOverlay = styled.View`
  position: absolute;
  bottom: 120px;
  left: 20px;
  right: 20px;
  z-index: 20;
`;

// Estrutura do Card horizontal idêntico ao da imagem
export const FloatingPlaceCard = styled.View`
  background-color: #ffffff;
  border-radius: 24px;
  padding: 12px;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  
  /* Sombra para iOS e Android */
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.15;
  shadow-radius: 10px;
  elevation: 6;
`;

export const PlaceImage = styled.Image`
  width: 86px;
  height: 86px;
  border-radius: 18px;
`;

export const PlaceInfo = styled.View`
  flex: 1;
  gap: 4px;
`;

export const PlaceTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #121212;
`;

export const LocationRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const LocationIcon = styled.Image`
  width: 14px;
  height: 14px;
`;

export const LocationText = styled.Text`
  font-size: 13px;
  color: #62748e;
`;

export const RateRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  margin-top: 2px;
`;

export const RateIcon = styled.Image`
  width: 14px;
  height: 14px;
`;

export const RateText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #121212;
`;

export const ActionButton = styled.TouchableOpacity`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background-color: #c96440;
  justify-content: center;
  align-items: center;
`;

export const ActionIcon = styled.Image`
  width: 18px;
  height: 18px;
  tint-color: #ffffff;
`;

// Estilo dos Pins Terracota com ícone branco
export const CustomPin = styled.View`
  width: 38px;
  height: 38px;
  border-radius: 19px;
  background-color: #c96440;
  border: 2px solid #ffffff;
  justify-content: center;
  align-items: center;

  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
`;

export const PinIcon = styled.Image`
  width: 18px;
  height: 18px;
  tint-color: #ffffff;
`;

// Ponto do Usuário (círculo azul brilhante com borda branca)
export const UserDotContainer = styled.View`
  width: 34px;
  height: 34px;
  border-radius: 17px;
  background-color: rgba(0, 122, 255, 0.25);
  justify-content: center;
  align-items: center;
`;

export const UserDot = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: #007aff;
  border: 2px solid #ffffff;
`;