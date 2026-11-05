import styled from "styled-components/native";

export const Header = styled.View`
  padding: 20px 20px 20px 20px;
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

export const ExploreContainer = styled.View`
    display: flex;
    flex-direction: column;
    gap: 22px;
    padding-top: 22px;
`

export const ExploreCategories = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    padding: 0 20px;
`
export const ExploreTitle = styled.Text`
    color: #000;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
export const ExploreAnchor = styled.Text`
    color: #C96440;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
export const CategoriesContainer = styled.View`
    display: flex;
    flex-direction: row;
    padding: 10px 0;
    justify-content: space-evenly;
    align-items: center;
    align-self: stretch;
`

export const GetInspiredContainer = styled.View`
  margin-top: 22px;
  padding: 10px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`

export const GetInspiredBackground = styled.ImageBackground.attrs({
  imageStyle: { borderRadius: 22 }
})`
  padding: 20px 15px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 22px;
  overflow: hidden;
  background-color: #d3d3d3;
`

export const InspireContainer = styled.View`
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 22px;
  background-color: rgba(201, 100, 64, 0.60);
`

export const InspireText = styled.Text`
  color: #FAFAFA;
  font-size: 14px;
  font-weight: 700;
`

export const InspireTitle = styled.Text`
  width: 195px;
  color: #FAFAFA;
  font-size: 24px;
  font-weight: 700;
`

export const SeeRoadMap = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`

export const RoadMapText = styled.Text`
  color: #FAFAFA;
  font-size: 14px;
  font-weight: 600;
`

export const RoadMapIcon = styled.Image`
  width: 24px;
  height: 24px;
`
export const RecommendedContainer = styled.View`
  margin-top: 24px;
  margin-bottom: 30px;
  flex-direction: column;
  gap: 16px;
`

export const RecommendedHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`

export const RecommendedTitle = styled.Text`
  color: #000000;
  font-size: 20px;
  font-weight: 700;
`

export const RecommendedAnchor = styled.Text`
  color: #C96440;
  font-size: 16px;
  font-weight: 500;
`

export const CarouselScroll = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 20,
    paddingRight: 10,
    gap: 16,
  },
})``