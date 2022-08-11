import { createContext, FC, ReactNode, useContext, useState } from "react";
import { ICurrencyOption } from "../../types";
import { Currency } from "../../config/currency";



interface ICurrencyContext {
    currency: ICurrencyOption;
    setCurrency: (value: ICurrencyOption) => void;
}

export const CurrencyContext = createContext<ICurrencyContext>({
    currency: { value: Currency.USD, label: "USD" },
    setCurrency: (value: ICurrencyOption) => {},
});

const useCurrencyValue = () => {
    const [currencyContext, setCurrencyContext] = useState<ICurrencyContext>(
        () => {
            return {
                currency: { value: Currency.USD, label: "USD" },
                setCurrency: (value: ICurrencyOption) => {
                    setCurrencyContext((previousContext) => ({
                        ...previousContext,
                        currency: value,
                    }));
                },
            };
        }
    );
    return currencyContext;
};

export const useCurrencyContext = () => {
    return useContext<ICurrencyContext>(CurrencyContext);
};

export const CurrencyProvider: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <CurrencyContext.Provider value={useCurrencyValue()}>
            {children}
        </CurrencyContext.Provider>
    );
};