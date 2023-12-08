import PropTypes from "prop-types";
import { v4 as randomId } from "uuid";

function FooterInfoElements({ elementsMeta }) {
  return (
    <div>
      <p className="text-[#5865f2] mb-5">{elementsMeta.title}</p>
      {elementsMeta.elements.map((element) => (
        <a className="block mt-2" key={randomId()}>
          {element}
        </a>
      ))}
    </div>
  );
}

FooterInfoElements.propTypes = {
  elementsMeta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    elements: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default FooterInfoElements;
