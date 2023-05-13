import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
    const teams = [
        {
            teamName: 'Programação',
            primaryColor: '#57C278',
            secondaryColor: '#D9F7E9'
        },
        {
            teamName: 'Front-End',
            primaryColor: '#82CFFA',
            secondaryColor: '#E8F8FF'
        },
        {
            teamName: 'Data Science',
            primaryColor: '#A6D157',
            secondaryColor: '#F0F8E2'
        },
        {
            teamName: 'Devops',
            primaryColor: '#E06B69',
            secondaryColor: '#FDE7E8'
        },
        {
            teamName: 'UX e Design',
            primaryColor: '#DB6EBF',
            secondaryColor: '#FAE9F5'
        },
        {
            teamName: 'Mobile',
            primaryColor: '#FFBA05',
            secondaryColor: '#FFF5D9'
        },
        {
            teamName: 'Inovação e Gestão',
            primaryColor: '#FF8A29',
            secondaryColor: '#FFEEDF'
        },
    ];
    const [collaborators, setCollaborators] = useState([]);

    const onCollaboratorAddition = (collaborator) => {
        setCollaborators([...collaborators, collaborator]);
    };

    return (
        <div className='App'>
            <Banner />
            <Form teams={teams.map(team => team.teamName)} onCollaboratorRegister={collaborator => onCollaboratorAddition(collaborator)} />
            {teams.map(team => <Team
                        key={team.teamName}
                        teamName={team.teamName}
                        primaryColor={team.primaryColor}
                        secondaryColor={team.secondaryColor}
                        collaborators={collaborators.filter(collaborator => collaborator.teamName === team.teamName)}
            />)}
            <Footer />
        </div>
    );
}

export default App;
