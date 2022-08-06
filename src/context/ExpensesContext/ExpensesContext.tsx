import { createContext, FC, ReactNode, useState } from "react";

export const ExpensesContext = createContext({
    expenses: [],
})

const useExpensesValue = () => {
    const [expensesContext, setExpensesContext] = useState();
    return expensesContext;
};

export const ExpensesProvider: FC<{children: ReactNode}> = ({children}) => {
    return <ExpensesContext.Provider value={useExpensesValue()}>
        {children}
        </ExpensesContext.Provider>;
}