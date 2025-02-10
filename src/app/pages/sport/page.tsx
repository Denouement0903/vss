
"use client"

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import SportsHero from "@/app/components/SportHero";

export default function Sport() {
    return (
      <>
        <Navbar />
        <main className="min-h-screen">
          <SportsHero />
        </main>
        <Footer />
      </>
    );
}
