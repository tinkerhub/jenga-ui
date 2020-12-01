export interface UserSessionData {
    number?: string;
    memberShipID?: string;
    verified?: boolean;
    token?: string;
}

export interface AuthContextProps {
    number?: string;
    memberID?: string;
    verified?: boolean;
    setSessionData: (sessionDetails: UserSessionData) => void;
    removeSessionData: () => void;
    loading?: boolean;
}

export { AuthProvider, useAuth } from './AuthContext';
