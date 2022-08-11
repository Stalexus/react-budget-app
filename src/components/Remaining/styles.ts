import styled from "styled-components";
import { StyledBadge } from "../Budget/styles";

interface IProps {
  isOverspend: boolean;
  areaName?: string;
}

export const StyledRemaining = styled(StyledBadge)<IProps>`
    justify-content: flex-start;
    background-color: ${(props) => (props.isOverspend ? "#FF0000" : "#CCD5FF")};
`;