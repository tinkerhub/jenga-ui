import { useState } from 'react';

export const useToggle = (initialState = false): [boolean, (arg0: boolean | undefined) => void] => {
    const [toggle, setToggle] = useState(initialState);

    const handleToggle = (state: boolean | undefined): void => {
        console.log(toggle);
        typeof state === 'boolean' ? setToggle(state) : setToggle(!toggle);
    };

    return [toggle, handleToggle];
};
