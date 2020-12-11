import Link from 'next/link';
import { Button, FadeIn, Paper, TextField } from 'components';
import { useValidateOTP } from './hooks';

const ValidateOTPPage = (): JSX.Element => {
    const { register, errors, handleSubmit, validateOTPError, isSubmitting } = useValidateOTP();

    return (
        <div className="w-full h-full flex justify-center overflow-y-auto">
            <FadeIn className="py-10 max-w-sm">
                <div className="px-4 mb-12">
                    <h1 className="font-semibold">
                        Welcome to <br /> TinkerHub
                    </h1>
                    <p className="text-subtext">
                        We are thrilled to know that you want to join the TinkerHub mission.
                        Let&apos;s get started.
                    </p>
                </div>
                <Paper rounded>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Enter your 6 digit OTP"
                            name="otp"
                            required
                            fullWidth
                            disabled={isSubmitting}
                            error={typeof validateOTPError === 'string' || errors?.otp?.message}
                            helperText={
                                validateOTPError ||
                                errors?.otp?.message ||
                                'Please enter your 10 digit mobile number'
                            }
                            ref={register({
                                required: true,
                                maxLength: {
                                    value: 6,
                                    message: 'OTP code must have length 6',
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Minimum length of an OTP is 6',
                                },
                            })}
                        />
                        <Button
                            fullWidth
                            type="submit"
                            className="mt-4"
                            rounded
                            loading={isSubmitting}
                        >
                            <span className="text-white">Verify Mobile Number</span>
                        </Button>
                    </form>
                </Paper>
                <div className="px-4 mt-8">
                    <Link href="/">
                        <div className="text-blue-500 font-medium cursor-pointer py-2">
                            Edit mobile number →
                        </div>
                    </Link>
                </div>
            </FadeIn>
        </div>
    );
};

export default ValidateOTPPage;
