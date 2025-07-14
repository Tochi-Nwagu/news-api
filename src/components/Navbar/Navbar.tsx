import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';

import { IoMenuSharp } from 'react-icons/io5';
import './Navbar.css';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    console.log('Menu isOpen:', !isOpen);
  };

  return (
    <div>
      <div className="navbar">
        {/* Deskop */}
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

            <Link to="/dashboard/health" className="nav-link">
              Health
            </Link>
            <Link to="/dashboard/business" className="nav-link">
              Business
            </Link>
            <Link to="/dashboard/technology" className="nav-link">
              Technology
            </Link>
            <Link to="/dashboard/sport" className="nav-link">
              Sports
            </Link>
            <Link to="/dashboard/entertainment" className="nav-link">
              Entertainment
            </Link>
          </nav>
        </div>
      </div>
      {/* obile view */}
      <div className="mobile-header">
        <img src={logoImg} height="100px" style={{ objectFit: 'cover' }} />
        <button className="menu-toggle" onClick={toggleMenu}>
          <IoMenuSharp />
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          <IoMdClose />
        </button>
        <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link
          to="/dashboard"
          className="linkStyle"
          onClick={() => setIsOpen(false)}
        >
          Dashboard
        </Link>

        <Link
          to="/dashboard/health"
          className="linkStyle"
          onClick={() => setIsOpen(false)}
        >
          Health
        </Link>
        <Link
          to="/dashboard/business"
          className="linkStyle"
          onClick={() => setIsOpen(false)}
        >
          Business
        </Link>
        <Link
          to="/dashboard/technology"
          className="linkStyle"
          onClick={() => setIsOpen(false)}
        >
          Technology
        </Link>
        <Link
          to="/dashboard/sport"
          className="linkStyle"
          onClick={() => setIsOpen(false)}
        >
          Sports
        </Link>
        <Link
          to="/dashboard/entertainment"
          className="linkStyle"
          onClick={() => setIsOpen(false)}
        >
          Entertainment
        </Link>
      </div>
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </div>
  );
};

export default Navbar;
