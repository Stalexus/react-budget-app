import { useState } from "react";
import { useCurrencyContext } from "../../context";
import { useBudgetContext } from "../../context";
import { useInput } from "../../hooks/useInput";
import { Amount, BudgetButton, BudgetInput, StyledBadge } from "./styles";

export const Badget = () => {
  const { currency } = useCurrencyContext();
  const { budget, changeBudgetValue } = useBudgetContext();
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [inputOptions, clearinput] = useInput("");

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    changeBudgetValue(Number(inputOptions.value));
    setIsEditMode(false);
    clearinput();
  };

  return (
    <div>
      {isEditMode ? (
        <StyledBadge>
          <BudgetInput placeholder="Enter budget ..." {...inputOptions} />
          <BudgetButton onClick={handleSave}>Save</BudgetButton>

        </StyledBadge>
      ) : (
        <StyledBadge>
          <Amount>Budget: {currency + budget}</Amount>
          <BudgetButton onClick={handleEdit}>Edit</BudgetButton>
        </StyledBadge>)}
    </div>
  )
}
