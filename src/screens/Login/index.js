import { Image } from "react-native"
import { ContinueWithGoogleWrapper, ContinueWithText, ContinueWithWrapper, FormWrapper, GoogleButton, GoogleLogo, GoogleText, Input, InputWrapper, Label, LabelWrapper, Line, Link, LoginWrapper, LogotypeHighlight, LogotypeText, LogotypeWrapper, SignUpLink, SignUpText, SubText, Title, TitleWrapper } from "./style"
import logo from '../../assets/icons/logo.png'
import email from '../../assets/icons/email.webp'
import ButtonSignUp from "../../components/ButtonSignUp"

const Login = () => {
    return (
        <LoginWrapper>
            <LogotypeWrapper >
                <Image source={logo} />
                <LogotypeText>Explore <LogotypeHighlight>Brasil</LogotypeHighlight></LogotypeText>
            </LogotypeWrapper>
            <FormWrapper>
                <TitleWrapper>
                    <Title>Bem-vindo de volta!</Title>
                    <SubText>Entre para continuar explorando</SubText>
                </TitleWrapper>

                <LabelWrapper>
                    <Label>E-mail</Label>

                    <InputWrapper>
                        <Image source={email} />
                        <Input keyboardType="email-address" placeholder="seuemail@exemplo.com" />
                    </InputWrapper>
                </LabelWrapper>

                <LabelWrapper>
                    <Label>Senha</Label>

                    <InputWrapper>
                        <Image source={email} />
                        <Input keyboardType="decimal-pad" placeholder="****************" />
                    </InputWrapper>

                    <Link>Esqueci minha senha</Link>
                </LabelWrapper>
                <ButtonSignUp text={'Entrar'} />
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
                <SignUpText>Ainda não tem conta? <SignUpLink>Cadastre-se</SignUpLink></SignUpText>
            </ContinueWithGoogleWrapper>

        </LoginWrapper>

    )
}

export default Login