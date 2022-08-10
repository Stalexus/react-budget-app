import { useCurrencyContext } from '../../context';
import { useSpent } from '../../hooks/useSpent';
import { Amount } from '../Badget/styles'
import { StyledSpent } from './styles'

export const Spent = () => {
  const spent = useSpent();
  const { currency } = useCurrencyContext();
  return (
    <StyledSpent>
      <Amount>Spent so far: {spent + currency}</Amount>
    </StyledSpent>
  )
}
