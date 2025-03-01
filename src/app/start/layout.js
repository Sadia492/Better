import Footer from "@/components/Footer";
import StartNav from "@/components/StartNav";
import "../globals.css";
import Head from "next/head";

// src/app/start/layout.js
export default function StartLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body>
        <div className="bg-[#FEFCFA]">
          <StartNav /> {/* Custom Navbar for Start Page */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
