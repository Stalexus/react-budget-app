import { createContext, FC, ReactNode, useContext, useState } from "react";
import { Currency } from "../../config/currency";



interface ICurrencyContext {
    currency: string;
    setCurrency: (value: Currency) => void;
}

export const CurrencyContext = createContext<ICurrencyContext>({
    currency: Currency.USD,
    setCurrency: (value: Currency) => { },
});

const useCurrencyValue = () => {
    const [currencyValue, setCurrencyValue] = useState<ICurrencyContext>(() => {
        return {
            currency: Currency.USD,
            setCurrency: (value: Currency) => {
                setCurrencyValue((ctx) => {
                    return {
                        ...ctx,
                        currency: value,
                    };
                });
            },
        };
    });

    return currencyValue;
};

export const useCurrencyContext = () =>
    useContext<ICurrencyContext>(CurrencyContext);

export const CurrencyProvider: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <CurrencyContext.Provider value={useCurrencyValue()}>
            {children}
        </CurrencyContext.Provider>
    );
};