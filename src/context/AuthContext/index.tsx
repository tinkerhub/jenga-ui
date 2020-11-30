export interface UserSessionData {
    number?: string;
    memberShipID?: string;
}

export interface AuthContextProps {
    number?: string;
    memberID?: string;
    setSessionData?: (sessionDetails: UserSessionData) => void;
    removeSessionData?: () => void;
    loading?: boolean;
}

export { AuthProvider, useAuth } from './AuthContext';
