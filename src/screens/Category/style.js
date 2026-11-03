import styled from "styled-components/native";
import { BlurView } from "expo-blur";

export const CategoryView = styled.View`
    gap: 36px;

    padding: 0 20px;
`

export const Grid = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    gap: 22px;

    width: 100%;
    height: 100%;
`

export const BackgroundImage = styled.ImageBackground.attrs({
    borderRadius: 22
})`
    position: absolute;
    width: 100%;
    height: 100%;
    
    `

export const LargeCard = styled.View`
    width: 100%;
    height: 200px;
    justify-content: flex-end;
    
    border-radius: 22px;
`

export const SmallCard = styled.View`    
    justify-content: center;

    width: ${(props) => props.cardWidth}px;
    height: 120px;

    border-radius: 22px;
`

export const ContentWrapperB = styled.View`
    align-items: flex-start;
    gap: 4px;
    padding: 22px 18px;
`

export const ContentWrapperS = styled.View`
    align-items: flex-start;
    gap: 4px;
    padding: 10px;
`

export const CardIcon = styled(BlurView).attrs({
    tint: 'dark',
    intensity: 35,
})`
    overflow: hidden;
    
    padding: 5px;
    
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    background-color: rgba(255, 255, 255, 0.6); 
`

export const Icon = styled.Image`
    width: 24px;
    height: 24px;
`

export const CardTitle = styled.Text`
    font-size: 16px;
    color: #fff;
    font-family: 'sfProDisplayBold';
`

export const CardDesc = styled.Text`
    font-size: 11px;
    color: #fff;
    font-family: 'interMedium';
`