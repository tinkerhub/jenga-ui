/* eslint-disable jsx-a11y/aria-role */
const Spinner = (): JSX.Element => {
    return (
        <div className="w-full h-full flex justify-center items-center bg-background">
            <div className="w-28 h-28">
                <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 184 184"
                    className="animate-pulse"
                >
                    <style jsx>{`
                        .cls-1 {
                            fill: #05bfce;
                        }
                        .cls-2 {
                            fill: #ffcd10;
                        }
                        .cls-3 {
                            fill: #95bf15;
                        }
                        .cls-4 {
                            fill: #ee1700;
                        }
                        .cls-5 {
                            fill: #205b67;
                        }
                        .cls-6 {
                            fill: #0060ff;
                        }
                    `}</style>

                    <rect className="cls-1" width="115" height="46" rx="6.98" />
                    <rect className="cls-2" y="69" width="184" height="46" rx="6.98" />
                    <rect className="cls-3" x="92" y="138" width="34.48" height="46" rx="6.98" />
                    <rect
                        className="cls-4"
                        x="0.4"
                        y="138.66"
                        width="68.5"
                        height="45.15"
                        rx="6.98"
                    />
                    <rect
                        className="cls-5"
                        x="150.14"
                        y="138"
                        width="33.86"
                        height="46"
                        rx="6.98"
                    />
                    <rect className="cls-6" x="138" width="46" height="46" rx="6.98" />
                </svg>
                <div className="bar" role="bar"></div>
            </div>
        </div>
    );
};

export default Spinner;
