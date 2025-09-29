import {type FormEvent, useState} from "react";

interface IFormProps {
    username: string;
    password: string;
}

const FormComponent = () => {

    const [formState, setFormState] = useState<IFormProps>({
        username: 'foobar',
        password: '1111'
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = {
            username: formState.username,
            password: formState.password
        };
        console.log(user);

    };

    // const handleUsernameChange = (e: FormEvent<HTMLInputElement>) => {
    //     const input = e.target as HTMLInputElement;
    //     console.log(input.value);
    //     setFormState({...formState, username: input.value});
    // };
    //
    // const handlePasswordChange = (e: FormEvent<HTMLInputElement>) => {
    //     const input = e.target as HTMLInputElement;
    //     console.log(input.value);
    //     setFormState({...formState, password: input.value});
    // };

    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        console.log(input.name);
        setFormState({...formState, [input.name]: input.value});
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name={'username'} placeholder={'username'} value={formState.username} onChange={handleInputChange}/>
                <input type="text" name={'password'} placeholder={'password'} value={formState.password} onChange={handleInputChange}/>
                <button>send</button>
            </form>
        </div>
    );
};

export default FormComponent;
