/* eslint-disable react/prop-types */
import { Outlet } from 'react-router';
import Footer from "../components/footer/Footer";
import Head from "../components/nav/Head";
import "./Layout.scss"

const Layout = () => {
  return (
    <div className="layout">
      <Head />
      <main className="layout-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;