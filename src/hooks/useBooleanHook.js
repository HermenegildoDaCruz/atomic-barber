import { useState } from "react";
export function useBooleanHook(initialValue = false) {
    const [value, setValue] = useState(initialValue);
    const toggle = () => setValue(!value);
    const setTrue = () => setValue(true);
    const setFalse = () => setValue(false);
    return { value, toggle, setTrue, setFalse };
}