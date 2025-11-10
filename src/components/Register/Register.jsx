// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
// import { auth } from '../../firebase.init';
import { Navigate } from 'react-router';

const Register = () => {

    const { createUser } = use(AuthContext);
    const Navigate = useNavigate();

const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    // createUserWithEmailAndPassword(auth, email, password)
    // .then (result => {
    //     console.log(result.user);
    // })
    // .catch(error => {
    //     console.error(error);
    // })

    createUser(email, password)
    .then(result => {
        console.log(result.user);
        Navigate('/');
    })
    .catch(error => {
        console.error(error);
    })

}

    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl mt-12">
            <h1 className="text-3xl font-bold my-5 text-center">Register now!</h1>
            <div className="card-body">
                <form onSubmit={handleRegister} className="space-y-4">
                    <label className="label">Name</label>
                    <input type="text" className="input" name='name' placeholder="name" required autoComplete='name' />
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" required autoComplete='email' />
                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" required autoComplete='current-password' />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-primary w-full mt-4">Register</button>
                </form>
                <p>Already have an account? <Link className='text-blue-400 underline' to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;