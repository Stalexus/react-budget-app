import { FC, ReactNode } from "react";
import { BudgetProvider } from "../BudgetContext";
import { CurrencyProvider } from "../CurrencyContext";
import { ExpensesProvider } from "../ExpensesContext";

const providers = [ExpensesProvider, CurrencyProvider, BudgetProvider]

export const AppContextProvider: FC<{children: ReactNode}> = ({
    children,
}) => {
    return <>{providers.reduce((acc, Component) => {
        return <Component>{acc}</Component>
    }, children)}</>;
}