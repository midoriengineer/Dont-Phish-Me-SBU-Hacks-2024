const LoadingScreen = () => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black flex justify-center items-center z-50 animate-fadeOut">
            <div className="w-1/2 bg-gray-700">
                <div className="bg-green-500 h-2 animate-pulse"></div>
            </div>
        </div>
    );
};

export default LoadingScreen;
