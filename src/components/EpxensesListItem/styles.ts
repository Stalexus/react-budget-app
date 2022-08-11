import styled from "styled-components";

export const StyledExpensesListItem = styled.li`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  padding: 15px 20px;
  border-bottom: 1px solid #ccd5ff;
`;

export const ExpensesListItemCost = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  background: #23c9ff;
  border-radius: 10px;
`;

export const DelButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;