import Login from '../Auth/Login';
import logoImg from '../../assets/logo.png';
import './Home.css'; // ✅ Make sure this is imported

const Home = () => {
  return (
    <div className="homePage">
      <div className="login-section">
        <Login />
      </div>
      <div className="welcome-section">
        <img src={logoImg} alt="Checkpoint" className="logo-img" />
        <h1 className="welcome-heading">Welcome to Checkpoint News</h1>
        <p className="welcome-text">
          We’re thrilled to have you here. At Checkpoint News, we bring you
          fresh insights, news updates, and stories that matter — all in one
          place. Whether you're a business professional, a curious reader, or
          someone who simply loves staying informed, you're in the right spot.
        </p>
        <p className="welcome-text">Login to get started</p>
      </div>
    </div>
  );
};

export default Home;
