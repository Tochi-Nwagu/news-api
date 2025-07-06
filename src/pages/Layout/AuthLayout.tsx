import { Link, Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const AuthLayout = () => {
  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default AuthLayout;
