import Login from '../Auth/Login';
import logoImg from '../../assets/logo.png';

import('./Home.css');

const Home = () => {
  return (
    <div style={{ display: 'flex', height: '97vh', marginBottom: '0px' }}>
      <div style={{ width: '100%' }}>
        <Login />
      </div>

      <div
        style={{
          backgroundColor: '#710955',
          width: '100%',
        }}
      >
        <img
          src={logoImg}
          alt="Check-point"
          height="100px"
          style={{ objectFit: 'cover' }}
        />
        <h1
          style={{
            color: 'white',
            textAlign: 'center',
            paddingTop: '60px',
            marginTop: '80px',
          }}
        >
          Welcome to Checkpoint News
        </h1>
        <p className="welcome-text">
          We’re thrilled to have you here. At Checkpoint News, we bring you
          fresh insights, news updates, and stories that matter — all in one
          place. Whether you're a business professional, a curious reader, or
          someone who simply loves staying informed, you're in the right spot.
        </p>
      </div>
    </div>
  );
};

export default Home;
