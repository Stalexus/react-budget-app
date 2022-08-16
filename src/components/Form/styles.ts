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
  padding: 15px 10px;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  background-color: #23c9ff;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  @media (min-width: 576px) {
    width: 600px;
  }
  @media (min-width: 768px) {
    width: 800px;
  }
`;

export const AddExpenseError = styled.p`
  margin-top: 0;
  margin-left: 10px;
  color: #ff0000;
`;