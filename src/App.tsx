import Navbar from "./components/Navbar.tsx";
import Home from "./components/Home.tsx";
import Products from "./components/Products.tsx";
import FAQs from "./components/FAQs.tsx";
import Footer from "./components/Footer.tsx";

function App() {

    return (
        <main className="bg-gray-950 pt-14 min-h-screen overflow-hidden">
            <Navbar />
            <Home />
            <Products />
            <FAQs />
            <Footer />
        </main>
    )
}

export default App
