import { StyledIcon } from "./Styles";

const fontIconCodes = {
    [`search`]: '\\e041',
    [`plus`]: '\\e035',
    [`help`]: '\\e009',
    [`board`]: 'X',
    [`list`]: '\\e010',
    [`contacts`]: '\\e057',
    [`settings`]: '~',
    [`insights`]: '\\e001',
    [`mail`]: '\\e015',
    [`import`]: ':',
    [`campaign`]: '^'
}

const Icon = ({type, ...iconProps}) => {
    return (
        <StyledIcon {...iconProps} code={fontIconCodes[type]}/>
    )
}

export default Icon;