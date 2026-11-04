import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Phones from "./pages/Phones";
import Compare from "./pages/Compare";
import Guide from "./pages/Guide";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </main>
      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        © 2026 MobileHub · Sample data for demo purposes
      </footer>
    </>
  );
}
