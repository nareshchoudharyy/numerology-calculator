import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

const openSans = Open_Sans({
  weight: '400',
  subsets: ["latin"]
})

export const metadata = {
  title: "Numerology Calculator",
  description: "Discover the power of numbers with our advanced name numerology calculator. Explore the insights of Indian numerology with our easy-to-use tool. Calculate the vibrational energy of names instantly with our accurate numerology calculator.",

};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}