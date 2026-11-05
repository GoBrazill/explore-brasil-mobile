import styled from "styled-components/native";

export const CardContainer = styled.View`
  width: 238px;
  flex-direction: column;
  gap: 10px;
`;

export const CardBackground = styled.ImageBackground.attrs({
  imageStyle: { borderRadius: 22 },
})`
  width: 238px;
  height: 160px;
  padding: 12px;
  align-items: flex-end;
  justify-content: flex-start;
`;

// Círculo branco ao redor do ícone de favorito
export const FavoriteButton = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;

  /* Sombra leve para destacar no card */
  shadow-color: #000000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.15;
  shadow-radius: 4px;
  elevation: 3;
`;

export const CardFavoriteIcon = styled.Image`
  width: 18px;
  height: 18px;
`;

export const CardInfoContainer = styled.View`
  padding: 0 4px;
  flex-direction: column;
  gap: 6px;
  align-self: stretch;
`;

// Container da primeira linha (Título na esquerda + Nota na direita)
export const TitleRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CardTitle = styled.Text`
  color: #000000;
  font-size: 16px;
  font-weight: 700;
  flex: 1;
`;

export const CardRateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const CardRateIcon = styled.Image`
  width: 18px;
  height: 18px;
`;

export const CardRateText = styled.Text`
  color: #000000;
  font-size: 16px;
  font-weight: 500;
`;

export const CardLocationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const CardLocationIcon = styled.Image`
  width: 16px;
  height: 16px;
`;

export const CardLocationText = styled.Text`
  color: #1e1e1e;
  font-size: 14px;
  font-weight: 400;
`;