import { color, sizes, zIndexValues, font } from "@/shared/utils/styles";
import styled from "styled-components";

export const StyledSidebar = styled.div`
    position: fixed;
    z-index: ${zIndexValues.navLeft - 1};
    top: 0;
    height: 100vh;
    left: ${sizes.navleft}px;
    padding: 0 16px 24px;
    background: ${color.backgroundLightest};
    width: ${sizes.secondarSidebarWidth}px;
    border-right: 1px solid ${color.backgroundLightest};
`

export const CompanyInfo = styled.div`
    display: flex;
    padding: 24px 4px;
`

export const CompanyName = styled.div`
    color: ${color.textDark};
    ${font.size(15)};
    ${font.medium};
`
export const UserName = styled.div`
    color: ${color.textMedium};
    ${font.size(13)}
`

export const CompanyTexts = styled.div`
    padding: 3px 0 0 10px;
`

export const Divider = styled.div`
  margin-top: 17px;
  padding-top: 18px;
  border-top: 1px solid ${color.borderLight};
`;

export const LinkItem = styled.div`
    display: flex;
    position: relative;
    padding: 8px, 12px;
    border-radius: 3px;
    ${props=>
        !props.to ? `cursor: not-allowed;` : `&:hover: {background: ${color.backgroundLight}}`}
    i {
        margin-right: 15px;
        font-size: 20px;
    }
    &.active {
        color: ${color.backgroundDarkPrimary};
        background: ${color.backgroundLight};
        i {
            color: ${color.primary};
        }
    }
`

export const LinkText = styled.div`
    padding-top: 2px;
    ${font.size(15)};
`

export const NOT_IMPLEMENTED = styled.div`
    display: inline-block;
    position: absolute;
    left: 32px;
    width: 150px;
    padding: 5px 3px 3px 16px;
    border-radius: 3px;
    text-transform: uppercase;
    width: ${font.size(15)};
    background: ${color.backgroundMedium};
    opacity: 0;
    ${font.size(11.5)};
    ${font.bold}
    ${LinkItem}:hover & {
        opacity: 1;
    }
`

