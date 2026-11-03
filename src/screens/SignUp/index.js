import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import brandLogo from '../../assets/icons/brand-logo.png';
import inputUser from '../../assets/icons/input-user.png';
import inputMail from '../../assets/icons/input-mail.png';
import googleIcon from '../../assets/icons/google.png';
import {
  Container,
  BrandHeader,
  BrandLogo,
  Title,
  Subtitle,
  Form,
  FormGroup,
  Label,
  InputWrapper,
  InputIcon,
  Input,
  SubmitButton,
  SubmitButtonText,
  DividerContainer,
  DividerLine,
  DividerText,
  GoogleButton,
  GoogleIcon,
  GoogleButtonText,
  Footer,
  FooterText,
  FooterLink,
} from './style';

const SignUp = ({ onSignUp, onGoogleSignUp, onSignInPress }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (onSignUp) {
      onSignUp({ name, email, password });
    }
  };

  return (
    <Container showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="dark-content" backgroundColor="#fafafa" />

      <BrandHeader>
        <BrandLogo source={brandLogo} resizeMode="contain" />
      </BrandHeader>

      <Title>Seja bem-vindo!</Title>
      <Subtitle>Cadastre-se para continuar explorando</Subtitle>

      <Form>
        <FormGroup>
          <Label>Nome</Label>
          <InputWrapper>
            <InputIcon source={inputUser} resizeMode="contain" />
            <Input
              placeholder="seu nome aqui"
              placeholderTextColor="#98a2b3"
              value={name}
              onChangeText={setName}
            />
          </InputWrapper>
        </FormGroup>

        <FormGroup>
          <Label>E-mail</Label>
          <InputWrapper>
            <InputIcon source={inputMail} resizeMode="contain" />
            <Input
              placeholder="seuemail@exemplo.com"
              placeholderTextColor="#98a2b3"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </InputWrapper>
        </FormGroup>

        <FormGroup>
          <Label>Senha</Label>
          <InputWrapper>
            <InputIcon source={inputMail} resizeMode="contain" />
            <Input
              placeholder="***************"
              placeholderTextColor="#98a2b3"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </InputWrapper>
        </FormGroup>

        <SubmitButton activeOpacity={0.85} onPress={handleRegister}>
          <SubmitButtonText>Cadastrar</SubmitButtonText>
        </SubmitButton>
      </Form>

      <DividerContainer>
        <DividerLine />
        <DividerText>ou continue com</DividerText>
        <DividerLine />
      </DividerContainer>

      <GoogleButton activeOpacity={0.85} onPress={onGoogleSignUp}>
        <GoogleIcon source={googleIcon} resizeMode="contain" />
        <GoogleButtonText>Continuar com Google</GoogleButtonText>
      </GoogleButton>

      <Footer>
        <FooterText>Já tem conta ? </FooterText>
        <FooterLink onPress={onSignInPress}>Entrar</FooterLink>
      </Footer>
    </Container>
  );
};

export default SignUp;
