import SpinnerStyle from './Spinner.module.css';

const Spinner = (): JSX.Element => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className={SpinnerStyle.ldio}>
                <div></div>
            </div>
        </div>
    );
};

export default Spinner;
