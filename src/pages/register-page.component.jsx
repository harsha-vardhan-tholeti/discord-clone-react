// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import AuthenticationBackground from "../utils/AuthenticationBackground.component";
import AuthenticationOptions from "../utils/AuthenticationOptions.component";
import Button from "../utils/Button.component";
import InputFieldWithLabel from "../utils/InputFieldWithLabel.component";
import WelcomingMessage from "../utils/WelcomingMessage.component";

function RegisterPage() {
  return (
    <AuthenticationBackground width="33.333333%">
      <div className="w-[80%]">
        <WelcomingMessage WelcomeHead="Create an account!" />
        <div className="flex flex-col justify-center">
          <InputFieldWithLabel htmlFor="email" type="email" label="EMAIL" />
          <InputFieldWithLabel
            htmlFor="username"
            type="text"
            label="USERNAME"
          />
          <InputFieldWithLabel
            htmlFor="password"
            type="password"
            label="PASSWORD"
          />
          <Button>Continue</Button>

          <AuthenticationOptions
            AuthenticationOption="Already have an account?"
            to="/login"
          />
        </div>
      </div>
    </AuthenticationBackground>
  );
}

export default RegisterPage;
