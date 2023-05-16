import './Input.css';

const Input = (props) => {
    const { inputValue, onInputChange, label, placeholder, required = false, type = 'text' } = props;

    return (
        <div className='input'>
            <label>{label}</label>
            <input
                value={inputValue}
                onChange={event => onInputChange(event.target.value)}
                placeholder={placeholder}
                required={required}
                type={type}
            />
        </div>
    );
};

export default Input;
