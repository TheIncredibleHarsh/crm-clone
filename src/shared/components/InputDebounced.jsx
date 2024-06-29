import { useCallback } from "react";
import Input from "./Input";
import { debounce } from "lodash";

const InputDebounced = ({onChange, value: propsValue, ...inputProps}) => {

    const isControlled = propsValue !== undefined;
    const handleChange = useCallback(
        debounce(newValue => onChange(newValue), 500),
        [],
    );

    return (
        <Input 
            {...inputProps}
            value={isControlled ? value : undefined}
            onChange={newValue => {
                setValue(newValue);
                handleChange(newValue);
            }}
        />
    );
}

export default InputDebounced;