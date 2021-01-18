import React from "react"
import PropTypes from "prop-types"

export default function DisableIcon({ disabled, onClick, Icon, disabledColor = "#000", className, ...otherProps }) {
    const { style: styleProps, ...remainingProps } = otherProps
    return (
        <div style={{ position: "relative" }} onClick={(e) => onClick(e)}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                {Icon}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" style={{ position: "absolute", width: "100%", height: "100%", left: "0", pointerEvents: "none",...styleProps }} fill={disabledColor} className={className} {...remainingProps}>
                    {disabled && <path d="M17.8.2c-.1-.1-.4-.1-.5 0L.2 17.3c-.1.1-.1.4 0 .5.1.1.4.1.5 0L17.8.7c.1-.1.1-.3 0-.5z" />}
                </svg>
            </div>

        </div>
    )
}
DisableIcon.propTypes = {
    disabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    Icon: PropTypes.element.isRequired,
    disabledColor: PropTypes.string,
    className: PropTypes.string
}