import { useState } from "react";

export const useToggle = (initialState: boolean): [boolean, () => void] => {
    const [state, setState] = useState<boolean>(initialState);
    const toggle = (): void => {
        setState((prevState: boolean) => !prevState);
    };
    return [state, toggle];
};