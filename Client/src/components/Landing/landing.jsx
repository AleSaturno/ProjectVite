import { useNavigate } from 'react-router-dom';

const landing = () =>{

    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate('/home');
    };
    return(
        <div>
            <h1>Futuro Landing Page</h1>
            <button onClick={redirectToHome}>Iniciar Sesion</button>
        </div>
    )
}

export default landing;