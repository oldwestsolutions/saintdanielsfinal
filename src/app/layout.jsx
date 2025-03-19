import { Playfair_Display } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Saint Daniels Healthcare Rewards",
  description: "Healthcare rewards fit for royalty",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  );
} 