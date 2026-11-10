import { Image } from "react-native"
import { ContinueWithGoogleWrapper, ContinueWithText, ContinueWithWrapper, FormWrapper, GoogleButton, GoogleLogo, GoogleText, Icon, Input, InputWrapper, Label, LabelWrapper, Line, Link, LoginWrapper, LogotypeHighlight, LogotypeText, LogotypeWrapper, SignUpLink, SignUpText, SubText, Title, TitleWrapper } from "./style"
import logo from '../../assets/icons/logo.png'
import Email from '../../assets/icons/email-icon.webp'
import Padlock from '../../assets/icons/padlock-icon.webp'
import Name from '../../assets/icons/name-icon.webp'
import ButtonSignUp from "../../components/ButtonSignUp"
import { router } from "expo-router"

const LoginScreen = () => {

    return (
        <LoginWrapper>
            <LogotypeWrapper >
                <Image source={logo} />
                <LogotypeText>Explore <LogotypeHighlight>Brasil</LogotypeHighlight></LogotypeText>
            </LogotypeWrapper>
            <FormWrapper>
                <TitleWrapper>
                    <Title>Seja bem-vindo!</Title>
                    <SubText>Cadastre-se para continuar explorando</SubText>
                </TitleWrapper>

                <LabelWrapper>
                    <Label>Nome</Label>

                    <InputWrapper>
                        <Icon source={Name} />
                        <Input
                            keyboardType="default"
                            placeholder="seu nome aqui"
                        />
                    </InputWrapper>
                </LabelWrapper>
                <LabelWrapper>
                    <Label>E-mail</Label>
                    <InputWrapper>
                        <Icon source={Email} />
                        <Input
                            keyboardType="email-address"
                            placeholder="seuemail@exemplo.com"
                        />
                    </InputWrapper>
                </LabelWrapper>

                <LabelWrapper>
                    <Label>Senha</Label>

                    <InputWrapper>
                        <Icon source={Padlock} />
                        <Input
                            keyboardType="default"
                            placeholder="****************"
                            secureTextEntry={true}
                        />
                    </InputWrapper>

                </LabelWrapper>
                <ButtonSignUp text={'Cadastrar'} />
            </FormWrapper>

            <ContinueWithGoogleWrapper>
                <ContinueWithWrapper>
                    <Line />
                    <ContinueWithText>ou continue com</ContinueWithText>
                    <Line />
                </ContinueWithWrapper>

                <GoogleButton>
                    <GoogleLogo>G</GoogleLogo>
                    <GoogleText>Continuar com Google</GoogleText>
                </GoogleButton>
                <SignUpText>Ainda não tem conta? <SignUpLink on>Cadastre-se</SignUpLink></SignUpText>
            </ContinueWithGoogleWrapper>

        </LoginWrapper >

    )
}

export default LoginScreen