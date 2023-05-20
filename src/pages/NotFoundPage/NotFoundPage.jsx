import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-600 text-white font-sans">
                <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-red-500 bg-clip-text leading-none tracking-wide animate-pulse">
                    404
                    <span className="text-gray-400 text-3xl absolute top-0 left-0 transform translate-x-1/3 -translate-y-3/4 animate-pulse">
                        NOT FOUND
                    </span>
                </h1>
                <div className="relative w-80 h-80">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center animate-bounce">
                        <div className="text-5xl font-extrabold -mt-8 animate-pulse">
                            Oops!
                        </div>
                        <div className="text-2xl font-extrabold animate-pulse">
                            Page not found
                        </div>
                        <a
                            href="/"
                            className="btn border-0 bg-purple-700 text-white font-bold py-2 px-4 rounded-md mt-8 animate-pulse"
                        >
                            Go back home
                        </a>
                        <img src="https://media.istockphoto.com/id/1222806141/photo/computer-error.jpg?b=1&s=170667a&w=0&k=20&c=2LBPYkEmvRiBa0EAPX_ghqncT5Xcv7xvgrlCx4Wf9-M=" alt="404 Error" className="mt-8 w-80 rounded-md" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;