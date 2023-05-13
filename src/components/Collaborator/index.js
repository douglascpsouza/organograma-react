import './Collaborator.css';

const Collaborator = ({ name, role, image, primaryColor }) => {
    return (
        <div className='collaborator'>
            <div className='header' style={{ backgroundColor: primaryColor }}>
                <img src={image} alt={`Foto de ${name}`} />
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5 style={{ color: primaryColor }}>{role}</h5>
            </div>
        </div>
    );
};

export default Collaborator;
