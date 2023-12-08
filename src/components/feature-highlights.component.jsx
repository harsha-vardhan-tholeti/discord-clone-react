import PropTypes from "prop-types";

const FeatureHighlights = ({
  bgColor,
  imageSrc,
  imageAlt,
  title,
  description,
  reverseRow,
}) => {
  const containerStyle = bgColor ? { backgroundColor: bgColor } : null;
  const reverseRowClass = reverseRow ? "flex-row-reverse" : "";

  return (
    <div style={containerStyle}>
      <div className={`flex px-[316px] py-[100px] ${reverseRowClass}`}>
        <div className="w-6/12">
          <img src={imageSrc} alt={imageAlt} />
        </div>

        <div className="w-6/12 flex justify-center items-center">
          <div className="w-4/6">
            <h1 className="color-[#36393f] font-extrabold text-5xl mb-6">
              {title}
            </h1>
            <p className="color-[#36393f] text-xl font-normal w-[85%]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

FeatureHighlights.propTypes = {
  bgColor: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reverseRow: PropTypes.bool,
};

export default FeatureHighlights;
