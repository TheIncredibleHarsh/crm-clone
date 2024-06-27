import Icon from "@/shared/components/Icon";
import { Item, ItemText, LogoLink, Navleft, StyledLogo, Bottom } from "./Styles";

const NavbarLeft = () => {
    return (
        <Navleft>
            <LogoLink>
                <StyledLogo />
            </LogoLink>

            <Item>
                <Icon type={"search"} size={22} top={1} left={3}/>
                <ItemText>Search Contact</ItemText>
            </Item>

            <Item>
                <Icon type={"plus"} size={29} top={1} left={3}/>
                <ItemText>Create Contact</ItemText>
            </Item>

            <Bottom>
                <Item>
                    <Icon type={"help"} size={22} />
                    <ItemText>About</ItemText>
                </Item>
            </Bottom>
        </Navleft>
    )
}

export default NavbarLeft;