export interface UserSessionData {
    number?: string;
    memberShipID?: string;
}

export interface AuthContext {
    number: string | undefined;
    memberID: string | undefined;
    setSessionData: (sessionDetails: UserSessionData) => void;
    removeSessionData: () => void;
    loading: boolean;
}

export { AuthProvider, useAuth } from './AuthContext';
