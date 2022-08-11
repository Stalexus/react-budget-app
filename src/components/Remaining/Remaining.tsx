import { useCurrencyContext } from "../../context/CurrencyContext";
import { useRemaining } from "../../hooks/useRemaning";
import { Amount } from "../Budget/styles";
import { StyledRemaining } from "./styles";

interface IProps {
  areaName?: string;
}

export const Remaining = ({ areaName }: IProps) => {
  const remaining = useRemaining();
  const { currency } = useCurrencyContext();
  return (
    <StyledRemaining isOverspend={remaining < 0} areaName={areaName}>
      <Amount>
        {remaining < 0
          ? `Overspending: ${currency.value + remaining * -1}`
          : `Remaining: ${currency.value + remaining}`}
      </Amount>
    </StyledRemaining>
  );
};