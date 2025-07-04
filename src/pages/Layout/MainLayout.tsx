import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const MainLayout = () => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'stretch',
          flex: '1',
          gap: '20px',
        }}
      >
        <Navbar />
        <div style={{ flex: 1 }}>
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
