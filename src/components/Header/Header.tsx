import { Budget } from '../Budget'
import { Remaining } from '../Remaining'
import { CustomSelect } from '../Select'
import { Spent } from '../Spent'
import { Title } from '../Title'
import { StyledHeader, WraperTitle } from './styles'

export const Header = () => {
    return (
        <StyledHeader>
            <WraperTitle>
            <Title text="Budget App"></Title>
            <CustomSelect></CustomSelect>
            </WraperTitle>
            <Budget></Budget>
            <Remaining></Remaining>
            <Spent></Spent>
        </StyledHeader>
    )
}
