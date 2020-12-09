import React from 'react';
import clsx from 'clsx';
import { ButtonSpinner } from './ButtonSpinner';

export type ButtonProps = {
    children: React.ReactNode;
    color?: 'primary' | 'secondary';
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    onClick?: () => void;
    rounded?: boolean;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'contained' | 'outlined';
};

export type Ref = HTMLButtonElement;

const Button = React.forwardRef<Ref, ButtonProps>(
    (
        {
            onClick,
            children,
            className,
            variant = 'contained',
            fullWidth = false,
            loading = false,
            disabled = false,
            type = 'button',
            color = 'primary',
            rounded = false,
        }: ButtonProps,
        ref
    ) => {
        /**
         * Applied nested object instead of just bg-<color>
         * Becoz purge wont detect the classes like that so they get purged
         */
        const buttonType = {
            contained: {
                primary: `bg-primary border border-transparent`,
                secondary: `bg-secondary border border-transparent`,
            },
            outlined: {
                primary: `text-primary bg-transparent border border-solid border-primary hover:bg-primary hover:text-white active:bg-primary`,
                secondary: `text-secondary bg-transparent border border-solid border-secondary hover:bg-secondary hover:text-white active:bg-secondary`,
            },
        };

        return (
            <button
                type={type}
                onClick={onClick}
                className={clsx(
                    'py-2 px-4 hover:shadow-md outline-none focus:outline-none mr-1 mb-1 text-xs transition duration-150 ease-in-out',
                    buttonType[variant][color],
                    fullWidth && 'w-full',
                    disabled && 'bg-opacity-25 cursor-not-allowed',
                    rounded && 'rounded',
                    className
                )}
                ref={ref}
                disabled={disabled}
            >
                {loading ? (
                    <div className="w-full flex items-center justify-center">
                        <ButtonSpinner />
                    </div>
                ) : (
                    children
                )}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
