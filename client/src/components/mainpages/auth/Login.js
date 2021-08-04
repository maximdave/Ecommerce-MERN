import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  return (
    <div className='login-page'>
      <form>
        <input
          type='email'
          name='email'
          placeholder='Email'
          required
          value={user.email}
        />
      </form>
    </div>
  );
};

export default Login;
