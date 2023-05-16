import './DisplayButton.css';

const DisplayButton = ({ onHideMode }) => {
    return (
        <div className='display-button' onClick={() => onHideMode()} title='Show/Hide Form'>
            <img src='/images/button-add.png' alt='Show/Hide form section' />
        </div>
    );
};

export default DisplayButton;
