/**
 * @copyright
 * @license Apache-2.0
 */

/**
 * Node modules
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary Button Component
 */
const ButtonPrimary = ({
    href,
    target = "_self",
    label,
    icon,
    classes
}) => {
    if (href) {
        return (
          <a
            href={href}
            target={target}
            className={`btn btn-primary ${classes}`}
          >
            {label}
            {icon ?
                <span className="material-symbols-rounded" aria-hidden="true">
                    {icon}
                </span>
                : undefined
            }
          </a>
        );
    } else {
        return (
          <button className={`btn btn-primary ${classes}`}>
            {label}
            {icon ?
                <span className="material-symbols-rounded" aria-hidden="true">
                    {icon}
                </span>
                : undefined
            }
          </button>
        );
    }
};

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
};


/**
 * Outline Button Component
 */
const ButtonOutline = ({
    href,
    target = "_self",
    label,
    icon,
    classes = "",
}) => {
    if (href) {
        return (
          <a
            href={href}
            target={target}
            className={`btn btn-outline ${classes}`}
          >
            {label}
            {icon && (
                <span className="material-symbols-rounded" aria-hidden="true">
                    {icon}
                </span>
            )}
          </a>
        );
    } else {
        return (
          <button className={`btn btn-outline ${classes}`}>
            {label}
            {icon && (
                <span className="material-symbols-rounded" aria-hidden="true">
                    {icon}
                </span>
            )}
          </button>
        );
    }
};

ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
};

export { 
    ButtonPrimary,
    ButtonOutline
};
