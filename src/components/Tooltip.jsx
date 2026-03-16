import "./Tooltip.css";

const Tooltip = ({ label, position = "bottom", children }) => (
  <span
    className={`tooltip${position === "top" ? " tooltip--top" : ""}`}
    data-tooltip={label}
  >
    {children}
  </span>
);

export default Tooltip;
