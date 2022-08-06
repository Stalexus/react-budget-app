import { createContext, FC, ReactNode, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

interface IExpense {
    id: string;
    body: string;
    cost: number;
}

interface IExpenseContext {
    expenses: IExpense[];
    setExpenses: (expenses: IExpense) => void;
    deleteExpenses: () => void;
}

const ExpensesContext = createContext<IExpenseContext>({
    expenses: [],
    setExpenses: (value: IExpense) => {},
    deleteExpenses: () => {}
})

const useExpensesValue = () => {
    const [expensesContext, setExpensesContext] = useState<IExpenseContext>(
        () => {
            return {
                expenses: [{
                    id: uuidv4(),
                    body: 'null',
                    cost: 100,
                }],
                setExpenses: (value: IExpense) => {
                    setExpensesContext(ctx => ({
                        ...ctx,
                        expenses: [...ctx.expenses, value],
                    }));
                },
                deleteExpenses: () => {
                    setExpensesContext(ctx => ({
                        ...ctx,
                        expenses: [],
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