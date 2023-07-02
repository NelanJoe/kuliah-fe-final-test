import Footer from "../Footer";
import Navbar from "../Navbar";
import Container from "../ui/Container";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
