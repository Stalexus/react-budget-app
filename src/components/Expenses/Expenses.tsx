import { useExpenseContext } from '../../context';
import { useVisibleExpenses } from '../../hooks/useExpenses';
import { Search } from '../Search';
import { Title } from '../Title';
import { StyledExpenses } from './styles';

export const Expenses = () => {
  const { deleteExpense } = useExpenseContext();
  const { visibleExpenses, searchExpenses } = useVisibleExpenses();
  return (
    <StyledExpenses>
      <Title text="Expenses" />
      <Search searchExpenses={searchExpenses} />
    </StyledExpenses>
  )
}