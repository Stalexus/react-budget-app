import styled from "styled-components";

export const StyledHeader = styled.header`
  max-width: 1024px;
  margin: auto;
  display: grid;
  align-items: baseline;
  grid-row-gap: 15px;
`;

export const WraperTitle = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
    @media (min-width: 320px) {
    width: 330px;
  }
    @media (min-width: 576px) {
    width: 595px;
  }
    @media (min-width: 768px) {
    width: 795px;
  }
`;