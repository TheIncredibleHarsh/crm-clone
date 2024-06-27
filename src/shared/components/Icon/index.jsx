import { StyledIcon } from "./Styles";

const fontIconCodes = {
    [`search`]: '\\e041',
    [`plus`]: '\\e035',
    [`help`]: '\\e009'
}

const Icon = ({type, ...iconProps}) => {
    return (
        <StyledIcon {...iconProps} code={fontIconCodes[type]}/>
    )
}

export default Icon;