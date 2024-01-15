import {useForm} from 'react-hook-form';
import { useAuth } from '../../context/AuthContext'
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const register = () =>{

    const {register, handleSubmit, formState:{errors}}  = useForm();
    const {singnup, isAuthenticated, errors: registerErrors} = useAuth();
    const navigate = useNavigate()

    useEffect(() =>{
        if(isAuthenticated) navigate('/tasks')
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        singnup(values);
    });

    return(
        <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
           {
            registerErrors.map((errors, i) =>{
                <div className='bg-red-500 p-2 text-white' key={i}>
                    {errors}
                </div>
            })
           }
            <form onSubmit={onSubmit}>

                <input type="text" {...register('username', {required: true})} 
                    className='w-full bg-zinc-700 text-white  px-4 py-2 rounded-md my-2'
                    placeholder='Username'
                />
                {errors.username && <p className='text-red-500'>Username is required</p>}

                <input type="email" {...register('email', {required: true})} 
                    className='w-full bg-zinc-700 text-white  px-4 py-2 rounded-md my-2'
                    placeholder='Email'
                />
                {errors.email && <p className='text-red-500'>Email is required</p>}

                <input type="password" {...register('password', {required: true})} 
                    className='w-full bg-zinc-700 text-white  px-4 py-2 rounded-md my-2'
                    placeholder='Passowrd'
                />
                {errors.password && <p className='text-red-500'>Password is required</p>}
                
                <button type='submit' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</button>
            </form>
        </div>
    )
}

export default register;