import './Collaborator.css';

const Collaborator = ({ name, role, image, headerColor }) => {
    return (
        <div className='collaborator'>
            <div className='header' style={{ backgroundColor: headerColor }}>
                <img src={image} alt={`Foto de ${name}`} />
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5 style={{ color: headerColor }}>{role}</h5>
            </div>
        </div>
    );
};

export default Collaborator;
