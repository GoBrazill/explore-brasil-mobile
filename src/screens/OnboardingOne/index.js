import Onboarding from "../../components/Onboarding"


const OnboardingOne = () => {
    return (
            <Onboarding 
            backgroundImage={require('../../assets/images/onboarding-one-hero.webp')}
            title={'Descubra novos lugares'} 
            desc={'Encontre destinos únicos e experiências incríveis por todo o Brasil.'}
            activeBar={1}
            />
    )
}

export default OnboardingOne