import { Link } from "react-router-dom";
import QRCodeImage from "../../assets/qr_code.png";
import InputFieldWithLabel from "../utils/InputFieldWithLabel.component";
import Button from "../utils/Button.component";
import AuthenticationOptions from "../utils/AuthenticationOptions.component";
import AuthenticationPrompts from "../utils/AuthenticationPrompts.component";
import WelcomingMessage from "../utils/WelcomingMessage.component";
import AuthenticationBackground from "../utils/AuthenticationBackground.component";

function LoginPage() {
  return (
    <AuthenticationBackground width="40%">
      <div className="flex flex-col px-4 py-6 w-[60%] h-full justify-center">
        <WelcomingMessage
          WelcomeHead="Welcome back!"
          WelcomeBody="We&rsquo;re so excited to see you again!"
        />

        <div className="flex flex-col">
          <InputFieldWithLabel
            htmlFor="email"
            type="email"
            label="EMAIL OR PHONE NUMBER"
          />
          <InputFieldWithLabel
            htmlFor="password"
            type="password"
            label="PASSWORD"
          />

          <AuthenticationPrompts />

          <Button>Login</Button>

          <AuthenticationOptions
            AuthenticationText="Need an account?"
            AuthenticationOption="Register"
            to="/register"
          />
        </div>
      </div>
      <div className="w-[32%] h-full">
        <div className="h-full flex flex-col justify-center items-center">
          <div className="h-full flex flex-col justify-center items-center">
            <div className="mb-16">
              <img src={QRCodeImage} alt="" />
            </div>
            <div className="text-center">
              <h2>Log in with QR Code</h2>
              <p>Scan this with the Discord mobile app log in instantly</p>
            </div>
          </div>
        </div>
      </div>
    </AuthenticationBackground>
  );
}

export default LoginPage;
