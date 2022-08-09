import { useState } from "react";
import { Amount, BudgetButton, StyledBadge } from "./styles";

export const Badget = () => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
  };

  return (
    <div>
      {isEditMode ? (
        <StyledBadge>
          <input />
          <BudgetButton onClick={handleSave}>Save</BudgetButton>
          
        </StyledBadge>
      ) : (
        <StyledBadge>
          <Amount>Budget: $3000</Amount>
          <BudgetButton onClick={handleEdit}>Edit</BudgetButton>
        </StyledBadge>)}
    </div>
  )
}
