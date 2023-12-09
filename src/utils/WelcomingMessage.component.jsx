import PropTypes from "prop-types";

function WelcomingMessage({ WelcomeHead, WelcomeBody }) {
  return (
    <div className="text-center mb-6">
      <h1 className="text-[#f6f6f6] font-medium text-2xl mb-1">
        {WelcomeHead}
      </h1>
      <p>{WelcomeBody}</p>
    </div>
  );
}

WelcomingMessage.propTypes = {
  WelcomeHead: PropTypes.string.isRequired,
  WelcomeBody: PropTypes.string,
};

export default WelcomingMessage;
