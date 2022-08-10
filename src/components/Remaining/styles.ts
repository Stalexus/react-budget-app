import styled from "styled-components";
import { StyledBadge } from '../Badget/styles';

interface IProps {
    isOverspend: boolean;
}

export const StyledRemaining = styled(StyledBadge)<IProps>`
    justify-content: flex-start;
    background-color: ${(props) => (props.isOverspend ? "#FF0000" : "#CCD5FF")};
`;