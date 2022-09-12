import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Input = ({ value, onInput, onBlur, className, immidiateFocus }) => {
    const inputRef = useRef();

    useEffect(() => {
        if (immidiateFocus) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <input
            className={className}
            type="text"
            value={value}
            onInput={onInput}
            onBlur={onBlur}
            ref={inputRef}
        />
    );
};

Input.propTypes = {
    value: PropTypes.any.isRequired,
    onInput: PropTypes.func,
    onBlur: PropTypes.func,
    className: PropTypes.string,
    immidiateFocus: PropTypes.bool,
};

Input.defaultProps = {
    immidiateFocus: false,
};

export default Input;
