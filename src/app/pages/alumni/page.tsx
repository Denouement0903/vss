
"use client"

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import JuffOckhuis from "@/app/components/AlumniOverview/JuffOckhuis";
import MnrJulies from "@/app/components/AlumniOverview/MnrJulies";


export default function Alumni() {
    return (
      <>
        <Navbar />
        <main className="min-h-screen my-auto">
        <div className="flex flex-row flex-wrap">
            <JuffOckhuis />
            <MnrJulies />
            <MnrJulies />
            <MnrJulies />
        </div>
        </main>
        <Footer />
      </>
    );
}