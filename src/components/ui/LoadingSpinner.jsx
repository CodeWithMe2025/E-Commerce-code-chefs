
const LoadingSpinner = () => {



    return (
        <>
            <style>{
                `
            .loader {
                width: 20px;
                height: 20px;
                border: 3px solid;
                border-bottom-color: transparent;
                border-radius: 50%;
                display: inline-block;
                box-sizing: border-box;
                animation: rotation .85s linear infinite;
            }

            @keyframes rotation {
                0% {
                    transform: rotate(0deg);
                }

                100% {
                    transform: rotate(360deg);
                }
            }
            `
            }</style>

            <span className="loader"></span>
        </>
    );
};

export default LoadingSpinner;
