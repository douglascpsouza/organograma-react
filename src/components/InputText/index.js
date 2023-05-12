import './InputText.css';

const InputText = (props) => {
    const { inputValue, onInputChange, label, placeholder, required } = props;

    return (
        <div className='input-text'>
            <label>{label}</label>
            <input 
                value={inputValue}
                onChange={event => onInputChange(event.target.value)}
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
};

export default InputText;
