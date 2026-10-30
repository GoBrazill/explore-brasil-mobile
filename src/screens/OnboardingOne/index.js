import Onboarding from "../../components/Onboarding"
import OnboardingOneHero from '../../assets/images/onboarding-one-hero.webp'


const OnboardingOne = () => {
    return (
            <Onboarding 
            backgroundImage={OnboardingOneHero}
            title={'Descubra novos lugares'} 
            desc={'Encontre destinos únicos e experiências incríveis por todo o Brasil.'}
            activeBar={1}
            />
    )
}

export default OnboardingOne