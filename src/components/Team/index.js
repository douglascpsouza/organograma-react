import hexToRgba from 'hex-to-rgba';
import Collaborator from '../Collaborator';
import './Team.css';

const Team = ({ collaborators, onDelete, onColorChange, onMarkAsFavorite, team }) => {
    return (
        // (collaborators.length > 0) && <section className='team' style={{ backgroundColor: hexToRgba(team.teamColor, '0.4') }}>
        <section className='team' style={{ backgroundColor: hexToRgba(team.teamColor, '0.4') }}>
            <input 
                className='input-color'
                onChange={event => onColorChange(event.target.value, team.id)}
                value={team.teamColor}
                type='color'
            />
            <h3 style={{ borderBottom: `4px solid ${team.teamColor}` }}>{team.teamName}</h3>
            <div className='collaborators'>
                {collaborators.map((collaborator, index) => {
                    return (
                        <Collaborator
                            key={index}
                            collaborator={collaborator}
                            headerColor={team.teamColor}
                            onDelete={onDelete}
                            onMarkAsFavorite={onMarkAsFavorite}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Team;
