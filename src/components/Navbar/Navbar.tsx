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
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
          {/* <Link to="/about" className="nav-link">
            About
          </Link> */}
          <Link to="/dashboard/dashboard/health" className="nav-link">
            Health
          </Link>
          <Link to="/dashboard/dashboard/business" className="nav-link">
            Business
          </Link>
          <Link to="/dashboard/dashboard/technology" className="nav-link">
            Technology
          </Link>
          <Link to="/dashboard/dashboard/sport" className="nav-link">
            Sports
          </Link>
          <Link to="/dashboard/dashboard/entertainment" className="nav-link">
            Entertainment
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
