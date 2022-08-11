import { MouseEventHandler } from "react";
import { useBudgetContext } from "../../context/BudgetContext/BudgetContext";
import { useCurrencyContext } from "../../context/CurrencyContext";
import { useInput } from "../../hooks/useInput";
import { useToggle } from "../../hooks/useToggle";
import { Amount, BudgetInput, BudgetButton, StyledBadge } from "./styles";

interface IProps {
  areaName?: string;
}

export const Budget = ({ areaName }: IProps) => {
  const { currency } = useCurrencyContext();
  const { budget, editBudgetValue } = useBudgetContext();
  const [isEditMode, toggleIsEditMode] = useToggle(false);
  const budgetInput = useInput()

  const handleSaveButton: MouseEventHandler<HTMLButtonElement> = () => {
    editBudgetValue(budgetInput.value)
    toggleIsEditMode();
  };

  const handleEditButton: MouseEventHandler<HTMLButtonElement> = () => {
    toggleIsEditMode();
  };

  if (!isEditMode) {
    return (
      <StyledBadge>
        <Amount>Budget: {currency.value + budget}</Amount>
        <BudgetButton onClick={handleEditButton}>Edit</BudgetButton>
      </StyledBadge>
    );
  } else {
    return (
      <StyledBadge>
        <span>
          <BudgetInput placeholder="Enter budget ..." {...budgetInput} />
        </span>
        <BudgetButton onClick={handleSaveButton}>Save</BudgetButton>
      </StyledBadge>
    );
  }
};