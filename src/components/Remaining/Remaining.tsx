import { useCurrencyContext } from '../../context';
import { useRemaining } from '../../hooks/useRemaning';
import { Amount } from '../Badget/styles'
import { StyledRemaining } from './styles'

export const Remaining = () => {
  const { currency } = useCurrencyContext();
  const remaining = useRemaining();
  return (
    <StyledRemaining isOverspend={remaining < 0}>
        <Amount> {remaining < 0
          ? `Overspending: ${currency + remaining * -1}`
          : `Remaining: ${currency + remaining}`}</Amount>
    </StyledRemaining>
  )
}