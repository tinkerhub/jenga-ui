import { FC } from 'react';
import clsx from 'clsx';

type PaperProps = {
    rounded?: boolean;
};

const Paper: FC<PaperProps> = ({ children, rounded }) => {
    return (
        <div className={clsx('py-10 px-5 my-5 w-full h-full bg-white', rounded && 'rounded')}>
            {children}
        </div>
    );
};

export default Paper;
