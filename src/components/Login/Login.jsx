import React from 'react';
import { Link } from 'react-router';

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl mt-12">
            <h1 className="text-3xl font-bold my-5 text-center">Login now!</h1>
            <div className="card-body">
                <form onSubmit={handleLogin} className="space-y-4">
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email"  required autoComplete='email' />
                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" required autoComplete='password' />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-primary mt-4">Login</button>
                </form>
                <p>New to this website? <Link className='text-blue-400 underline' to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;