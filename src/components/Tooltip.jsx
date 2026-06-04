import PropTypes from "prop-types";
import "./Tooltip.css";

const Tooltip = ({ label, position = "bottom", children }) => (
  <span
    className={`tooltip${position === "top" ? " tooltip--top" : ""}`}
    data-tooltip={label}
  >
    {children}
  </span>
);

Tooltip.propTypes = {
  label: PropTypes.string,
  position: PropTypes.oneOf(["top", "bottom"]),
  children: PropTypes.node,
};

export default Tooltip;
