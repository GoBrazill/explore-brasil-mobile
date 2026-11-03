import styled from "styled-components/native";

export const Background = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Overlay = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 60px 24px 60px 24px;
`;

export const CenterContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const LogoImage = styled.Image`
  width: 250px;
  height: 250px;
`;

export const TaglineText = styled.Text`
  font-family: 'sfProDisplayBold';
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  text-align: center;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  max-width: 320px;
`;

export const BottomContainer = styled.View`
  width: 100%;
  gap: 10px;
`;

export const StatusRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StatusText = styled.Text`
  font-family: 'sfProDisplayBold';
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;

export const PercentageText = styled.Text`
  font-family: 'sfProDisplayRegular';
  font-size: 14px;
  color: #ffffff;
`;

export const ProgressBarTrack = styled.View`
  width: 100%;
  height: 10px;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.25);
  overflow: hidden;
`;

export const ProgressBarFill = styled.View`
  width: ${(props) => props.$progress || 69}%;
  height: 100%;
  border-radius: 999px;
  background-color: #d97a48;
`;
