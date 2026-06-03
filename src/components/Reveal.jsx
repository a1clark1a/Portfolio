import PropTypes from "prop-types";
import useFadeIn from "../hooks/useFadeIn";

/**
 * Staggered scroll-reveal wrapper.
 *
 * Wrap each item of a mapped list so every element owns its own
 * IntersectionObserver (via useFadeIn) plus a per-index transition-delay,
 * producing the one big motion moment: cards fading/translating up in sequence.
 *
 * Reduced motion is honored automatically — useFadeIn marks the element visible
 * immediately and the `.fade-in` rule in index.css sets `transition: none` under
 * `prefers-reduced-motion`, so the delay below becomes inert.
 *
 * @param {number} index - position in the list; drives the 0/80/160/240ms stagger.
 * @param {React.ElementType} as - element/tag to render (default "div").
 */
const Reveal = ({ index = 0, as: Tag = "div", className = "", children, ...rest }) => {
  const ref = useFadeIn();

  return (
    <Tag
      ref={ref}
      className={`fade-in ${className}`.trim()}
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

Reveal.propTypes = {
  index: PropTypes.number,
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Reveal;
