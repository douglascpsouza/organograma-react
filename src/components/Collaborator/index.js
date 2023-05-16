import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Collaborator.css';

const Collaborator = ({ collaborator, headerColor, onDelete, onMarkAsFavorite }) => {
    function markFavorite() {
        onMarkAsFavorite(collaborator.id);
    }
    const favoriteProps = {
        color: '#B22222',
        size: 25,
        onClick: markFavorite
    }

    return (
        <div className='collaborator'>
            <AiFillCloseCircle
                className='delete'
                color='darkslateblue'
                size={25}
                onClick={() => onDelete(collaborator.id)}
            />
            <div className='header' style={{ backgroundColor: headerColor }}>
                <img src={collaborator.image} alt={`Foto de ${collaborator.name}`} />
            </div>
            <div className='footer'>
                <h4>{collaborator.name}</h4>
                <h5 style={{ color: headerColor }}>{collaborator.role}</h5>
                <div className='favorite'>
                    {collaborator.marked
                        ? <AiFillHeart {...favoriteProps} />
                        : <AiOutlineHeart {...favoriteProps} />}
                </div>
            </div>
        </div>
    );
};

export default Collaborator;
