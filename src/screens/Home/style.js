import styled from "styled-components/native";

export const Header = styled.View`
  padding: 50px 20px 20px 20px;
  background-color: #ffffff;
  border-radius: 0 0 10px 10px;

  /* Sombra para iOS */
  shadow-color: #121212;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.25;
  shadow-radius: 5.7px;

  /* Sombra para Android */
  elevation: 10;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  background-color: #fafafa;
  border: 1px solid rgba(201, 100, 64, 0.4);
  `;

export const SearchBar = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  `;

export const SearchBarIcon = styled.Image`
  width: 24px;
  height: 24px;
  `;

export const SearchBarInput = styled.TextInput`
  font-size: 12px;
  color: #d27e60;
  flex: 1;
  `;

export const FilterButton = styled.TouchableOpacity`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 6px;
  justify-content: center;
  align-items: center;
  /* Sombra para iOS */
  shadow-color: #121212;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 6px;
  /* Sombra para Android */
  elevation: 4;
  `;

export const SearchBarFilter = styled.Image`
  width: 24px;
  height: 24px;
`;

