import PropTypes from "prop-types";

function InputFieldWithLabel({ htmlFor, label, type }) {
  return (
    <>
      <label className="text-xs font-bold mb-2" htmlFor={htmlFor}>
        {label} <span className="text-red-800">*</span>
      </label>
      <input
        className="h-10 rounded-sm bg-[#1E1F22] focus:outline-none p-4 mb-4"
        type={type}
        id={htmlFor}
        name={htmlFor}
      />
    </>
  );
}

InputFieldWithLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default InputFieldWithLabel;
