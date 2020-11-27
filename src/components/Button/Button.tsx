import React from 'react';
import clsx from 'clsx';

export type ButtonProps = {
    children: React.ReactNode;
    color?: 'primary' | 'secondary';
    className?: string;
    disabled?: boolean;
    fullWidth?: boolean;
    onClick?: () => void;
    rounded?: boolean;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'contained';
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
                primary: `bg-primary`,
                secondary: `bg-secondary`,
            },
        };

        return (
            <button
                type={type}
                onClick={onClick}
                className={clsx(
                    className,
                    'py-2 px-4 hover:shadow-md outline-none focus:outline-none mr-1 mb-1',
                    buttonType[variant][color],
                    fullWidth && 'w-full',
                    disabled && 'bg-opacity-25',
                    rounded && 'rounded'
                )}
                ref={ref}
                disabled={disabled}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
