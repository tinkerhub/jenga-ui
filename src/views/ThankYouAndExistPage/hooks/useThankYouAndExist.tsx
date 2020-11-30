import { clearSessionAPI } from 'api';
import { useAuth } from 'context/AuthContext';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface useThankYouAndExistReturn {
    memberID: string | undefined;
    copiedTextStatus: string;
    copyToClipboard: () => void;
    logout: () => Promise<void>;
    apiLoading: boolean;
}

export const useThankYouAndExist = (): useThankYouAndExistReturn => {
    const { memberID, removeSessionData } = useAuth();
    const [apiLoading, setApiLoading] = useState(false);
    const [copiedTextStatus, setCopiedTextStatus] = useState('');
    const router = useRouter();

    const copyToClipboard = (): void => {
        if (memberID) {
            navigator.clipboard.writeText(memberID);
            setCopiedTextStatus('copied');
        }
    };

    const logout = async (): Promise<void> => {
        setApiLoading(true);
        await clearSessionAPI();
        removeSessionData();
        setApiLoading(false);
        router.push('/');
    };

    return { memberID, copiedTextStatus, copyToClipboard, logout, apiLoading };
};
