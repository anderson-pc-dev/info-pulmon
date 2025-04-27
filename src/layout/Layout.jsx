/* eslint-disable react/prop-types */
import Footer from "../components/footer/Footer";
import Head from "../components/nav/Head";
import "./Layout.scss"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head />
      <main className="layout-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;