import Icon from "@/shared/components/Icon";
import { 
    CompanyInfo, 
    CompanyName, 
    CompanyTexts, 
    Divider, 
    StyledSidebar, 
    UserName, 
    LinkItem, 
    LinkText,
    NOT_IMPLEMENTED
} from "./Styles";
import CompanyAvatar from "@/shared/components/CompanyAvatar";
import { NavLink, useResolvedPath } from "react-router-dom";

const Sidebar = ({company}) => {
    const match = useResolvedPath("").pathname;
    return (
        <StyledSidebar>
            <CompanyInfo>
                <CompanyAvatar />
                <CompanyTexts>
                    <CompanyName>{company.name}</CompanyName>
                    <UserName>John Doe</UserName>
                </CompanyTexts>
            </CompanyInfo>

            {renderLinkItem(match, 'Kanban View', 'board', '/board')}
            {renderLinkItem(match, 'Contacts', 'contacts', '/contacts')}
            {renderLinkItem(match, 'Settings', 'settings', '/settings')}
            <Divider />
            {renderLinkItem(match, 'Insights', 'insights')}
            {renderLinkItem(match, 'Import', 'import')}
            {renderLinkItem(match, 'Campaigns', 'campaign')}
            {renderLinkItem(match, 'Mail', 'mail')}
            

        </StyledSidebar>
    )
}

const renderLinkItem = (match, text, iconType, path) => {
    const isImplemented = !!path;

    const linkItemProps = isImplemented ?
        {to: path, as: NavLink} : { as: 'div' }
    
    return (
        <LinkItem {...linkItemProps}>
            <Icon type={iconType} />
            <LinkText>{text}</LinkText>
            { isImplemented ? '' : <NOT_IMPLEMENTED>Not Implemented</NOT_IMPLEMENTED>}
        </LinkItem>
    )
}

export default Sidebar;