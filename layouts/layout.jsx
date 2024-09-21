import NavbarHome from "@/components/navbarHome";

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarHome />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
