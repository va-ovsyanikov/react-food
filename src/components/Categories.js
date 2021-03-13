import React from "react";
import PropTypes from "prop-types";
import { FaTimes, FaBars } from "react-icons/fa";
import classNames from "classnames";

const Categories = React.memo(({ activeCategory, items, onClickCategory }) => {
  const [state, setState] = React.useState({ toggle: false });

  const toggleMenu = () => {
    setState({ toggle: !state.toggle });
  };
  const { toggle } = state;
  return (
    <>
      <FaBars onClick={toggleMenu} className="bars" />
      <div
        className={classNames("categories", {
          active: toggle,
        })}
      >
        <FaTimes onClick={toggleMenu} className="fatimes" />
        <ul>
          <li
            className={activeCategory === null ? "active" : ""}
            onClick={() => onClickCategory(null)}
          >
            Все
          </li>
          {items &&
            items.map((name, index) => (
              <li
                className={activeCategory === index ? "active" : ""}
                onClick={() => onClickCategory(index)}
                key={`${name}_${index}`}
              >
                {name}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
});

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func,
};
Categories.defaultProps = { items: [] };

export default Categories;
