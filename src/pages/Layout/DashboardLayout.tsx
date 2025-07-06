import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const DashboardLayout = () => {
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

export default DashboardLayout;
