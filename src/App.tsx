import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import {Outlet} from "react-router-dom";

function App() {

    return (
        <main className="bg-gray-950 pt-14 min-h-screen overflow-hidden">
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    )
}

export default App
