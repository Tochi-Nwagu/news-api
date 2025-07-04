import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const MainLayout = () => {
  return (

    <div>
      <div style={{display: "flex"}}>
      <Navbar />
      <Outlet />
      </div>
      
      <Footer />
    </div>
    
  );
};

export default MainLayout;
