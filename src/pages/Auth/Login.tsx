// import React from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  //Initialize firebase authentication and navigation
  const auth = getAuth();
  const navigate = useNavigate();

  //state variables for managing authentication state, email, password and error messages
    const [authing, setAuthing] = useState(false);
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [message, setMessage] = useState('');
    const [error, setError] = useState('');

// function to handle the register button click
 const handleRegister= () =>{
  navigate('/register');
 }

//Function to handle Login with email and password
    const handleLogin = async(e: string) =>{
      e.preventDefault();
    setAuthing(true);
    setError('');
    

    //use firebase to sign in with email and password
signInWithEmailAndPassword(auth, email, password)
.then(response => {
  console.log(response.user.uid);
  navigate('/');
})
.catch(error =>{
  console.log(error);
  setError(error.message);
  setAuthing(false);
})

}

return <>
<div className='w-full h-screen flex'>
{/* //Left half of screen - Background styling */}

<div className='w-1/2 h-full flex flex bg-[#282c34] items-center justify-center'>
</div>

{/* Right half of the screen - sign up form */}
<div className='w-1/2 h-full bg-[#1a1a1a]flex flex-col p-20 justify-center'>
<div className='w-full flex flex-col max-w-[450px] mx auto'>

{/* // Header section with title and welcome message */}
<div className='w-full flex flex-col mb-10 text-white'>
  <h3 className='text-4x1 font-bold mb-2'>Login</h3>
  <p className='text-lg mb-4'> Welcome! Please enter your information below to begin.</p>
</div>

{/* Input fields for email, password and confirm password */}
<div className='formContent' >
     <form className='log' onSubmit={handleLogin}>
       <input
          type='email'
          className=''
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
      <input
          type='password'
          placeholder='Enter your password'
          className=''
          value={password}
          onChange={(e)=>setPassword(e.target.value)}/>
     </form>

{/* Button to log in with email and password */}
<div className=''>
  <button>Login</button>

     <p>Don't have an account?</p>
<button type='submit' onClick={(e)=>handleRegister}>Register</button>

</div>

</div>
   </div>;
</div>
   </div>

   </>
};

 
   
export default Login;
