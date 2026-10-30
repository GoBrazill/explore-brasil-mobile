import { Image } from 'react-native'
import { ActiveBar, BackgroundImage, Bar, BarWrapper, ContentWrapper, OnboardingButton, OnboardingDesc, OnboardingNav, OnboardingSkip, OnboardingTitle, OnboardingWrapper, TitleWrapper } from './style'
import logo from '../../assets/icons/logo.png'
import rightArrow from '../../assets/icons/right-arrow.webp'

const Onboarding = ({ backgroundImage, title, desc, activeBar }) => {
    return (
        <BackgroundImage source={backgroundImage}>
            <OnboardingWrapper>
                <Image source={logo} />
                <ContentWrapper>
                    <TitleWrapper>
                        <OnboardingTitle>{title}</OnboardingTitle>
                        <OnboardingDesc>{desc}</OnboardingDesc>
                    </TitleWrapper>

                    <OnboardingNav>
                        <OnboardingSkip>pular</OnboardingSkip>
                        <OnboardingButton><Image source={rightArrow} /></OnboardingButton>
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