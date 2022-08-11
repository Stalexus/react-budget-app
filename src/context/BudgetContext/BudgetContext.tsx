import { createContext, FC, ReactNode, useContext, useState } from "react";

interface IBudgetContext {
    budget: number;
    editBudgetValue: (value: string) => void;
}

export const BudgetContext = createContext({
    budget: 0,
    editBudgetValue: (value: string) => { },
});

const useBudgetValue = () => {
    const [budgetContext, setBudgetContext] = useState<IBudgetContext>(() => {
        return {
            budget: 0,

            editBudgetValue: (value: string) => {
                setBudgetContext((previousContext) => ({
                    ...previousContext,
                    budget: Number(value),
                }));
            },
        };
    });

    return budgetContext;
};

export const useBudgetContext = () => {
    return useContext<IBudgetContext>(BudgetContext);
};

export const BudgetProvider: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <BudgetContext.Provider value={useBudgetValue()}>
            {children}
        </BudgetContext.Provider>
    );
};