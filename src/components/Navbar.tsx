import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-forest-green p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/images/logo.png" 
            alt="Saint Daniels" 
            width={40} 
            height={40}
          />
          <span className="text-gold text-xl font-semibold">SAINT DANIELS</span>
        </Link>
        <button className="bg-gold px-6 py-2 rounded">
          Login
        </button>
      </div>
    </nav>
  );
} 