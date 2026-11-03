import Onboarding from "../../components/Onboarding"
import OnboardingTwoHero from '../../assets/images/onboarding-two-hero.webp'


const OnboardingTwo = () => {
    return (
            <Onboarding 
            backgroundImage={OnboardingTwoHero}
            title={'Explore com o mapa'} 
            desc={'Navegue com facilidade e encontre atrações perto de você.'}
            activeBar={2}
            />
    )
}

export default OnboardingTwo