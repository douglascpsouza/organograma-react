import './DropdownList.css';

const DropdownList = (props) => {
    const { itens, label, required, selectValue, onSelect } = props;

    return (
        <div className='dropdown-list'>
            <label>{label}</label>
            <select value={selectValue} onChange={event => onSelect(event.target.value)} required={required} >
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
};

export default DropdownList;
