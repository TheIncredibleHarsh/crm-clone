import styled from "styled-components";
import { zIndexValues, sizes, color, font } from "@/shared/utils/styles";
import Logo from "@/shared/Logo";
import { NavLink } from "react-router-dom";

export const Navleft = styled.aside`
    z-index: ${zIndexValues.navLeft};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: ${sizes.navleft}px;
    background: ${color.backgroundDarkPrimary};
    transition: all 0.1s;
    &:hover {
        width: 200px;
        box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.6);
    }
`;

export const LogoLink = styled(NavLink)`
    display: block;
    position: relative;
    left: 0;
    margin: 20px 0 10px;
    transition: left 0.1s;
`;

export const StyledLogo = styled(Logo)`
    display: inline-block;
    margin-left: 8px;
    padding: 10px;
`;

export const Item = styled.div`
    position: relative;
    width: 100%;
    height: 42px;
    line-height: 42px;
    padding-left: 64px;
    color: #deebff;
    transition: color 0.1s;
    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    i {
        position: absolute;
        left: 18px;
    }
`;

export const ItemText = styled.div`
    position: relative;
    right: 12px;
    visibility: hidden;
    opacity: 0;
    text-transform: uppercase;
    transition: all 0.1s;
    transition-property: right, visibility, opacity;
    ${font.bold}
    ${font.size(12)}
    ${Navleft}:hover & {
        right: 0;
        visibility: visible;
        opacity: 1;
    }
`;

export const Bottom = styled.div`
    position: absolute;
    bottom: 20px;
    left: 0px;
    width: 100%;
`