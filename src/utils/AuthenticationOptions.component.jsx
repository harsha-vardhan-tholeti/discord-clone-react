import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function AuthenticationOptions({
  AuthenticationText,
  AuthenticationOption,
  to,
}) {
  return (
    <p className="text-sm font-normal">
      {AuthenticationText}{" "}
      <Link to={to}>
        <span className="text-[#00A8FC] cursor-pointer">
          {AuthenticationOption}
        </span>
      </Link>
    </p>
  );
}

AuthenticationOptions.propTypes = {
  AuthenticationText: PropTypes.string,
  AuthenticationOption: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default AuthenticationOptions;
