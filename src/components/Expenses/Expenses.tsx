import { useExpenseContext } from '../../context';
import { useVisibleExpenses } from '../../hooks/useExpenses';
import { ExpensesList } from '../ExpensesList';
import { Search } from '../Search';
import { Title } from '../Title';
import { StyledExpenses } from './styles';

export const Expenses = () => {
  const { removeExpense } = useExpenseContext();
  const { visibleExpenses, searchExpenses } = useVisibleExpenses();
  return (
    <StyledExpenses>
      <Title text="Expenses" />
      <Search searchExpenses={searchExpenses} />
      <ExpensesList
        deleteExpense={removeExpense}
        visibleExpenses={visibleExpenses}
      />
    </StyledExpenses>
  )
}