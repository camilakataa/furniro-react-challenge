const LoginSection = () => {
  return (
    <div className="flex flex-col justify-center items-center p-20">
      <div className="lg:w-[500px]">
        <h2 className="text-3xl font-bold text-center">Welcome!</h2>
        <p className="text-light text-gray-500 mb-12 text-center">
          Login with your account
        </p>
        <form>
          <label htmlFor="email">Email address</label>
          <input
            className="h-[75px] w-full border-solid border border-gray-600 rounded-md mb-6 p-4 text-gray-600"
            type="email"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            className="h-[75px] w-full border-solid border border-gray-600 rounded-md mb-6 p-4 text-gray-600"
            type="password"
            id="password"
          />
          <button
            className="bg-yellow-dark w-[237px] h-[55px] text-white rounded-md mt-6"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginSection;
