import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="ru">
      <body className="font-sans antialiased">
        <Navbar/>
        <main className="pt-20">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
