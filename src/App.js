import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';
import DisplayButton from './components/DisplayButton';

function App() {
    const [teams, setTeams] = useState([
        {
            id: uuidv4(),
            teamName: 'Programação',
            teamColor: '#57C278',
        },
        {
            id: uuidv4(),
            teamName: 'Front-End',
            teamColor: '#82CFFA',
        },
        {
            id: uuidv4(),
            teamName: 'Data Science',
            teamColor: '#A6D157',
        },
        {
            id: uuidv4(),
            teamName: 'Devops',
            teamColor: '#E06B69',
        },
        {
            id: uuidv4(),
            teamName: 'UX e Design',
            teamColor: '#DB6EBF',
        },
        {
            id: uuidv4(),
            teamName: 'Mobile',
            teamColor: '#FFBA05',
        },
        {
            id: uuidv4(),
            teamName: 'Inovação e Gestão',
            teamColor: '#FF8A29',
        },
    ]);

    const [collaborators, setCollaborators] = useState([
        {
            id: uuidv4(),
            name: 'JULIANA AMOASEI',
            role: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            teamName: teams[0].teamName
        },
        {
            id: uuidv4(),
            marked: false,
            name: 'DANIEL ARTINE',
            role: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            teamName: teams[0].teamName
        },
        {
            id: uuidv4(),
            marked: false,
            name: 'GUILHERME LIMA',
            role: 'Desenvolvedor Python e JavaScript',
            image: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            teamName: teams[0].teamName
        },
        {
            id: uuidv4(),
            marked: false,
            name: 'DOUGLAS SOUZA',
            role: 'Dev Jr',
            image: 'https://github.com/douglascpsouza.png',
            teamName: teams[0].teamName
        },
        {
            id: uuidv4(),
            marked: false,
            name: 'JULIANA AMOASEI',
            role: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            teamName: teams[1].teamName
        },
        {
            id: uuidv4(),
            marked: false,
            name: 'DANIEL ARTINE',
            role: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            teamName: teams[1].teamName
        },
        {
            id: uuidv4(),
            marked: false,
            name: 'GUILHERME LIMA',
            role: 'Desenvolvedor Python e JavaScript',
            image: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            teamName: teams[1].teamName
        },
        {
            id: uuidv4(),
            marked: false,
            name: 'PAULO SILVEIRA',
            role: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            teamName: teams[1].teamName
        },
        {
            id: uuidv4(),
            marked: false,
            name: 'JULIANA AMOASEI',
            role: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            teamName: teams[2].teamName
        },
        {
            id: uuidv4(),
            marked: false,
            name: 'DANIEL ARTINE',
            role: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            teamName: teams[2].teamName
        },
        {
            id: uuidv4(),
            marked: false,
            name: 'GUILHERME LIMA',
            role: 'Desenvolvedor Python e JavaScript',
            image: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            teamName: teams[2].teamName
        },
        {
            id: uuidv4(),
            marked: false,
            name: 'PAULO SILVEIRA',
            role: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            teamName: teams[2].teamName
        },
        {
            id: uuidv4(),
            marked: false,
            name: 'JULIANA AMOASEI',
            role: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            teamName: teams[3].teamName
        },
        {
            id: uuidv4(),
            marked: false,
            name: 'DANIEL ARTINE',
            role: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            teamName: teams[3].teamName
        },
        {
            id: uuidv4(),
            marked: false,
            name: 'GUILHERME LIMA',
            role: 'Desenvolvedor Python e JavaScript',
            image: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            teamName: teams[3].teamName
        },
        {
            id: uuidv4(),
            marked: false,
            name: 'PAULO SILVEIRA',
            role: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            teamName: teams[4].teamName
        },
        {
            id: uuidv4(),
            marked: false,
            name: 'JULIANA AMOASEI',
            role: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            teamName: teams[4].teamName
        },
        {
            id: uuidv4(),
            marked: false,
            name: 'DANIEL ARTINE',
            role: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            teamName: teams[4].teamName
        },
        {
            id: uuidv4(),
            marked: false,
            name: 'GUILHERME LIMA',
            role: 'Desenvolvedor Python e JavaScript',
            image: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            teamName: teams[5].teamName
        },
        {
            id: uuidv4(),
            marked: false,
            name: 'PAULO SILVEIRA',
            role: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            teamName: teams[5].teamName
        },
        {
            id: uuidv4(),
            marked: false,
            name: 'JULIANA AMOASEI',
            role: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            teamName: teams[5].teamName
        },
        {
            id: uuidv4(),
            marked: false,
            name: 'DANIEL ARTINE',
            role: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            teamName: teams[6].teamName
        },
        {
            id: uuidv4(),
            marked: false,
            name: 'GUILHERME LIMA',
            role: 'Desenvolvedor Python e JavaScript',
            image: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            teamName: teams[6].teamName
        },
        {
            id: uuidv4(),
            marked: false,
            name: 'PAULO SILVEIRA',
            role: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            teamName: teams[6].teamName
        },
    ]);

    const [displayMode, setDisplayMode] = useState('');

    function deleteCollaborator(id) {
        setCollaborators(collaborators.filter(collaborator => collaborator.id !== id));
    }

    function changeTeamColor(color, id) {
        setTeams(teams.map(team => {
            if (team.id === id) {
                team.teamColor = color;
            }
            return team;
        }));
    }

    function registerNewTeam(newTeam) {
        setTeams([...teams, { ...newTeam, id: uuidv4() }]);
    }

    function registerNewCollaborator(collaborator) {
        setCollaborators([...collaborators, { ...collaborator, id: uuidv4(), marked: false }]);
    }

    function setUnsetFavorite(id) {
        setCollaborators(collaborators.map(collaborator => {
            if (collaborator.id === id) {
                collaborator.marked = !collaborator.marked;
            }
            return collaborator;
        }));
    }

    function setUnsetHideMode() {
        console.log(displayMode);
        displayMode === 'none' ? setDisplayMode('') : setDisplayMode('none');
    }

    return (
        <div>
            <Banner />
            <Form
                teams={teams.map(team => team.teamName)}
                onCollaboratorRegister={collaborator => registerNewCollaborator(collaborator)}
                onDisplayMode={displayMode}
                onTeamRegister={registerNewTeam}
            />
            <section className='teams'>
                <h1>Minha Organização</h1>
                <DisplayButton onHideMode={setUnsetHideMode} />
                {teams.map((team, index) =>
                    <Team
                        key={index}
                        team={team}
                        onColorChange={changeTeamColor}
                        onDelete={deleteCollaborator}
                        onMarkAsFavorite={setUnsetFavorite}
                        collaborators={collaborators.filter(collaborator => collaborator.teamName === team.teamName)}
                    />)
                }
            </section>
            <Footer />
        </div>
    );
}

export default App;
