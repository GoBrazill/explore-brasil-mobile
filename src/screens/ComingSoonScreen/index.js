import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";
import ButtonSignUp from "../../components/ButtonSignUp";
import HeroImage from '../../assets/images/coming-soon-hero-image.webp'
import {
    MainContainer,
    CommingSoonContainer,
    CommingSoonDescription,
    CommingSoonImage,
    CommingSoonMessage,
    CommingSoonTitle,
} from "./style";
import { router } from "expo-router";

export const CommingSoon = () => {
    return (
        <MainContainer>
            <Header
                variant="comeBack"
                title="Em breve"
            />

            <CommingSoonContainer>
                <CommingSoonImage source={HeroImage} resizeMode="contain" />

                <CommingSoonMessage>
                    <CommingSoonTitle>Tem novidade no caminho</CommingSoonTitle>
                    <CommingSoonDescription>Estamos preparando novas experiências para a sua próxima viagem. Em breve, você poderá explorar por aqui.</CommingSoonDescription>
                </CommingSoonMessage>

                <ButtonSignUp text={"voltar para o inicio"} event={() => {router.push('/')}} />
            </CommingSoonContainer>

            <BottomNav activeTab="comming-soon" />
        </MainContainer>
    );
};

export default CommingSoon;