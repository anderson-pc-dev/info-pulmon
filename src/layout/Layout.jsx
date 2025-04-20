/* eslint-disable react/prop-types */
import Head from "../components/nav/Head";
import "./Layout.scss"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head />
      <main className="layout-content">{children}</main>
    </div>
  );
};

export default Layout;