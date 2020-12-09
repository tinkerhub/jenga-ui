import { Button, Datepicker, Paper, Select, TextArea, TextField } from 'components';
import { Transition } from '@headlessui/react';
import { formData } from './formData';
import { useDetailsPage } from './useDetailsPage';
import { useRouter } from 'next/router';

const DetailsPage = (): JSX.Element => {
    const {
        handleSubmit,
        register,
        isSubmitting,
        collegeList,
        control,
        verified,
    } = useDetailsPage();
    const router = useRouter();

    if (!verified) {
        router.push('/');
        return <div />;
    }

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
                        {formData.map(
                            (
                                {
                                    type,
                                    name,
                                    disabled,
                                    label,
                                    helperText,
                                    options,
                                    optionLabel,
                                    optionValue,
                                    preFetch,
                                },
                                index
                            ) => {
                                switch (type) {
                                    case 'textfield':
                                        return (
                                            <TextField
                                                name={name}
                                                label={label}
                                                helperText={helperText}
                                                required
                                                fullWidth
                                                disabled={disabled}
                                                ref={register}
                                                key={index}
                                            />
                                        );
                                    case 'textArea':
                                        return (
                                            <TextArea
                                                name={name}
                                                label={label}
                                                helperText={helperText}
                                                required
                                                fullWidth
                                                ref={register}
                                                key={index}
                                            />
                                        );
                                    case 'date':
                                        return (
                                            <Datepicker
                                                name={name}
                                                label={label}
                                                helperText={helperText}
                                                required
                                                fullWidth
                                                control={control}
                                                key={index}
                                            />
                                        );
                                    case 'select':
                                        return (
                                            <Select
                                                label={label}
                                                name={name}
                                                options={
                                                    options
                                                        ? preFetch && collegeList
                                                            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                                              (collegeList as any)
                                                            : options
                                                        : []
                                                }
                                                optionLabel={optionLabel}
                                                optionValue={optionValue}
                                                control={control}
                                                key={index}
                                            />
                                        );
                                    default:
                                        break;
                                }
                            }
                        )}
                        <div className="mb-4">
                            <span className="block mb-2 text-current">Community policy</span>
                            <small className="block mt-1 text-xs font-normal text-gray-600">
                                To ensure that everything is in order, we ask that you accept our
                                community policy & guideline before we moving forward.
                                TinkerHub-Community-Policy Please click below if you find our policy
                                acceptable. If you want to talk, we are available at
                                hello@tinkerhub.org
                            </small>
                        </div>
                        <TextField
                            name="accept"
                            type="checkbox"
                            label="I Accept"
                            ref={register}
                            required
                        />
                        <Button
                            fullWidth
                            type="submit"
                            className="mt-4"
                            rounded
                            disabled={isSubmitting}
                            loading={isSubmitting}
                        >
                            <span className="text-white">Apply Now</span>
                        </Button>
                    </form>
                </Paper>
            </Transition>
        </div>
    );
};

export default DetailsPage;
