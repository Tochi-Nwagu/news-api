import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <div className="sidebar">
        <img
          src={logoImg}
          height={'100px'}
          style={{ marginTop: '0px', objectFit: 'cover' }}
        />
        <nav>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link>
          <Link to="/register" className="nav-link">
            Register
          </Link>
          <Link to="/health" className="nav-link">
            Health
          </Link>
          <Link to="/business" className="nav-link">
            Business
          </Link>
          <Link to="/technology" className="nav-link">
            Technology
          </Link>
          <Link to="/sport" className="nav-link">
            Sport
          </Link>
          <Link to="/entertainment" className="nav-link">
            Entertainment
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
