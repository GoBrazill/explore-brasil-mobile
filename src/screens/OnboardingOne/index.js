import { Image } from "react-native"
import { ActiveBar, BackgroundImage, Bar, BarWrapper, ContentWrapper, OnboardingButton, OnboardingDesc, OnboardingNav, OnboardingSkip, OnboardingTitle, OnboardingWrapper, TitleWrapper } from "./style"


const OnboardingOne = () => {
    return (
        <BackgroundImage source={require('../../assets/images/onboarding-one-hero.webp')}>
            <OnboardingWrapper>
                <Image source={require('../../assets/icons/logo.png')} />
                <ContentWrapper>
                    <TitleWrapper>
                        <OnboardingTitle>Descubra novos lugares</OnboardingTitle>
                        <OnboardingDesc>Encontre destinos únicos e experiências incríveis por todo o Brasil.</OnboardingDesc>
                    </TitleWrapper>

                    <OnboardingNav>
                        <OnboardingSkip>pular</OnboardingSkip>
                        <OnboardingButton><Image source={require('../../assets/icons/right-arrow.webp')} /></OnboardingButton>
                    </OnboardingNav>

                    <BarWrapper>
                        <ActiveBar></ActiveBar>
                        <Bar></Bar>
                        <Bar></Bar>
                    </BarWrapper>
                </ContentWrapper>
            </OnboardingWrapper>
        </BackgroundImage>

    )
}

export default OnboardingOne