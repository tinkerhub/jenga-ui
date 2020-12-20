import { FC } from 'react';
import clsx from 'clsx';

type PaperProps = {
    rounded?: boolean;
    className?: string;
};

const Paper: FC<PaperProps> = ({ children, rounded, className }) => {
    return (
        <div className={clsx('py-10 px-5 my-5 w-full bg-white', rounded && 'rounded', className)}>
            {children}
        </div>
    );
};

export default Paper;
