import Collaborator from '../Collaborator';
import './Team.css';

const Team = (props) => {
    const { collaborators, teamName, primaryColor, secondaryColor } = props;

    return (
        (collaborators.length > 0) && <section className='team' style={{ backgroundColor: secondaryColor }}>
            <h3 style={{ borderBottom: `4px solid ${primaryColor}` }}>{teamName}</h3>
            <div className='collaborators'>
                {collaborators.map(collaborator => <Collaborator
                    key={collaborator.name}
                    name={collaborator.name}
                    role={collaborator.role}
                    image={collaborator.image}
                    headerColor={primaryColor}
                />)}
            </div>
        </section>
    );
};

export default Team;
