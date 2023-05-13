import './DropdownList.css';

const DropdownList = (props) => {
    const { items, label, required, selectValue, onSelect } = props;

    return (
        <div className='dropdown-list'>
            <label>{label}</label>
            <select value={selectValue} onChange={event => onSelect(event.target.value)} required={required} >
                {items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
};

export default DropdownList;
