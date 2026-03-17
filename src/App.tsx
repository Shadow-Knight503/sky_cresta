import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import {Outlet} from "react-router-dom";
import {useRef} from "react";

function App() {
    const footerRef = useRef<HTMLDivElement>(null)

    const scrollToFooter = () => {
        footerRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'end' // Aligns the end of the element with the end of the viewport
        });
    };

    return (
        <main className="bg-back pt-14 min-h-screen overflow-hidden">
            <Navbar scrollToFooter={scrollToFooter} />
            <Outlet />
            <Footer ref={footerRef} />
        </main>
    )
}

export default App
