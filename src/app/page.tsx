
"use client"
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Iframe from "./components/Iframe";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default function Home() {
    return (
      <>
        <Navbar />
        <main className="min-h-screen">
          <Hero />
          <Iframe />
        </main>
        <Footer />
      </>
    );
}
