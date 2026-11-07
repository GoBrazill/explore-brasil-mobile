import styled from "styled-components/native";

export const StyledView = styled.View`
    align-items: center;
`

export const BackgroundImage = styled.ImageBackground`    
    width: 100%;
    height: 300px;

    background-color: gray;
`

export const IconWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;

    padding: 50px 20px 20px 20px;
`

export const IconCircle = styled.View`
    justify-content: center;
    align-items: center;

    padding: 12px;
    
    border-radius: 50px;
    background-color: #C96440;
`

export const IconL = styled.Image`
    width: 28px;
    height: 28px;
`
export const ArrowLeft = styled.Image`
    width: 28px;
    height: 28px;
    transform: rotate(180deg);
`

export const FavoriteWrapper = styled.View`
    flex-direction: row;
    gap: 10px;
`

export const PlaceWrapper = styled.View`
    gap: 20px;

    padding: 20px;

    border-radius: 22px;
    background-color: #F2F2F2;
    transform: translateY(-30px);
`

export const Gap22 = styled.View`
    gap: 22px;
`

export const TitleWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const PlaceTitle = styled.Text`
    font-size: 30px;
    font-family: 'interBold';
`

export const RatingWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 4px;
`

export const Gap8 = styled.View`
    gap: 8px;
`

export const RatingText = styled.Text`
    font-size: 16px;
    font-family: 'interRegular';
`

export const RatingIcon = styled.Image`
    width: 16px;
    height: 16px;
`

export const LocationWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 6px;
`

export const Icon = styled.Image`
    width: 24px;
    height: 24px;
`

export const PlaceLocation = styled.Text`
    font-size: 20px;
    color: #2E3642;
    font-family: 'interMedium';
`

export const ChipWrapper = styled.View`
    flex-direction: row;
    gap: 10px;
`

export const Chip = styled.View`
    padding: 2px 10px;

    border-radius: 22px;
    border: 1px solid rgba(201, 100, 64, 0.6);
    background-color: #F9F9F9;
`

export const ChipText = styled.Text`
    font-size: 16px;
    color: #C96440;
    font-family: 'interMedium';
`

export const Gap12 = styled.View`
    gap: 12px;
`

export const AboutWrapper = styled.View`
    gap: 8px;
`

export const PlaceSubTitle = styled.Text`
    font-size: 20px;
    font-family: 'interBold';
`

export const PlaceDesc = styled.Text`
    font-size: 14px;
    font-family: 'interRegular';
`

export const ReadMoreBtn = styled.Text`
    font-size: 14px;
    color: #C96440;
    font-family: 'interRegular';    
`

export const AvailableWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding:  10px 20px;

    border-radius: 22px;
    background-color: #FAFAFA;
`

export const TimeWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

export const AvailableTitle = styled.Text`
    font-size: 14px;
    font-family: 'interBold';
`

export const AvailableDesc = styled.Text`
    font-size: 14px;
    font-family: 'interLight';
`

export const AvailableBtn = styled.Text`
    font-size: 14px;
    color: #C96440;
    font-family: 'interSemiBold';
`

export const SecondaryBtn = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;

    width: 340px;
    padding: 15px 20px;
    
    border-radius: 12px;
    background-color: #C96440;
`

export const BtnText = styled.Text`
    font-size: 16px;
    color: #FAFAFA;
    font-family: 'interSemiBold';
`