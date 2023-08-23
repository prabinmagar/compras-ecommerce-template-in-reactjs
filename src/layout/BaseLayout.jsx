import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components/common';
import SideNavigation from '../components/common/SideNavigation';

const BaseLayout = () => {
  return (
    <>
    <Header />
    <SideNavigation />
    <Outlet />
    <Footer />
    </>
  )
}

export default BaseLayout
