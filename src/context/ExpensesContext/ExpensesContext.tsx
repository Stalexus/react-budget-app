import { createContext, FC, ReactNode, useContext, useState } from "react";

export interface IExpense {
    id: string;
    body: string;
    cost: number;
}

interface IExpenseContext {
    expenses: IExpense[];
    addNewExpense: (value: IExpense) => void;
    removeExpense: (id: string) => void;
}

const ExpensesContext = createContext<IExpenseContext>({
    expenses: [],
    addNewExpense: (value: IExpense) => { },
    removeExpense: (id: string) => { },
});

const useExpenseValue = () => {
    const [expensesContext, setExpensesContext] = useState<IExpenseContext>(
        () => {
            return {
                expenses: [],
                addNewExpense: (expense) => {
                    setExpensesContext((previousContext) => ({
                        ...previousContext,
                        expenses: [...previousContext.expenses, { ...expense }],
                    }));
                },

                removeExpense: (id) => {
                    setExpensesContext((previousContext) => ({
                        ...previousContext,
                        expenses: [...previousContext.expenses].filter(
                            (expense) => expense.id !== id
                        ),
                    }));
                },
            };
        }
    );

    return expensesContext;
};


export const useExpenseContext = () => useContext<IExpenseContext>(ExpensesContext)

export const ExpensesProvider: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <ExpensesContext.Provider value={useExpenseValue()}>
            {children}
        </ExpensesContext.Provider>
    );
};