import { useEffect, useState } from "react";
import { useExpenseContext } from "../context";
import { useBudgetContext } from "../context";

export const useRemaining = () => {
  const { budget } = useBudgetContext();
  const { expenses } = useExpenseContext();
  const [remaining, setRemaining] = useState<number>((): number => {
    if (expenses) {
      const totalExpenses = expenses.reduce((acc, expense) => {
        return (acc += expense.cost);
      }, 0);
      return budget - totalExpenses;
    } else {
      return budget;
    }
  });

  useEffect(() => {
    setRemaining(() => {
      if (expenses) {
        const totalExpenses = expenses.reduce((acc, expense) => {
          return (acc += expense.cost);
        }, 0);
        return budget - totalExpenses;
      } else {
        return budget;
      }
    });
  }, [budget, expenses]);

  return remaining;
};