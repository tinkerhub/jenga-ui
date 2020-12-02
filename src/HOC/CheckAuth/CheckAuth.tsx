import React from 'react';
import { Spinner } from 'components';
import { useAuth } from 'context/AuthContext';

type CheckSessionProps = {
    pageChange: boolean;
};

const CheckSession: React.FC<CheckSessionProps> = ({ children, pageChange }) => {
    const { loading } = useAuth();

    if (loading || pageChange) {
        return <Spinner />;
    }

    return <>{children}</>;
};

export default CheckSession;
