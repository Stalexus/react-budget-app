import { FC, ReactNode } from "react";
import { ExpensesProvider } from "../ExpensesContext";

const providers = [ExpensesProvider]

export const AppContextProvider: FC<{children: ReactNode}> = ({
    children,
}) => {
    return <>{providers.reduce((acc, Component) => {
        return <Component>{acc}</Component>
    }, children)}</>;
}