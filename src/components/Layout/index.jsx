import "./layout.css";
import Header from "../Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="layout_main">{children}</main>
    </>
  );
}

export default Layout;
