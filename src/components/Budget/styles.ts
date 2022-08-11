import styled from "styled-components";

export const StyledBadge = styled.div`
    width: 335px;
    height: 100px;
    margin-left: auto;
    margin-right: auto;
    display:flex;
    align-items: center;
    justify-content: space-between;
    background-color: #7CC6FE;
    border-radius: 10px;
    @media (min-width: 576px) {
        width: 600px;
        height: 170px;
      }
      @media (min-width: 768px) {
        width: 800px;
        height: 210px;
      }
`;
export const Amount = styled.p`
    margin-left: 20px;
    font-size: 20px;
`;

export const BudgetButton = styled.button`
    width: 85px;
    height: 36px;
    margin-right: 20px;
    border-radius: 10px;
`;

export const BudgetInput = styled.input`
    margin-left: 20px;
    outline: none;
    border: none;
    background-color: transparent;
    &::placeholder {
      color: #FFFFFF;
      opacity: 1;
      font-size: 18px;
    }
`;