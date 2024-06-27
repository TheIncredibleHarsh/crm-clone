import styled from "styled-components";

export const StyledIcon = styled.i`
    display: inline-block;
    font-size: ${props => `${props.size}px`};
    &::before {
        content: "${props => props.code}";
        font-family: "crm" !important;
        font-weight: normal;
        font-style: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`