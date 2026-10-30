import styled from "styled-components/native";

export const BackgroundImage = styled.ImageBackground`
    width: 100%;
    height: 100%;    
`

export const OnboardingWrapper = styled.View`
    justify-content: space-between;

    width: 100%;
    height: 100%;
    padding: 20px;
`

export const ContentWrapper = styled.View`
    gap: 22px;
`

export const TitleWrapper = styled.View`
    gap: 8px;
`

export const OnboardingTitle = styled.Text`
    font-size: 32px;

    font-family: 'sfProDisplayBold';
    color: #fff;
`

export const OnboardingDesc = styled.Text`
    font-family: 'sfProDisplayRegular';
    
    font-size: 16px;
    color: #fff;
`

export const OnboardingNav = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
`

export const OnboardingSkip = styled.Text`
    font-size: 16px;

    color: #fff;
    text-decoration: underline;
    font-family: 'sfProDisplayRegular';
`

export const OnboardingButton = styled.View`
    padding: 8px;

    border: 1px solid #fff;
    border-radius: 60px;
`

export const BarWrapper = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;

    width: 100%;
`

export const ActiveBar = styled.View`
    width: 50px;
    height: 10px;
    border-radius: 37px;

    background-color: #fff;
`

export const Bar = styled.View`
    width: 30px;
    height: 10px;
    border-radius: 37px;

    background-color: #BAB8B8;
`