import { useAuth } from 'context/AuthContext';
import { useState } from 'react';

interface useThankYouAndExistReturn {
    memberID: string | undefined;
    copiedTextStatus: string;
    copyToClipboard: () => void;
}

export const useThankYouAndExist = (): useThankYouAndExistReturn => {
    const { memberID } = useAuth();
    const [copiedTextStatus, setCopiedTextStatus] = useState('');

    const copyToClipboard = (): void => {
        if (memberID) {
            navigator.clipboard.writeText(memberID);
            setCopiedTextStatus('copied');
        }
    };

    return { memberID, copiedTextStatus, copyToClipboard };
};
