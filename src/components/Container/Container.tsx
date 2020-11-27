import { FC } from 'react';

const Container: FC = ({ children }) => {
    return <div className="md:container md:mx-auto w-full h-full">{children}</div>;
};

export default Container;
