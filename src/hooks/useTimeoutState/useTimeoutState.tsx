/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';

const useTimeoutState = (delay: number, intialValue: any = null): [any, (value: any) => void] => {
    const [timeoutState, setTimeoutState] = useState(intialValue);

    useEffect(() => {
        const timer = setTimeout(() => setTimeoutState(intialValue), delay);
        return (): void => clearTimeout(timer);
    }, [timeoutState, delay, intialValue]);

    const setTimeoutStateValue = (value: any): void => {
        setTimeoutState(value);
    };

    return [timeoutState, setTimeoutStateValue];
};

export default useTimeoutState;
