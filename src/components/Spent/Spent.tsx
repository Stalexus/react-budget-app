import { useCurrencyContext } from "../../context/CurrencyContext";
import { IExpense, useExpenseContext } from "../../context/ExpensesContext";
import { Amount } from "../Budget/styles";
import { StyledSpent } from "./styles";

export const Spent = () => {
  const { currency } = useCurrencyContext();
  const { expenses } = useExpenseContext();

  const spent: number = [...expenses].reduce(
    (spent: number, expense: IExpense): number => {
      return expense ? (spent += Number(expense.cost)) : spent;
    },
    0
  );

  return (
    <StyledSpent>
      <Amount>{`Spent: ${currency.value}${spent}`}</Amount>
    </StyledSpent>
  );
};