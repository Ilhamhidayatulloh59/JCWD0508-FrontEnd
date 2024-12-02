import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "@/context/useSession";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "Blogger | %s",
    default: "Blogger",
  },
  description:
    "Berbagai informasi, berita, insights, hingga tips terbaru seputar dunia dan skill digital.",
  icons: {
    icon: "https://www.blogger.com/img/logo_blogger_40px_2x.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <Navbar />
          {children}
          <ToastContainer
            draggable
            closeOnClick
            autoClose={5000}
            theme="dark"
            position="bottom-right"
          />
        </SessionProvider>
      </body>
    </html>
  );
}
