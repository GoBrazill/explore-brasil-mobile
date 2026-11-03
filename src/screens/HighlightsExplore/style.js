import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
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
    paddingBottom: 24,
  },
})`
  flex: 1;
`;

export const ItineraryBanner = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff8f5;
  border-width: 1px;
  border-color: #f4cbbf;
  border-radius: 16px;
  padding: 12px 14px;
  margin-bottom: 24px;
`;

export const BannerBadgeIcon = styled.Image`
  width: 38px;
  height: 38px;
  border-radius: 10px;
`;

export const BannerContent = styled.View`
  flex: 1;
  padding-left: 12px;
  gap: 2px;
`;

export const BannerSubLabel = styled.Text`
  font-family: 'sfProDisplayBold';
  font-size: 11px;
  color: #c85a32;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const BannerTitle = styled.Text`
  font-family: 'sfProDisplayBold';
  font-size: 16px;
  color: #101828;
`;

export const DayBadge = styled.View`
  background-color: #ffffff;
  border-radius: 16px;
  padding-horizontal: 12px;
  padding-vertical: 5px;
`;

export const DayBadgeText = styled.Text`
  font-family: 'sfProDisplayMedium';
  font-size: 13px;
  color: #c85a32;
`;

export const SectionTitle = styled.Text`
  font-family: 'sfProDisplayBold';
  font-size: 20px;
  color: #101828;
`;

export const SectionSubtitle = styled.Text`
  font-family: 'sfProDisplayRegular';
  font-size: 14px;
  color: #667085;
  margin-top: 4px;
  margin-bottom: 16px;
`;

export const FieldGroup = styled.View`
  gap: 8px;
  margin-bottom: 18px;
`;

export const FieldLabel = styled.Text`
  font-family: 'sfProDisplayBold';
  font-size: 13px;
  color: #101828;
`;

export const FieldInputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  border-width: 1px;
  border-color: #e2e8f0;
  border-radius: 14px;
  height: 50px;
  padding-horizontal: 14px;
  gap: 10px;
`;

export const FieldIcon = styled.Image`
  width: 16px;
  height: 18px;
`;

export const FieldInput = styled.TextInput`
  flex: 1;
  font-family: 'sfProDisplayRegular';
  font-size: 14px;
  color: #101828;
`;

export const DayConfigCard = styled.View`
  background-color: #fff8f5;
  border-width: 1px;
  border-color: #f4cbbf;
  border-radius: 16px;
  padding: 16px;
  gap: 14px;
  margin-bottom: 18px;
`;

export const DayConfigHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DayConfigTitleRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const DayConfigIcon = styled.Image`
  width: 16px;
  height: 16px;
`;

export const DayConfigTitle = styled.Text`
  font-family: 'sfProDisplayBold';
  font-size: 14px;
  color: #101828;
`;

export const ChangeDayButton = styled.TouchableOpacity``;

export const ChangeDayText = styled.Text`
  font-family: 'sfProDisplayMedium';
  font-size: 13px;
  color: #c85a32;
`;

export const DayConfigGrid = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const DayConfigCol = styled.View`
  flex: 1;
  gap: 8px;
`;

export const DayConfigInputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  border-width: 1px;
  border-color: #e2e8f0;
  border-radius: 14px;
  height: 48px;
  padding-horizontal: 12px;
  gap: 8px;
`;

export const DayConfigMeta = styled.Text`
  font-family: 'sfProDisplayRegular';
  font-size: 12px;
  color: #64748b;
`;

export const PrimaryButton = styled.TouchableOpacity`
  background-color: #c85a32;
  border-radius: 14px;
  height: 52px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const PrimaryButtonText = styled.Text`
  font-family: 'sfProDisplayBold';
  font-size: 15px;
  color: #ffffff;
`;

export const HelperCaption = styled.Text`
  font-family: 'sfProDisplayRegular';
  font-size: 12px;
  color: #64748b;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 24px;
`;

export const FilterRow = styled.View`
  flex-direction: row;
  gap: 10px;
  margin-bottom: 18px;
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

export const FeaturedCard = styled.View`
  background-color: #ffffff;
  border-radius: 20px;
  border-width: 1px;
  border-color: #e2e8f0;
  overflow: hidden;
  margin-bottom: 28px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.05;
  shadow-radius: 8px;
  elevation: 3;
`;

export const FeaturedImage = styled.Image`
  width: 100%;
  height: 180px;
`;

export const FeaturedContent = styled.View`
  padding: 16px;
  gap: 10px;
`;

export const FeaturedHeaderRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FeaturedTitle = styled.Text`
  font-family: 'sfProDisplayBold';
  font-size: 18px;
  color: #101828;
`;

export const FeaturedRating = styled.Text`
  font-family: 'sfProDisplayBold';
  font-size: 14px;
  color: #d97706;
`;

export const FeaturedSubMeta = styled.Text`
  font-family: 'sfProDisplayRegular';
  font-size: 13px;
  color: #667085;
`;

export const FeaturedDescription = styled.Text`
  font-family: 'sfProDisplayRegular';
  font-size: 13px;
  line-height: 18px;
  color: #475467;
`;

export const BadgeRow = styled.View`
  flex-direction: row;
  gap: 10px;
  margin-vertical: 4px;
`;

export const BadgePill = styled.View`
  border-width: 1px;
  border-color: #e2e8f0;
  border-radius: 20px;
  padding-vertical: 6px;
  padding-horizontal: 14px;
`;

export const BadgeText = styled.Text`
  font-family: 'sfProDisplayRegular';
  font-size: 13px;
  color: #475467;
`;

export const SectionHeaderRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;

export const SectionCount = styled.Text`
  font-family: 'sfProDisplayRegular';
  font-size: 13px;
  color: #667085;
`;

export const PlaceItemCard = styled.View`
  background-color: #ffffff;
  border-radius: 18px;
  border-width: 1px;
  border-color: #f1f5f9;
  padding: 12px;
  margin-bottom: 12px;
  flex-direction: row;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.04;
  shadow-radius: 6px;
  elevation: 2;
`;

export const PlaceItemImage = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 14px;
`;

export const PlaceItemContent = styled.View`
  flex: 1;
  padding-left: 12px;
  gap: 4px;
`;

export const PlaceItemTitle = styled.Text`
  font-family: 'sfProDisplayBold';
  font-size: 15px;
  color: #101828;
`;

export const PlaceItemSub = styled.Text`
  font-family: 'sfProDisplayRegular';
  font-size: 12px;
  color: #667085;
`;

export const PlaceItemMeta = styled.Text`
  font-family: 'sfProDisplayMedium';
  font-size: 12px;
  color: #d97706;
`;

export const PlusButton = styled.TouchableOpacity`
  padding: 4px;
`;

export const PlusIcon = styled.Image`
  width: 36px;
  height: 36px;
`;
