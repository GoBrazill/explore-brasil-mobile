import styled from "styled-components/native";

export const MainContainer = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const CommingSoonContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 20px;
`;

export const CommingSoonImage = styled.Image`
  width: 330px;
  height: 280px;
`;

export const CommingSoonMessage = styled.View`
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

export const CommingSoonTitle = styled.Text`
  color: #293340;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  line-height: 37px;
`;

export const CommingSoonDescription = styled.Text`
  color: #62748E;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
`;