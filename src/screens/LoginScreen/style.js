import styled from "styled-components/native";

export const LoginWrapper = styled.View`
    gap: 22px;
    width: 100%;
    padding: 50px 20px 20px 20px;
    background-color: #FAFAFA;
`


export const LogotypeWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 5px;

    width: 100%;
`

export const LogotypeText = styled.Text`
    font-size: 28px;
    font-family: 'fugazOne';
`

export const Icon = styled.Image`
    width: 24px;
    height: 24px;
`

export const LogotypeHighlight = styled(LogotypeText)`
    color: #C96440;
`

export const TitleWrapper = styled.View`
    gap: 6px;
`

export const Title = styled.Text`
    font-size: 30px;
    font-family: 'interBold';
`

export const SubText = styled.Text`
    font-size: 18px;
    color: #62748E;
    font-family: 'interRegular';
`

export const FormWrapper = styled.View`
    gap: 22px;
`

export const LabelWrapper = styled.View`
    justify-content: end;
    width: 100%;
    gap: 10px;
`

export const Label = styled.Text`
    font-size: 16px;
    color: #314158;
    font-family: 'sfProDisplayRegular';
    `

export const InputWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    
    padding: 10px 20px;
    
    border: 1px solid #AEA4A4;
    border-radius: 22px;
    background-color: #F2F2F2;
    gap: 8px;
    `

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#90A1B9'
})`
    color: #314158;
`

export const Link = styled.Text`
    text-align: right;

    font-size: 16px;
    
    text-decoration: underline;
    color: #90A1B9;
    font-family: 'sfProDisplayRegular';
`

export const ContinueWithGoogleWrapper = styled.View`
    align-items: center;
    gap: 40px;
`

export const ContinueWithWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    width: 100%;
    gap: 30px;
`

export const Line = styled.View`
    flex-grow: 1;

    height: 2px;
    
    background-color: #62748E;
`

export const ContinueWithText = styled.Text`
    font-size: 16px;

    color: #62748E;
    font-family: 'sfProDisplayRegular';
`

export const GoogleButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 10px;

    width: 100%;
    padding: 15px 20px;
    
    border-radius: 22px;
    border: 1px solid #AEA4A4;
    background-color: #F2F2F2;
`

export const GoogleLogo = styled.Text`
    font-size: 18px;
    color: #C96440;
    line-height: 22px;
    font-family: 'sfProDisplayBold';
`

export const GoogleText = styled(GoogleLogo)`
    color: #1F1F1F;
    font-family: 'googleSansMedium';
`

export const SignUpText = styled(GoogleText)`
    color: #62748E;
`

export const SignUpLink = styled(GoogleText)`
    color: #C96440;
    text-decoration: underline;
`