import styled from "styled-components/native";

export const CategoryContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 63px;
  max-width: 93px;
  border: 1px solid purple;
`

export const Category = styled.View`
  display: flex;
  padding: 10px;
  gap: 2px;
  border-radius: 6px;
  background-color: rgba(201, 100, 64, 0.8);
`;

export const CategoryImage = styled.Image`
  width: 24px;
  height: 24px;
`;

export const CategoryName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #45556C;
`;