import { FC } from 'react';

const Container: FC = ({ children }) => {
    return <div className="px-4 md:container md:mx-auto w-full h-full">{children}</div>;
};

export default Container;
