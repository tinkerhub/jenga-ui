import { Button, Datepicker, Paper, Select, TextField } from 'components';
import { Transition } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { formData } from './formData';

const DetailsPage = (): JSX.Element => {
    const { control, register } = useForm();

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
                    <form>
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
                                    case 'date':
                                        return (
                                            <Datepicker
                                                name={name}
                                                label={label}
                                                helperText={helperText}
                                                required
                                                control={control}
                                                key={index}
                                            />
                                        );
                                    case 'select':
                                        return (
                                            <Select
                                                label={label}
                                                name={name}
                                                options={options ? options : []}
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
                        <Button fullWidth type="submit" className="mt-4" rounded>
                            <span className="text-white">Apply Now</span>
                        </Button>
                    </form>
                </Paper>
            </Transition>
        </div>
    );
};

export default DetailsPage;
