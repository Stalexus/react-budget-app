import { createContext, FC, ReactNode, useContext, useState } from "react";
import { createTextChangeRange } from "typescript";
import { v4 as uuidv4 } from 'uuid';

export interface IExpense {
    id: string;
    body: string;
    cost: number;
}

interface IExpenseContext {
    expenses: IExpense[];
    setExpenses: (expenses: IExpense) => void;
    deleteExpense: (id: string) => void;
}

const ExpensesContext = createContext<IExpenseContext>({
    expenses: [],
    setExpenses: (value: IExpense) => { },
    deleteExpense: (id: string) => { }
})

const useExpensesValue = () => {
    const [expensesContext, setExpensesContext] = useState<IExpenseContext>(
        () => {
            return {
                expenses: [],
                setExpenses: (value: IExpense) => {
                    setExpensesContext(ctx => ({
                        ...ctx,
                        expenses: [...ctx.expenses, value],
                    }));
                },
                deleteExpense: (id: string) => {
                    setExpensesContext(ctx => ({
                        ...ctx,
                        expenses: ctx.expenses.filter((expence) => expence.id !== id),
                    }))
                }
            };
        }
    );
    return expensesContext;
};

export const useExpenseContext = () => useContext<IExpenseContext>(ExpensesContext)

export const ExpensesProvider: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <ExpensesContext.Provider value={useExpensesValue()}>
            {children}
        </ExpensesContext.Provider>
    );
};