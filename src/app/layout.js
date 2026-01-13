import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata = { title: "Senu Modz | WhatsApp Bot Panels" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="p-6">{children}</main>
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
