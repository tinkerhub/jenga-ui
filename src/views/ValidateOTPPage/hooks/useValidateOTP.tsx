import { useState } from 'react';
import { useRouter } from 'next/router';
import { validateOTPAPI } from 'api';
import { useForm, UseFormMethods } from 'react-hook-form';
import { useAuth } from 'context/AuthContext';

type validateOTPFormInput = { otp: string };

type validateOTPFormSubmission = (arg: validateOTPFormInput) => Promise<void>;

type useJoinPageReturn = {
    validateOTPError: string | null;
    handleSubmit: HTMLFormElement['submit'];
    register: UseFormMethods['register'];
    errors: UseFormMethods['errors'];
    isSubmitting: boolean;
};

export const useValidateOTP = (): useJoinPageReturn => {
    const [validateOTPError, setvalidateOTPError] = useState(null);
    const router = useRouter();
    const { setSessionData } = useAuth();
    const {
        register,
        errors,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<validateOTPFormInput>();

    const validateOTP: validateOTPFormSubmission = async ({ otp }) => {
        try {
            const { memberShipID } = await validateOTPAPI(otp);
            if (memberShipID) {
                setSessionData({ memberShipID });
                router.push('/exist');
            } else {
                router.push('/details');
            }
        } catch (error) {
            setvalidateOTPError(error.message);
        }
    };

    return {
        validateOTPError,
        handleSubmit: handleSubmit(validateOTP),
        errors,
        register,
        isSubmitting,
    };
};
