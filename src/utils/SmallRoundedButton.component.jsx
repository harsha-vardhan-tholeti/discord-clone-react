import PropTypes from "prop-types";

function SmallRoundedButton({ bgColor, textColor, children }) {
  const buttonStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <button
      className="flex justify-center items-center rounded-[40px] text-sm font-extralight px-4 py-2"
      style={buttonStyle}
    >
      {children}
    </button>
  );
}

SmallRoundedButton.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SmallRoundedButton;
