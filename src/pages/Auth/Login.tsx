// import React from 'react';
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { User } from '../../type/type';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

const Login: React.FC = () => {
  // const [formData, setFormData] = useState<Omit<User, 'id'>>({
  //   username: '',
  //   email: '',
  //   password: '',
  // });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  //   //state variables for managing authentication state, email, password and error messages
  //     const [authing, setAuthing] = useState(false);

  //     // const [message, setMessage] = useState('');
  //     const [error, setError] = useState('');

  // // function to handle the register button click

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    //check if User exist
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    //If user exist
    if (matchedUser) {
      //retrive
      localStorage.setItem('currentUser', JSON.stringify(matchedUser));
      alert(`Welcome, ${matchedUser.username}`);
      navigate('/dashboard');
    } else {
      alert('User not found');
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };
  //Function to handle Login with email and password
  // const handleLogin = async(e: string) =>{
  //   e.preventDefault();
  // setAuthing(true);
  // setError('');

  //use firebase to sign in with email and password
  // signInWithEmailAndPassword(auth, email, password)
  // .then(response => {
  //   console.log(response.user.uid);
  //   navigate('/');
  // })
  // .catch(error =>{
  //   console.log(error);
  //   setError(error.message);
  //   setAuthing(false);
  // })

  // }

  return (
    <>
      {/* Left half of screen - Background styling */}

      {/* <div className="w-1/2 h-full flex flex bg-[#282c34] items-center justify-center"></div> */}

      {/* Right half of the screen - sign up form */}
      {/* <div className="w-1/2 h-full bg-[#1a1a1a]flex flex-col p-20 justify-center">
          <div className="w-full flex flex-col max-w-[450px] mx auto"> */}

      {/* Input fields for email, password and confirm password */}
      <div style={{ marginTop: '100px', paddingTop: '90px' }}>
        {/* Header section with title and welcome message */}
        <div className="mt-5">
          <p
            style={{
              textAlign: 'center',
              fontSize: '20px',
              fontWeight: 'bolder',
            }}
          >
            Welcome! Please enter your information below to begin.
          </p>
        </div>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title className="mb-4">Login</Card.Title>
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3" controlId="loginEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="loginPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Button variant="secondary" type="submit" className="w-100">
                    Login
                  </Button>
                </Form>

                <div className="mt-3 text-center">
                  <span>Don't have an account? </span>
                  {/* <Link to="/register">Register here</Link> */}
                  {/* <button className='Register-btn w-50' onClick={handleRegister}>Register</button> */}
                  <Button
                    variant="secondary"
                    type="submit"
                    className="w-50"
                    onClick={handleRegister}
                  >
                    Register
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;
