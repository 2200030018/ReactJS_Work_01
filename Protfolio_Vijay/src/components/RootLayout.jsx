import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    if (!sessionStorage.getItem("reloaded")) {
      sessionStorage.setItem("reloaded", "true");
      window.location.reload();
    }
  }, []);
  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-gradient-to-br from-black to-green-950">
      <Navbar />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-4 pt-20 sm:pt-4 sm:ml-72 text-white">
        <Outlet />
      </main>
    </div>
  );
}
