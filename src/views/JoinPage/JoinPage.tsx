import { Button, Paper, TextField } from 'components';
import { Transition } from '@headlessui/react';
import { useJoinPage } from './hooks';

const JoinPage = (): JSX.Element => {
    const { register, errors, handleSubmit, sendOTPError } = useJoinPage();

    return (
        <div className="w-full h-full flex justify-center ">
            <Transition
                show={true}
                enter="transition-opacity duration-1000 ease-in-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="py-10 max-w-sm"
            >
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
                            label="Mobile Number"
                            name="number"
                            error={typeof sendOTPError === 'string' || errors?.number?.message}
                            helperText={
                                sendOTPError ||
                                errors?.number?.message ||
                                'Please enter your 10 digit mobile number'
                            }
                            required
                            fullWidth
                            ref={register({
                                required: true,
                                maxLength: { value: 10, message: 'Maximum length is 10' },
                                minLength: { value: 10, message: 'Minimum length should be 10' },
                            })}
                        />
                        <Button fullWidth type="submit" className="mt-4" rounded>
                            <span className="text-white">Get OTP</span>
                        </Button>
                    </form>
                </Paper>
            </Transition>
        </div>
    );
};

export default JoinPage;
