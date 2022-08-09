import { Badget } from '../Badget'
import { CardRemaining } from '../Remaining'
import { CustomSelect } from '../Select'
import { Title } from '../Title'
import { StyledHeader, WraperTitle } from './styles'

export const Header = () => {
    return (
        <StyledHeader>
            <WraperTitle>
            <Title text="Budget App"></Title>
            <CustomSelect></CustomSelect>
            </WraperTitle>
            <Badget></Badget>
            <CardRemaining></CardRemaining>
        </StyledHeader>
    )
}
