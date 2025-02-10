
"use client"
import { FeaturedImage } from "./components/FeaturedImage";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import News from "./components/News";


export default function Home() {
    return (
      <>
        <Navbar />
        <main className="min-h-screen">
          <Hero />
          <News />
          <FeaturedImage />
        </main>
        <Footer />
      </>
    );
}
