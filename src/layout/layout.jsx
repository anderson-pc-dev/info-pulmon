import Head from "../components/Nav/Head";
import "./Layout.css"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head />
      <main className="layout-content">{children}</main>
    </div>
  );
};

export default Layout;