import { ArrowIcon, HeaderTitle, StyledView } from "./style"
import arrowLeft from '../../assets/icons/arrow-left.webp'

const Header = ({ title }) => {
    return (
        <StyledView>
            <ArrowIcon source={arrowLeft} />
            <HeaderTitle>{title}</HeaderTitle>
        </StyledView>
    )
}

export default Header