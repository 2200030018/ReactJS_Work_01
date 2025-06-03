import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

export default function RootLayout() {
  return (
    <div className="flex min-h-screen bg-stone-900">
      {/* Fixed Navbar */}
      <div className="fixed left-0 top-0 h-screen z-50">
        <Navbar />
      </div>

      {/* Scrollable Main Content, with left margin to not overlap the navbar */}
      <div className="ml-96 flex-1 h-screen overflow-y-auto p-10 text-white">
        <Outlet />
      </div>
    </div>
  );
}
