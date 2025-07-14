import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import('./DashboardLayout.css');
const DashboardLayout = () => {
  return (
    <div
      className="layout-container"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      {/* Mobile menu should NOT be inside this layout */}
      <div style={{ display: 'flex', flex: 1 }} className="layout-body">
        <Navbar /> {/* Contains both sidebar and mobile menu */}
        <main className="main-content" style={{ flex: 1, padding: '20px' }}>
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardLayout;
