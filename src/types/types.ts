import { Currency } from "../config/currency";

export interface ICurrencyOption {
    value: Currency, label: keyof typeof Currency
}

export interface IExpense {
    id: string,
    name: string,
    cost: number,
}