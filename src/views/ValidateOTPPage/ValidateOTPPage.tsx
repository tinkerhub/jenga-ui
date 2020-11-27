import { Button, Paper, TextField } from 'components';
import { Transition } from '@headlessui/react';

const JoinPage = (): JSX.Element => {
    return (
        <div className="w-full h-full flex justify-center ">
            <Transition
                show={true}
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                {(ref) => (
                    <div className="py-10 max-w-sm" ref={ref}>
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
                            <form>
                                <TextField
                                    label="Enter your 6 digit OTP"
                                    name="otp"
                                    helperText="We sent a 6 digit OTP to your number"
                                    required
                                />
                                <Button fullWidth type="submit" className="mt-4" rounded>
                                    <span className="text-white">Verify Mobile Number</span>
                                </Button>
                            </form>
                        </Paper>
                        <div className="px-4 mt-8">
                            <div className="text-blue-500 font-medium cursor-pointer py-2">
                                Resent OTP →
                            </div>
                            <div className="text-blue-500 font-medium cursor-pointer py-2">
                                Edit mobile number →
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        </div>
    );
};

export default JoinPage;
