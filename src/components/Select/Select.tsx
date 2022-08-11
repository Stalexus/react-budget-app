import { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import { Currency } from '../../config/currency';
import { useCurrencyContext } from "../../context/CurrencyContext";
import { ICurrencyOption } from '../../types';
import { StyledSelect } from './styles'


export const CustomSelect = () => {
    const currencyOptions: ICurrencyOption[] = [
        { value: Currency.USD, label: "USD" },
        { value: Currency.EUR, label: "EUR" },
        { value: Currency.GBR, label: "GBR" },
    ];

    const { currency, setCurrency } = useCurrencyContext();

    const [selected, setSlected] = useState<ICurrencyOption>(currency);

    const handleChange = (option: SingleValue<ICurrencyOption>) => {
        if (option) {
            setSlected(option);
            setCurrency(option);
        }
    };

    return (
        <Select
            options={currencyOptions}
            isMulti={false}
            defaultValue={currency}
            styles={StyledSelect}
            onChange={handleChange}
        />
    );
};