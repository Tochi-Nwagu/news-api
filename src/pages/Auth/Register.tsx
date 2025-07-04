//import React from 'react';
import React from 'react';
import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Register = () => {
const [email,setEmail] = useState('');
const[password, setPassword] = useState('');
const [loginError, setLoginError] = useState('');

const auth = getAuth(app);
const navigate = useNavigate()


  return <div>
    <form>
      <input
      type='text'
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      placeholder='Enter your email'
      />
      <input
      type='password'
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      placeholder='Enter your password'
      />
      <button type='submit'>Submit</button>
    </form>


  </div>;
};

export default Register;
