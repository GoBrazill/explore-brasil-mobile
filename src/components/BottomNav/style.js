import styled from "styled-components/native";

export const NavContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: auto;
  background-color: #FFFFFF;
  border-top-width: 1px;
  border-top-color: rgba(201, 100, 64, 0.12);
  padding: 10px  0 30px 0;
`;

export const NavItem = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const IconCircle = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.isActive ? "rgba(201, 100, 64, 0.15)" : "transparent"};
`;

export const NavIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const NavText = styled.Text`
  font-size: 13px;
  font-weight: ${(props) => (props.isActive ? "700" : "500")};
  color: ${(props) => (props.isActive ? "#C96440" : "#45556C")};
`;