import PropTypes from "prop-types";

function Button({ children }) {
  return (
    <button className="h-10 rounded-sm bg-[#4752C4] text-white text-base font-medium focus:outline-none p-4 mb-2 flex justify-center items-center">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
