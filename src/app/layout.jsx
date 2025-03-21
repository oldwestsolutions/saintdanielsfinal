import { Inter } from 'next/font/google';
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Saint Daniels Healthcare Rewards",
  description: "Healthcare rewards fit for royalty",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
} 