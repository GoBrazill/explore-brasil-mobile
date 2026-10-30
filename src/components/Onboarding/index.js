import { Image } from 'react-native'
import { ActiveBar, BackgroundImage, Bar, BarWrapper, ContentWrapper, OnboardingButton, OnboardingDesc, OnboardingNav, OnboardingSkip, OnboardingTitle, OnboardingWrapper, TitleWrapper } from './style'


const Onboarding = ({ backgroundImage, title, desc, activeBar }) => {
    return (
        <BackgroundImage source={backgroundImage}>
            <OnboardingWrapper>
                <Image source={require('../../assets/icons/logo.png')} />
                <ContentWrapper>
                    <TitleWrapper>
                        <OnboardingTitle>{title}</OnboardingTitle>
                        <OnboardingDesc>{desc}</OnboardingDesc>
                    </TitleWrapper>

                    <OnboardingNav>
                        <OnboardingSkip>pular</OnboardingSkip>
                        <OnboardingButton><Image source={require('../../assets/icons/right-arrow.webp')} /></OnboardingButton>
                    </OnboardingNav>

                    <BarWrapper>
                        {[1, 2, 3].map((barIndex) => (
                            barIndex === activeBar ? <ActiveBar key={barIndex} /> : <Bar key={barIndex} />
                        ))}        
                    </BarWrapper>
                </ContentWrapper>
            </OnboardingWrapper>
        </BackgroundImage>
    )
}

export default Onboarding