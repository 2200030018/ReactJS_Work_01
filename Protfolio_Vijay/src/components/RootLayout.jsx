import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

export default function RootLayout(){
    return (
        <main className="flex h-screen bg-stone-900">
      <Navbar />
      <div className="flex-1 p-10 text-white">
        <Outlet/>
      </div>
    </main>
    );
}