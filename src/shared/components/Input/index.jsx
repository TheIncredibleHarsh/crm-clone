import Icon from "../Icon";
import { InputElement, StyledInput } from "./Styles";
import { forwardRef } from "react";

const Input = forwardRef(({icon, onChange, ...inputProps}, ref) => {

    const handleChange = event => {
        onChange(event.target.value, event);
    }

    return (
        <StyledInput>
            {icon && <Icon type={icon} />}
            <InputElement {...inputProps} onChange={handleChange} hasIcon={!!icon}/>
        </StyledInput>
    )
})

export default Input;