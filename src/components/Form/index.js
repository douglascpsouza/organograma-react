import './form.css';
import { useState } from 'react';
import InputText from '../InputText';
import DropdownList from '../DropdownList';
import Button from '../Button';

const Form = (props) => {
    const { onCollaboratorRegister, teams } = props;

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [teamName, setTeamName] = useState('');

    const onSubmitForm = (event) => {
        event.preventDefault();
        onCollaboratorRegister({ name, role, image, teamName });
        setName('');
        setRole('');
        setImage('');
        setTeamName('');
    };

    return (
        <section className='form'>
            <form onSubmit={onSubmitForm}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText
                    label='Nome'
                    placeholder='Digite seu nome'
                    required={true}
                    inputValue={name}
                    onInputChange={value => setName(value)}
                />
                <InputText
                    label='Cargo'
                    placeholder='Digite seu cargo'
                    required={true}
                    inputValue={role}
                    onInputChange={value => setRole(value)}
                />
                <InputText
                    label='Imagem'
                    placeholder='Digite o endereço da imagem'
                    inputValue={image}
                    onInputChange={value => setImage(value)}
                />
                <DropdownList
                    label='Time'
                    items={teams}
                    required={true}
                    selectValue={teamName}
                    onSelect={value => setTeamName(value)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    );
};

export default Form;
