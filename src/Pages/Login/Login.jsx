import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div>
      <div className="h-full items-center justify-center flex ">
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow border border-black">
            <div className="p-5">
              <h3 className="text-2xl mb-0.5 font-medium"></h3>
              <p className="mb-4 text-sm font-normal text-gray-800"></p>
              <div className="text-center">
                <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
                  Login to your account
                </p>
              </div>
              <div className="mt-7 flex flex-col gap-2">
                <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                  <img
                    src="https://www.svgrepo.com/show/512317/github-142.svg"
                    alt="GitHub"
                    className="h-[18px] w-[18px] "
                  />
                  Continue with GitHub
                </button>
                <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="h-[18px] w-[18px] "
                  />
                  Continue with Google
                </button>
              </div>
              <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
                <div className="h-px w-full bg-slate-200"></div>
                OR
                <div className="h-px w-full bg-slate-200"></div>
              </div>
              <form onSubmit={handleSubmit} className="w-full">
                <label className="sr-only">Email address</label>
                <input
                  name="email"
                  type="email"
                  required=""
                  className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  placeholder="Email Address"
                />
                <label className="sr-only">Password</label>
                <input
                  name="password"
                  type={showPass ? "text" : "password"}
                  required=""
                  className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  placeholder="Password"
                />
                <span
                  className="relative flex justify-end -top-8 text-xl ml-80 w-10"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <IoEyeOutline /> : <FaRegEyeSlash />}
                </span>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
                >
                  Continue
                </button>
              </form>
              <div className="mt-6 text-center text-sm text-slate-600">
                Dont have an account?
                <Link to="/register" className="font-medium text-[#4285f4]">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
