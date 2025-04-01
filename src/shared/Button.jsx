import PropTypes from "prop-types"

const Button = ({children,
                    version='primary',
                    type='button',
                    isDisable=false
}) => {
    return (
        <button type={type} disabled={isDisable} className={`app-btn app-btn-${version}`}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisable: PropTypes.bool,
}

export default Button;
