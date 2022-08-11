import { useCurrencyContext } from "../../context/CurrencyContext";
import { IExpense } from "../../context/ExpensesContext";
import { DelButton, ExpensesListItemCost, StyledExpensesListItem } from "./styles";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg"

interface IProps {
  expense: IExpense;
  deleteExpense: (id: string) => void;
}

export const ExpensesListItem = ({ expense, deleteExpense }: IProps) => {
  const { currency } = useCurrencyContext();
  const { id, body, cost } = expense;
  return (
    <StyledExpensesListItem id={id}>
      {body}
      <ExpensesListItemCost>{currency.value + cost}</ExpensesListItemCost>
      <DelButton onClick={() => deleteExpense(id)}><CloseIcon/></DelButton>
    </StyledExpensesListItem>
  );
};