import Onboarding from "../../components/Onboarding"
import onboardingThreeHero from '../../assets/images/onboarding-three-hero.webp'

const OnboardingThreeScreen = () => {
    return (
        <Onboarding
        backgroundImage={onboardingThreeHero}
        title={'Crie o roteiro perfeito'}
        desc={'Organize cada dia da viagem e aproveite cada momento.'}
        activeBar={3}
        />
    )
}

export default OnboardingThreeScreen