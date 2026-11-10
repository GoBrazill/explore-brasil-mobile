import { Alert, Image } from "react-native"
import { ContinueWithGoogleWrapper, ContinueWithText, ContinueWithWrapper, FormWrapper, GoogleButton, GoogleLogo, GoogleText, Icon, Input, InputWrapper, Label, LabelWrapper, Line, Link, LoginWrapper, LogotypeHighlight, LogotypeText, LogotypeWrapper, SignUpLink, SignUpText, SubText, Title, TitleWrapper } from "./style"
import logo from '../../assets/icons/logo.png'
import Email from '../../assets/icons/email-icon.webp'
import Padlock from '../../assets/icons/padlock-icon.webp'
import ButtonSignUp from "../../components/ButtonSignUp"
import { useState } from "react"
import * as SecureStore from 'expo-secure-store';
import { router } from "expo-router"

const LoginScreen = () => {

    const user = {
        name: 'teste',
        email: 'teste@gmail.com',
        password: '12345'
    }

    // 2. Add state for the input fields
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // 3. Create the login handler
    const handleLogin = async () => {
        if (email.toLowerCase() === user.email && password === user.password) {
            Alert.alert("Sucesso!", `Bem-vindo, ${user.name}!`);
            try {
                await SecureStore.setItemAsync(
                    'user_sesion',
                    JSON.stringify({ name: user.name, email: user.email, password: user.password })
                    
                )
                router.replace('/')

            }
            catch (err) {
                Alert.alert('erro', 'paia isso daí')
            }
        } else {
            Alert.alert("Erro", "E-mail ou senha incorretos.");
        }
    };


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
                        <Icon source={Email} />
                        <Input
                            keyboardType="email-address"
                            placeholder="seuemail@exemplo.com"
                            value={email}
                            onChangeText={setEmail} />
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
                            value={password}
                            onChangeText={setPassword}
                        />
                    </InputWrapper>

                    <Link onPress={() => {router.push('/comming-soon')}}>Esqueci minha senha</Link>
                </LabelWrapper>
                <ButtonSignUp text={'Entrar'} event={handleLogin} />
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
                <SignUpText>Ainda não tem conta? <SignUpLink onPress={router.push('/sign-up')}>Cadastre-se</SignUpLink></SignUpText>
            </ContinueWithGoogleWrapper>

        </LoginWrapper>

    )
}

export default LoginScreen