import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='flex flex-col items-center mt-14'>
            <h2  className='font-bold text-3xl text-purple-600 mb-5'>Register Now!</h2>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form  className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
        </div>

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
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
<p className='font-bold text-sm mt-4'>Already have an account? Please <Link to='/login' >Login</Link> </p>

    
        </div>

        
    );
};

export default Register;