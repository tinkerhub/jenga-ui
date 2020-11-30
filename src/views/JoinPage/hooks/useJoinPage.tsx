import { useState } from 'react';
import { useRouter } from 'next/router';
import { sendOTPAPI } from 'api';
import { useForm, UseFormMethods } from 'react-hook-form';

type SendOTPFormInput = { number: string };

type SendOTPFormSubmission = (arg: SendOTPFormInput) => Promise<void>;

type useJoinPageReturn = {
    sendOTPError: string | null;
    handleSubmit: HTMLFormElement['submit'];
    register: UseFormMethods['register'];
    errors: UseFormMethods['errors'];
};

export const useJoinPage = (): useJoinPageReturn => {
    const [sendOTPError, setSendOTPError] = useState(null);
    const router = useRouter();
    const { register, errors, handleSubmit } = useForm<SendOTPFormInput>();

    const sendOTP: SendOTPFormSubmission = async ({ number }) => {
        try {
            await sendOTPAPI(number);
            router.push('/validate');
        } catch (error) {
            setSendOTPError(error.message);
        }
    };

    return { sendOTPError, handleSubmit: handleSubmit(sendOTP), errors, register };
};
