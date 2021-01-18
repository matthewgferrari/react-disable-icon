function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import PropTypes from "prop-types";
export default function DisableIcon({
  disabled,
  onClick,
  Icon,
  disabledColor = "#000",
  className,
  ...otherProps
}) {
  const {
    style: styleProps,
    ...remainingProps
  } = otherProps;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    },
    onClick: e => onClick(e)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, Icon, /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 18",
    style: {
      position: "absolute",
      width: "100%",
      height: "100%",
      left: "0",
      pointerEvents: "none",
      ...styleProps
    },
    fill: disabledColor,
    className: className
  }, remainingProps), disabled && /*#__PURE__*/React.createElement("path", {
    d: "M17.8.2c-.1-.1-.4-.1-.5 0L.2 17.3c-.1.1-.1.4 0 .5.1.1.4.1.5 0L17.8.7c.1-.1.1-.3 0-.5z"
  }))));
}
DisableIcon.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  Icon: PropTypes.element.isRequired,
  disabledColor: PropTypes.string,
  className: PropTypes.string
};