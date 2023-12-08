import PropTypes from "prop-types";

function MainRoundedButton({ bgColor, textColor, children }) {
  const buttonStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <button
      className="flex justify-center items-center rounded-[28px] text-xl font-medium px-8 py-4 mr-6 mt-6"
      style={buttonStyle}
    >
      {children}
    </button>
  );
}

MainRoundedButton.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default MainRoundedButton;
