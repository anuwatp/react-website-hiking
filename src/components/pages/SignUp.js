import React from 'react';
import '../../App.css';
import Footer from '../Footer';

function SignUp() {
  return (
    <>
      <div className='form_container'>
        <form className='form-sign_up' autoComplete='off'>
          <h1>Sign Up</h1>
          <div className='sign-up-guest'>
            Or log in as
        <a href='#'> guest</a>
          </div>
          <div className='form-group'>
            <label for='name'>Name</label>
            <input type='text' id='name' name='name' required></input>
          </div>
          <div className='form-group'>
            <label for='email'>Email</label>
            <input type='email' id='email' name='email' required></input>
          </div>
          <div className='form-group'>
            <label for='password'>Password</label>
            <input type='password' id='password' name='password' required></input>
          </div>
          <div className='form-group'>
            <label for='confirm_password'>Confirm Password</label>
            <input type='password' id='confirm_password' name='confirm_password' required></input>
          </div>
          <input className='btn btn--submit' type='submit' value='Sign Up' />
        </form>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;