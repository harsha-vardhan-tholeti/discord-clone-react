function LoginPage() {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-screen w-screen flex justify-center items-center text-[#8e9297]"
      style={{ backgroundImage: 'url("../../assets/login_bg.svg")' }}
    >
      <div className="bg-[#292b2f] w-2/5 h-1/2 rounded flex justify-around items-start">
        <div className="flex flex-col px-4 py-6 w-[60%] h-full justify-center">
          <div className="text-center mb-6">
            <h1 className="text-[#f6f6f6] font-medium text-2xl mb-1">
              Welcome back!
            </h1>
            <p>We&rsquo;re so excited to see you again!</p>
          </div>

          <div className="flex flex-col">
            <label className="text-xs font-bold mb-2" htmlFor="email">
              EMAIL OR PHONE NUMBER <span className="text-red-800">*</span>
            </label>
            <input
              className="h-10 rounded-sm bg-[#1E1F22] focus:outline-none p-4 mb-4"
              type="email"
              id="email"
              name="email"
            />

            <label className="text-xs font-bold mb-2" htmlFor="password">
              PASSWORD <span className="text-red-800">*</span>
            </label>
            <input
              className="h-10 rounded-sm bg-[#1E1F22] focus:outline-none p-4 mb-2"
              type="password"
              id="password"
              name="password"
            />

            <p className="text-[#00A8FC] text-sm font-medium mt-1 mb-5">
              Forgot Your Password?
            </p>
            <button className="h-10 rounded-sm bg-[#4752C4] text-white text-base font-medium focus:outline-none p-4 mb-2 flex justify-center items-center">
              Log In
            </button>
            <p className="text-sm font-normal">
              Need an account? <span className="text-[#00A8FC]">Register</span>
            </p>
          </div>
        </div>
        <div className="w-[32%] h-full">
          <div className="h-full flex flex-col justify-center items-center">
            <div className="h-full flex flex-col justify-center items-center">
              <div className="mb-16">
                <img src="../../assets/qr_code.png" alt="" />
              </div>
              <div className="text-center">
                <h2>Log in with QR Code</h2>
                <p>Scan this with the Discord mobile app log in instantly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
