import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";
import ButtonSignUp from "../../components/ButtonSignUp";
import {
    MainContainer,
    CommingSoonContainer,
    CommingSoonDescription,
    CommingSoonImage,
    CommingSoonMessage,
    CommingSoonTitle,
} from "./style";

export const CommingSoon = ({ heroImage, title, description, onBackPress }) => {
    return (
        <MainContainer>
            <Header
                variant="comeBack"
                title="Em breve"
                onBackPress={onBackPress}
            />

            <CommingSoonContainer>
                <CommingSoonImage source={heroImage} resizeMode="contain" />

                <CommingSoonMessage>
                    <CommingSoonTitle>{title}</CommingSoonTitle>
                    <CommingSoonDescription>{description}</CommingSoonDescription>
                </CommingSoonMessage>

                <ButtonSignUp text={"voltar para o inicio"} />
            </CommingSoonContainer>

            <BottomNav />
        </MainContainer>
    );
};

export default CommingSoon;