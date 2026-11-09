import { ButtonText, StyledButton } from "./style";

const ButtonSignUp = ({text, event}) => {
    return (
        <StyledButton onPress={event}><ButtonText>{text}</ButtonText></StyledButton>
    )
}

export default ButtonSignUp