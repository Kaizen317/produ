import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Welcome-SAIT2</h2>
        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign In
          </button>
        </form>
        <div className="flex justify-between mt-6">
          <a href="#" className="text-sm text-indigo-600 hover:underline">
            Forgot password?
          </a>
          <a href="#" className="text-sm text-indigo-600 hover:underline">
            Sign up
          </a>
        </div>
        <div className="mt-6">
          <p className="text-center text-sm text-gray-500">Or sign in with:</p>
          <div className="flex justify-center mt-4 space-x-4">
            <button className="p-2 text-white bg-blue-500 rounded-full">
              <FaFacebook />
            </button>
            <button className="p-2 text-white bg-red-500 rounded-full">
              <FaGoogle />
            </button>
            <button className="p-2 text-white bg-blue-400 rounded-full">
              <FaTwitter />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
