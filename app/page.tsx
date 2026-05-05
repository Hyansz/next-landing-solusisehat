import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import Team from "./components/Team";
import ServiceArea from "./components/ServiceArea";
import CTA from "./components/CTA";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Features />
            <Services />
            <Team />
            <ServiceArea />
            <CTA />
            <Testimonials />
            <Footer />
        </main>
    );
}
