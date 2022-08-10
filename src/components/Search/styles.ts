import styled from "styled-components";

export const StyledSearch = styled.input`
  display: block;
  padding: 20px 25px;
  outline: none;
  border: none;
  box-shadow:0px 0px 0px 2px rgb(0 0 0 / 10%);
  border-radius: 10px;
    @media (min-width: 768px) {
    width: 400px;
    }
  &::placeholder {
    color: #999999;
    opacity: 1;
  }
`;