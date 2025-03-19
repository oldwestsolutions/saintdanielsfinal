export default function Hero() {
  return (
    <section className="bg-forest-green text-white py-20">
      <div className="container mx-auto flex items-center gap-12">
        <div className="w-1/2">
          <img 
            src="/images/royal-portrait.jpg" 
            alt="Royal Healthcare" 
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-6xl font-bold text-gold mb-6">
            ROYAL<br />HEALTHCARE
          </h1>
          <p className="text-xl mb-8">
            Earn points with every healthcare decision and redeem them for exclusive rewards. Experience healthcare fit for royalty with Saint Daniels.
          </p>
          <button className="bg-gold text-forest-green px-8 py-3 rounded-md text-lg font-semibold">
            JOIN THE KINGDOM
          </button>
        </div>
      </div>
    </section>
  );
} 