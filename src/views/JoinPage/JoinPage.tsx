import { Button, Paper, TextField } from 'components';

const JoinPage = (): JSX.Element => {
    return (
        <div className="w-full h-full flex justify-center">
            <div className="py-10 max-w-sm">
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
                            label="Mobile Number"
                            name="mobile"
                            helperText="Please enter your 10 digit mobile number"
                        />
                        <Button fullWidth type="submit" className="mt-4" rounded>
                            <span className="text-white">Get OTP</span>
                        </Button>
                    </form>
                </Paper>
            </div>
        </div>
    );
};

export default JoinPage;
