import Select, { SingleValue } from 'react-select';
import { Currency } from '../../config/currency';
import { useCurrencyContext } from "../../context/CurrencyContext";
import { StyledSelect } from './styles'

interface IOption {
    value: Currency;
    label: keyof typeof Currency;
}

export const CustomSelect = () => {
    const options: IOption[] = [
        { value: Currency.USD, label: 'USD' },
        { value: Currency.EUR, label: 'EUR' },
        { value: Currency.GBR, label: 'GBR' },
    ]
    const { currency, setCurrency } = useCurrencyContext();
    const handleSelectChange = (option: SingleValue<IOption>) => {
        if (option) {
            setCurrency(option.value);
        }
    };
    return (
        <Select options={options} styles={StyledSelect} isMulti={false}   />
    )
}
