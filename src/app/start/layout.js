import Footer from "@/components/Footer";
import StartNav from "@/components/StartNav";
import "../globals.css";

// src/app/start/layout.js
export default function StartLayout({ children }) {
  return (
    <html lang="en">
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
