import styled from "styled-components";
import { StyledSearch } from "../Search/styles";

export const ExpenseForm = styled.form`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AddExpenseInput = styled(StyledSearch)`
`;

export const AddExpenseButton = styled.button`
  padding: 15px 0;
  cursor: pointer;
  background-color: #23c9ff;
  color: #ffffff;
  border: none;
  border-radius: 10px;
`;

export const AddExpenseError = styled.p`
  margin-top: 0;
  margin-left: 10px;
  color: #ff0000;
`;