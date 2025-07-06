import Login from '../Auth/Login';
import logoImg from '../../assets/logo.png';

import('./Home.css');

const Home = () => {
  return (
    <div style={{ display: 'flex', height: '95vh' }}>
      <div style={{ width: '100%' }}>
        <Login />
      </div>

      <div style={{ backgroundColor: '#710955', width: '100%' }}>
        <img
          src={logoImg}
          alt="Check-point"
          height="100px"
          style={{ objectFit: 'cover' }}
        />
        <h1 style={{color: 'white'}}>Welcome to Checkpoint News</h1>
      </div>
    </div>
  );
};

export default Home;
