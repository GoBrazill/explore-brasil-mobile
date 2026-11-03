import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f7f7f8;
`;

export const Header = styled.View`
  background-color: #ffffff;
  padding-top: 50px;
  padding-bottom: 18px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  align-items: center;
  justify-content: center;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.06;
  shadow-radius: 8px;
  elevation: 4;
`;

export const HeaderTitle = styled.Text`
  font-family: 'fugazOne';
  font-size: 24px;
  color: #c85a32;
  text-align: center;
`;

export const ScrollArea = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
})`
  flex: 1;
`;

export const Card = styled.View`
  background-color: #ffffff;
  border-radius: 20px;
  padding: 12px;
  margin-bottom: 14px;
  flex-direction: row;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 3px;
  shadow-opacity: 0.05;
  shadow-radius: 8px;
  elevation: 3;
`;

export const CardImage = styled.Image`
  width: 84px;
  height: 84px;
  border-radius: 16px;
`;

export const CardContent = styled.View`
  flex: 1;
  padding-left: 14px;
  gap: 6px;
`;

export const CardTitle = styled.Text`
  font-family: 'sfProDisplayBold';
  font-size: 16px;
  color: #101828;
`;

export const CardMetaRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const CardMetaIcon = styled.Image`
  width: 12px;
  height: 15px;
`;

export const CardMetaText = styled.Text`
  font-family: 'sfProDisplayRegular';
  font-size: 13px;
  color: #475467;
`;

export const StarIcon = styled.Image`
  width: 14px;
  height: 14px;
`;

export const RatingText = styled.Text`
  font-family: 'sfProDisplayBold';
  font-size: 13px;
  color: #101828;
`;

export const CardActions = styled.View`
  justify-content: space-between;
  align-items: center;
  height: 84px;
  padding-vertical: 2px;
`;

export const FavoriteButton = styled.TouchableOpacity`
  padding: 4px;
`;

export const HeartIcon = styled.Image`
  width: 18px;
  height: 16px;
`;

export const DetailButton = styled.TouchableOpacity`
  padding: 2px;
`;

export const DetailButtonIcon = styled.Image`
  width: 36px;
  height: 36px;
`;
