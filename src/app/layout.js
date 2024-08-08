import { K2D } from "next/font/google";
import Header from "./components/Header";
import "../styles/fonts.css";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const k2d = K2D({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={k2d.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
