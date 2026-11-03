import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 40,
  },
})`
  flex: 1;
  background-color: #fafafa;
`;

export const BrandHeader = styled.View`
  margin-bottom: 24px;
`;

export const BrandLogo = styled.Image`
  width: 190px;
  height: 48px;
`;

export const Title = styled.Text`
  font-family: 'sfProDisplayBold';
  font-size: 32px;
  color: #101828;
  margin-top: 8px;
`;

export const Subtitle = styled.Text`
  font-family: 'sfProDisplayRegular';
  font-size: 16px;
  color: #667085;
  margin-top: 6px;
  margin-bottom: 28px;
`;

export const Form = styled.View`
  gap: 18px;
`;

export const FormGroup = styled.View`
  gap: 8px;
`;

export const Label = styled.Text`
  font-family: 'sfProDisplayRegular';
  font-size: 14px;
  color: #344054;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  height: 54px;
  background-color: #f2f4f7;
  border-width: 1px;
  border-color: #d0d5dd;
  border-radius: 16px;
  padding-horizontal: 16px;
  gap: 12px;
`;

export const InputIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 100%;
  font-family: 'sfProDisplayRegular';
  font-size: 15px;
  color: #101828;
`;

export const SubmitButton = styled.TouchableOpacity`
  height: 54px;
  background-color: #c85a32;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

export const SubmitButtonText = styled.Text`
  font-family: 'sfProDisplayBold';
  font-size: 16px;
  color: #ffffff;
`;

export const DividerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 24px;
  gap: 14px;
`;

export const DividerLine = styled.View`
  flex: 1;
  height: 1px;
  background-color: #94a3b8;
`;

export const DividerText = styled.Text`
  font-family: 'sfProDisplayRegular';
  font-size: 14px;
  color: #64748b;
`;

export const GoogleButton = styled.TouchableOpacity`
  flex-direction: row;
  height: 54px;
  background-color: #f2f4f7;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
`;

export const GoogleIcon = styled.Image`
  width: 16px;
  height: 16px;
`;

export const GoogleButtonText = styled.Text`
  font-family: 'sfProDisplayMedium';
  font-size: 15px;
  color: #1d2939;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 36px;
`;

export const FooterText = styled.Text`
  font-family: 'sfProDisplayRegular';
  font-size: 14px;
  color: #475467;
`;

export const FooterLink = styled.Text`
  font-family: 'sfProDisplayMedium';
  font-size: 14px;
  color: #c85a32;
  text-decoration-line: underline;
`;
