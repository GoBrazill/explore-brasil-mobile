import { Image } from 'react-native'
import { ActiveBar, 
    BackgroundImage, 
    Bar, 
    BarWrapper, 
    ContentWrapper, 
    OnboardingButton, 
    OnboardingDesc, 
    OnboardingNav, 
    OnboardingSkip, 
    OnboardingTitle, 
    OnboardingWrapper, 
    TitleWrapper 
} from './style'
import logo from '../../assets/icons/logo.png'
import arrowRight from '../../assets/icons/arrow-right.webp'

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
                        <OnboardingButton><Image source={arrowRight} /></OnboardingButton>
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