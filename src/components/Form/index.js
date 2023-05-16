import './Form.css';
import { useState } from 'react';
import Input from '../Input';
import DropdownList from '../DropdownList';
import Button from '../Button';

const Form = (props) => {
    const { onCollaboratorRegister, onDisplayMode, onTeamRegister, teams } = props;

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [teamName, setTeamName] = useState('');
    const [newTeamName, setNewTeamName] = useState('');
    const [newTeamColor, setNewTeamColor] = useState('');

    const onSubmitCollaboratorForm = (event) => {
        event.preventDefault();
        onCollaboratorRegister({ name, role, image, teamName });
        setName('');
        setRole('');
        setImage('');
        setTeamName('');
    };

    const onSubmitTeamForm = (event) => {
        event.preventDefault();
        onTeamRegister({ teamName: newTeamName, teamColor: newTeamColor });
        setNewTeamName('');
        setNewTeamColor('');
    };

    const formDisplayMode = onDisplayMode || 'flex';

    return (
        <section className='form-container' style={{display: formDisplayMode}}>
            <form className='form' onSubmit={onSubmitCollaboratorForm}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Input
                    label='Nome'
                    placeholder='Digite seu nome'
                    required
                    inputValue={name}
                    onInputChange={value => setName(value)}
                />
                <Input
                    label='Cargo'
                    placeholder='Digite seu cargo'
                    required
                    inputValue={role}
                    onInputChange={value => setRole(value)}
                />
                <Input
                    label='Imagem'
                    placeholder='Digite o endereço da imagem'
                    inputValue={image}
                    onInputChange={value => setImage(value)}
                />
                <DropdownList
                    label='Time'
                    items={teams}
                    required
                    selectValue={teamName}
                    onSelect={value => setTeamName(value)}
                />
                <Button>Criar Card</Button>
            </form>

            <form className='form' onSubmit={onSubmitTeamForm}>
                <h2>Preencha os dados para criar um novo Time</h2>
                <Input
                    label='Nome do Time'
                    placeholder='Digite o nome do Time'
                    required
                    inputValue={newTeamName}
                    onInputChange={value => setNewTeamName(value)}
                />
                <Input
                    label='Cor'
                    placeholder='Digite a cor do Time'
                    required
                    type='color'
                    inputValue={newTeamColor}
                    onInputChange={value => setNewTeamColor(value)}
                />
                <Button>Criar Time</Button>
            </form>
        </section>
    );
};

export default Form;
