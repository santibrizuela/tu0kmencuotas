import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";
import CartProvider from "@/providers/CartProvider";
import { Toaster } from "react-hot-toast";
import Contact from "./components/contact/Contact";
import WhatsappScroll from "./components/whatsappscroll/WhatsappScroll";
import VehicleForm from "./components/VehicleForm";

const poppins = Poppins({ subsets: ["latin"], weight:['400', '700'] });

export const metadata: Metadata = {
  title: "TU 0KM EN CUOTAS",
  description: "Organización dedicada a la asesoría de Plan de Ahorro Chevrolet.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={`${poppins.className}text-slate-700 bg-slate-100`}>
        <Toaster 
        toastOptions={{
          style: {
            background: "rgb(51 65 85)",
            color: "#fff",
          },
        }} />
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <NavBar/>
            <WhatsappScroll/>
            <main className="flex-grow">{children}</main>
            <Contact/>
            <Footer/>
          </div>
        </CartProvider>
        
      </body>
    </html>
  );
}
