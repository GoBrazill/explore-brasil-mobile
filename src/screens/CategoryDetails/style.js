import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f7f7f8;
`;

export const Header = styled.View`
  background-color: #ffffff;
  padding-top: 50px;
  padding-bottom: 18px;
  padding-horizontal: 20px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.06;
  shadow-radius: 8px;
  elevation: 4;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  top: 50px;
  padding: 6px;
  z-index: 10;
`;

export const BackIcon = styled.Image`
  width: 22px;
  height: 18px;
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
    paddingBottom: 32,
  },
})`
  flex: 1;
`;

export const BannerCard = styled.View`
  width: 100%;
  height: 185px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 18px;
  background-color: #e2e8f0;
`;

export const BannerImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const FilterRow = styled.View`
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;
`;

export const FilterChip = styled.TouchableOpacity`
  background-color: ${(props) => (props.$active ? '#c85a32' : '#ffffff')};
  border-width: ${(props) => (props.$active ? '0px' : '1px')};
  border-color: #94a3b8;
  border-radius: 24px;
  padding-vertical: 8px;
  padding-horizontal: 16px;
`;

export const FilterChipText = styled.Text`
  font-family: 'sfProDisplayRegular';
  font-size: 14px;
  color: ${(props) => (props.$active ? '#ffffff' : '#64748b')};
`;

export const SectionTitle = styled.Text`
  font-family: 'sfProDisplayBold';
  font-size: 20px;
  color: #101828;
  margin-bottom: 12px;
`;

export const Card = styled.View`
  background-color: #ffffff;
  border-radius: 20px;
  padding: 12px;
  margin-bottom: 12px;
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

export const FavoriteButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const HeartIcon = styled.Image`
  width: 18px;
  height: 16px;
`;
