import Select from 'react-select';
import { Currency } from '../../config/currency';
import { StyledSelect } from './styles'

interface IOption {
    value: Currency;
    label: keyof typeof Currency;
}

interface IProps {
    options: IOption[],
    currencies: IOption,
  }

export const CustomSelect = () => {
    const options: IOption[] = [
        { value: Currency.USD, label: 'USD' },
        { value: Currency.EUR, label: 'EUR' },
        { value: Currency.GBR, label: 'GBR' },
    ]
    return (
        <Select options={options} styles={StyledSelect} isMulti={false} />
    )
}
