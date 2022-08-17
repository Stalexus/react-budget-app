import styled from "styled-components";

export const StyledExpenses = styled.section`
  max-width: 1024px;
  margin: auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 320px) {
    width: 335px;
  }
  @media (min-width: 576px) {
    width: 600px;
  }
  @media (min-width: 768px) {
    width: 800px;
  }
`;