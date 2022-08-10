import { createContext, FC, ReactNode, useContext, useState } from "react";

interface IBudgetContext {
    budget: number;
    changeBudgetValue: (value: number) => void;
    addBudgetValue: (value: number) => void;
    takeBudgetValue: (value: number) => void;
}

export const BudgetContext = createContext<IBudgetContext>({
    budget: 0,
    changeBudgetValue: (value: number) => { },
    addBudgetValue: (value: number) => { },
    takeBudgetValue: (value: number) => { },
});

const useBudgetValue = () => {
    const [budgetValue, setBadgetValue] = useState<IBudgetContext>(() => ({
        budget: 0,
        changeBudgetValue: (value: number) => {
            setBadgetValue((ctx) => {
                return {
                    ...ctx,
                    budget: value,
                };
            });
        },
        addBudgetValue: (value: number) => {
            setBadgetValue((ctx) => {
                return {
                    ...ctx,
                    budget: ctx.budget + value,
                };
            });
        },
        takeBudgetValue: (value: number) => {
            setBadgetValue((ctx) => {
                return {
                    ...ctx,
                    budget: ctx.budget - value,
                };
            });
        },
    }));
    return budgetValue;
};

export const useBudgetContext = () => useContext<IBudgetContext>(BudgetContext);

export const BudgetProvider: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <BudgetContext.Provider value={useBudgetValue()}>
            {children}
        </BudgetContext.Provider>
    );
};