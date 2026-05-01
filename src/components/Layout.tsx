import Navbar from "./Nav-bar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8fff6]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <Navbar />
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 w-full">{children}</main>

      {/* FOOTER */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
