type withHookReturnType<T1> = (props: T1) => React.ReactNode;

const withHook = <T1, T2>(
    hook: (p: T1) => T2,
    view: (p: T2) => React.ReactNode
): withHookReturnType<T1> => {
    return (props) => {
        return view(hook(props));
    };
};

export default withHook;
