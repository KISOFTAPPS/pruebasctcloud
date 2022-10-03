import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    return (
        <div className="h-screen">
            <div className="flex flex-col h-screen rounded-3xl overflow-hidden p-10 pl-0">
                <div className="flex h-full">
                    <Sidebar />

                    <main className="flex flex-col rounded-3xl bg-slate-200 w-full overflow-hidden px-5 gap-5" style={{ paddingBottom: "120px" }}>
                        <Navbar />
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Layout;
