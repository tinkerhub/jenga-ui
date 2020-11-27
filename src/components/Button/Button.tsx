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
        const buttonType = {
            contained: `bg-${color}`,
        };

        return (
            <button
                type={type}
                onClick={onClick}
                className={clsx(
                    className,
                    'py-2 px-4 hover:shadow-md outline-none focus:outline-none mr-1 mb-1',
                    buttonType[variant],
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
