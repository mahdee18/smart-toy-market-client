import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const { singIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'

    const handleLogIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // Check for blank input fields
        if (!email || !password) {
            toast.error("A user cannot login empty email and password fields!!");
            return;
        }

        singIn(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // navigate(from)
                toast.success("User login successfully!!");
                navigate(from,{replace:true})
                form.reset();
            })
            .catch((error) => {
                console.error(error.message);
                if (error.code === "auth/wrong-password") {
                    toast.error("Incorrect password! Please try again.");
                } else {
                    toast.error(error.message);
                }
            });

    }
    // Google Sign in with popup
    const handleWithGoogleSingUp = () => {
        googleSignIn()
            .then((result) => {
                const loggedGoogleUser = result.user;
                console.log(loggedGoogleUser)
                toast.success('User Login Successfully!!');
                navigate(from,{replace:true})
            })
            .catch((error) => {
                console.error(error.message);
                toast.error(error.message);
            });
    }
    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <ToastContainer />
            {/* Component: Card with form */}
            <form onSubmit={handleLogIn} className="max-w-[415px] mx-auto overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-400">
                {/* Body*/}
                <div className="p-6">
                    <header className="mb-4 text-center">
                        <h3 className="text-xl font-medium text-slate-700">Please Login</h3>
                    </header>
                    <div className="flex flex-col">
                        {/* Input field */}
                        <div className="relative my-6">
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="your name"
                                className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-purple-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            />
                            <label
                                htmlFor="id-b03"
                                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                                Your email
                            </label>
                            <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-700 peer-invalid:text-pink-500">
                                <span>Type your email address</span>
                            </small>
                        </div>
                        {/* Input field */}
                        <div className="relative my-6">
                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="your password"
                                className="relative w-full h-10 px-4 pr-12 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-purple-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            />
                            <label
                                htmlFor="id-b13"
                                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-700 peer-disabled:before:bg-transparent"
                            >
                                Your password
                            </label>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-2.5 right-4 h-5 w-5 stroke-slate-700 cursor-pointer peer-disabled:cursor-not-allowed"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                />
                            </svg>
                            <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
                                <span>Type your password</span>
                            </small>
                        </div>
                    </div>
                </div>
                {/* Action base sized basic button */}
                <div className="flex justify-end p-6 -mt-5">
                    <button
                        type="submit"
                        className="btn border-0 inline-flex items-center justify-center w-full h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-[#ff6e13] opacity-75 disabled:cursor-not-allowed disabled:borde"
                    >
                        <span>Login</span>
                    </button>
                </div>
                <div className="-mt-1 text-center text-md transition text-slate-400 peer-invalid:text-pink-500">
                    Create New Account
                    <Link className="ml-1 text-[#ff6e13] font-semibold" to="/register">
                        Register
                    </Link>
                </div>
                <div className="w-full px-6 flex items-center text-center mx-auto py-5">
                    <hr className="flex-1 border-t border-slate-400" />
                    <span className="my-0 mx-[10px] font-bold text-slate-700">or</span>
                    <hr className="flex-1 border-t border-slate-400" />
                </div>
                <div onClick={handleWithGoogleSingUp} className="flex items-center justify-center gap-[6px] w-ful; mx-6 h-[50px] border border-slate-600 rounded-md cursor-pointer mb-6">
                    {/* <img  src={google} alt="" /> */}
                    <FaGoogle className="w-7 h-7 rounded-md"></FaGoogle>
                    <span>Continue with Google</span>
                </div>

            </form>
            {/* End Card with form */}
        </section>
    );
};

export default Login;