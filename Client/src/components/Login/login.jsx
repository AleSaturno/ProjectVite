import { useNavigate } from 'react-router-dom';

const login = () =>{

    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate('/home');
    };
    return(
        <div>
            <h1 className='text-4xl font-bold'>Futuro Login Page</h1>
            <button onClick={redirectToHome}>Iniciar Sesion</button>
        </div>
    )
}

export default login;