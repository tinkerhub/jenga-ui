import getSessionData from 'api/getSessionData';
import { useRouter } from 'next/router';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { AuthContextProps, UserSessionData } from '.';

const AuthContext = createContext<AuthContextProps | Record<string, unknown>>({});

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN || 'jenga_access_token';

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<UserSessionData | null>(null);
    const [loading, setLoading] = useState(false);
    const token = process.browser ? localStorage.getItem(ACCESS_TOKEN) : null;
    const router = useRouter();

    useEffect(() => {
        const checkUserSession = async (): Promise<void> => {
            try {
                if (token) {
                    const userDetails = await getSessionData();
                    setUser(userDetails);
                    if (userDetails.memberShipID) {
                        router.push('/exist');
                    } else {
                        if (userDetails.number && userDetails.verified) {
                            router.push('/details');
                        }
                    }
                    setLoading(false);
                } else {
                    router.push('/');
                    setLoading(false);
                }
            } catch (error) {
                setLoading(false);
                localStorage.removeItem(ACCESS_TOKEN);
                router.replace('/');
            }
        };
        checkUserSession();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setSessionData = (sessionDetails: UserSessionData): void => {
        if (sessionDetails.token) {
            localStorage.setItem(ACCESS_TOKEN, sessionDetails.token);
        }
        setUser(sessionDetails);
    };

    const removeSessionData = (): void => {
        localStorage.removeItem(ACCESS_TOKEN);
        setUser(null);
    };

    /**
     * Context value to access glabally from anywhere
     * Memo to optimize at best
     */
    const value = useMemo(
        () => ({
            number: user?.number,
            memberID: user?.memberShipID,
            verified: user?.verified,
            token: user?.token,
            setSessionData,
            removeSessionData,
            loading,
        }),

        [user?.memberShipID, user?.number, loading, user?.verified, user?.token]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => useContext(AuthContext) as AuthContextProps;
