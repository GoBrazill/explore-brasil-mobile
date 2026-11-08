import styled from "styled-components/native";

export const Flex1 = styled.View`
    flex: 1;
`

export const ScreenWrapper = styled.View`
    gap: 22px;
    background-color: #F9F9F9;
`

export const ProfileScreenWrapper = styled.View`
    gap: 22px;

    padding: 20px;
    background-color: #F9F9F9;
`

export const ProfileInfoWrapper = styled.View`
    align-items: center;
    gap: 22px;

    padding: 60px 40px 40px 40px;

    shadow-color: #121212;
    shadow-offset: 0px 4px;
    shadow-opacity: 0.25;
    shadow-radius: 5.7px;

    elevation: 10;

    border-radius: 0 0 22px 22px;
    background-color: #FAFAFA;
`

export const ProfilePicWrapper = styled.View`
    position: relative;
`

export const ProfilePic = styled.Image`
    width: 100px;
    height: 100px;

    shadow-color: #121212;
    shadow-offset: 0px 4px;
    shadow-opacity: 0.25;
    shadow-radius: 5.7px;

    elevation: 10;

    border-radius: 50px;
`

export const PicIconWrapper = styled.View`
    position: absolute;
    right: -15px;
    bottom: -10px;

    width: 48px;
    height: 48px;
    padding: 12px;

    shadow-color: #121212;
    shadow-offset: 0px 4px;
    shadow-opacity: 0.25;
    shadow-radius: 5.7px;

    elevation: 10;

    border-radius: 50px;
    border: 1px solid #FAFAFA;
    background-color: #C96440;
`

export const PicIcon = styled.Image`
    width: 20px;
    height: 20px;
`

export const NameWrapper = styled.View`
    align-items: center;
    gap: 10px;
`

export const ProfileName = styled.Text`
    font-size: 36px;
    font-family: 'interBold';
`

export const ProfileEmail = styled.Text`
    font-size: 16px;
    color: #536379;
    font-family: 'interRegular';
`

export const StatsWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const Stat = styled.View`
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const StatTitle = styled.Text`
    font-size: 20px;
    color: #191E24;
    font-family: 'interBold';
`

export const StatDesc = styled.Text`
    font-size: 14px;
    color: #62748E;
`

export const VerticalLine = styled.View`
    width: 2px;
    height: 40px;

    background-color: rgba(201, 100, 64, 0.2);
`

export const ProfTitle = styled.Text`
    font-size: 24px;
    color: #2A313C;
    font-family: 'interSemiBold';
`

export const ProfileCard = styled.View`
    justify-content: center;
    gap: 22px;

    width: 100%;
    padding: 10px;

    shadow-color: #121212;
    shadow-offset: 0px 4px;
    shadow-opacity: 0.25;
    shadow-radius: 5.7px;

    elevation: 10;

    border-radius: 10px;
    background-color: #F9F9F9;
`

export const ProfileCardWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;

    border-bottom-width: 1px;
    border-bottom-color: rgba(91, 100, 113, 0.20);
`

export const CardIconWrapper = styled.View`
    padding: 10px;

    border-radius: 10px;
    background-color: rgba(201, 100, 64, 0.20); 
`

export const CardIcon = styled.Image`
    width: 24px;
    height: 24px;
`

export const TitleWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 8px;
`

export const CardTitle = styled.Text`
    font-size: 16px;
    color: #2A313C;
    font-family: 'interMedium';
`

export const VersionText = styled.Text`
    align-self: center;

    font-size: 14px;
    color: #191E24;
    font-family: 'interRegular';
`

export const ExitAccBtn = styled.TouchableOpacity`
    align-self: center;
    align-items: center;

    width: 80%;
    padding: 10px 30px;

    border-radius: 10px;
    border: 1px solid rgba(219, 44, 52, 0.20);
`

export const ExitAccBtnTxt = styled.Text`
    font-size: 16px;
    color: #DB2C34;
    font-family: 'interMedium';
`