import './form.css';
import { useState } from 'react';
import InputText from '../InputText';
import DropdownList from '../DropdownList';
import Button from '../Button';

const Form = () => {
    const times = [
        '',
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Mobile',
        'Inovação e Gestão'
    ];

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSubmitForm = (event) => {
        event.preventDefault();
        console.log('Form submitted ==>', name, role, image, team);
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
                    itens={times}
                    required={true}
                    selectValue={team}
                    onSelect={value => setTeam(value)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    );
};

export default Form;
