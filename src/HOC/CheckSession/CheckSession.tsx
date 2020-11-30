import React from 'react';
import { Spinner } from 'components';
import { useAuth } from 'context/AuthContext';

const CheckSession: React.FC = ({ children }) => {
    const { loading } = useAuth();

    if (loading) {
        return <Spinner />;
    }

    return <>{children}</>;
};

export default CheckSession;
