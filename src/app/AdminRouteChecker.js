'use client';

import { usePathname } from "next/navigation";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function AdminRouteChecker({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");
  
  return (
    <>
      {!isAdminRoute && <Navbar />}
      {children}
      {!isAdminRoute && <Footer />}
    </>
  );
}