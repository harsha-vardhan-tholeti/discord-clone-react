import PropTypes from "prop-types";
import LoginBackground from "../../assets/login_bg.svg";

function AuthenticationBackground({ width, children }) {
  const style = {
    width: width,
  };
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-screen w-screen flex justify-center items-center text-[#8e9297]"
      style={{ backgroundImage: `url(${LoginBackground})` }}
    >
      <div
        className="bg-[#292b2f] h-1/2 rounded flex justify-around items-center"
        style={style}
      >
        {children}
      </div>
    </div>
  );
}

AuthenticationBackground.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string.isRequired,
};

export default AuthenticationBackground;
