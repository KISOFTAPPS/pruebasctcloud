import Footer from "./Footer";
import Navbar from "./Navbar";


const Layout = ({ children }) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
