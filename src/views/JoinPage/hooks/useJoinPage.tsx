import { useState } from 'react';
import { useRouter } from 'next/router';
import { sendOTPAPI } from 'api';
import { useForm, UseFormMethods } from 'react-hook-form';
import { useAuth } from 'context/AuthContext';

type SendOTPFormInput = { number: string };

type SendOTPFormSubmission = (arg: SendOTPFormInput) => Promise<void>;

type useJoinPageReturn = {
    sendOTPError: string | null;
    isSubmitting: boolean;
    handleSubmit: HTMLFormElement['submit'];
    register: UseFormMethods['register'];
    errors: UseFormMethods['errors'];
};

export const useJoinPage = (): useJoinPageReturn => {
    const [sendOTPError, setSendOTPError] = useState(null);
    const { number, setSessionData } = useAuth();
    const router = useRouter();
    const {
        register,
        errors,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<SendOTPFormInput>({
        defaultValues: {
            number,
        },
    });

    const sendOTP: SendOTPFormSubmission = async ({ number }) => {
        try {
            const { token } = await sendOTPAPI(number);
            setSessionData({ number, token });
            router.push('/validate');
        } catch (error) {
            setSendOTPError(error.message);
        }
    };

    return { sendOTPError, handleSubmit: handleSubmit(sendOTP), errors, register, isSubmitting };
};
