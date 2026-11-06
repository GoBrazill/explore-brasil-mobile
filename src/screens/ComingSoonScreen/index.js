import { Image, Pressable, View, Text } from "react-native"
import Header from "../../components/Header"
import BottomNav from "../../components/BottomNav";
import ButtonSignUp from "../../components/ButtonSignUp";
import { CommingSoonContainer, CommingSoonDescription, CommingSoonImage, CommingSoonMessage, CommingSoonTitle } from "./style";


export const CommingSoon = ({ heroImage, title, description }) => {
    return (
        <View>
            <Header title={"Em breve"} />
            <CommingSoonContainer>
                <CommingSoonImage source={heroImage} />
                <CommingSoonMessage>
                    <CommingSoonTitle>{title}</CommingSoonTitle>
                    <CommingSoonDescription>{description}</CommingSoonDescription>
                </CommingSoonMessage>
                <ButtonSignUp text={"voltar para o inicio"}/>
            </CommingSoonContainer>
            <BottomNav/>
        </View>
    )
}

export default CommingSoon;