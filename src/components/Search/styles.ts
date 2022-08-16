import styled from "styled-components";

export const StyledSearch = styled.input`
  display: block;
  padding: 20px 25px;
  margin-left: auto;
  margin-right: auto;
  outline: none;
  border: none;
  box-shadow:0px 0px 0px 2px rgb(0 0 0 / 10%);
  border-radius: 10px;
  &::placeholder {
    color: #999999;
    opacity: 1;
  }
  @media (min-width: 320px) {
    width: 285px;
  }
  @media (min-width: 576px) {
    width: 550px;
  }
  @media (min-width: 768px) {
    width: 750px;
  }
`;