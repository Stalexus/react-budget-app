import Select from 'react-select';
import { Currency } from '../../config/currency';

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
    return (
        <Select options={options} />
    )
}
