import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Login = () => {

    const {signInUser } = useContext(AuthContext)

const handleLogin = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

  signInUser(email, password)
  .then(result=>{
    console.log(result.user)
  })

  .catch(error=>{
    console.log('Error:', error.message)
  })

}

    return (
        <div className='flex flex-col items-center mt-14'>
            <h2 className='font-bold text-3xl text-purple-600 mb-5' >Login Now!</h2>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
<p className='font-bold text-sm mt-4'>New to this Website? Please <Link to='/register' >Register</Link> </p>

    
        </div>
    );
};

export default Login;