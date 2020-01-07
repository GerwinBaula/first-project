import React from "react";
import { Link } from "react-router-dom";

const Links = ({ links, activeClass, typeClass }) => {
  return (
    <ul className={`${typeClass}__link`}>
      {links.map(link => (
        <li key={link.text}>
          <Link
            to={link.route}
            className={
              link.active
                ? `login__link--text ${activeClass}`
                : `${typeClass}__link--text`
            }
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Links;
