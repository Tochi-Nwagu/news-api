import Login from '../Auth/Login';
import logoImg from '../../assets/logo.png';

import('./Home.css');

const Home = () => {
  return (
    <div style={{ display: 'flex', height: '95vh' }}>
      <div style={{ width: '100%' }}>
        <Login />
      </div>

      <div style={{ backgroundColor: '#bbc3cb', width: '100%' }}>
        <img
          src={logoImg}
          alt="Check-point"
          height="100px"
          style={{ objectFit: 'cover' }}
        />
        <h1>Welcome to checkpoint News</h1>
      </div>
    </div>
  );
};

export default Home;
