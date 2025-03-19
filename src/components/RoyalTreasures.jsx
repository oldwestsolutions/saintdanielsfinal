import Image from 'next/image';

export default function RoyalTreasures() {
  const treasures = [
    {
      icon: '/images/icons/crown.png',
      title: 'Royal Points',
      description: 'Earn points with every healthcare visit and decision',
      points: '500 pts'
    },
    {
      icon: '/images/icons/shield.png',
      title: 'Health Shield',
      description: 'Premium coverage for comprehensive care',
      points: '1000 pts'
    },
    {
      icon: '/images/icons/scepter.png',
      title: 'Wellness Rewards',
      description: 'Redeem points for exclusive health benefits',
      points: '750 pts'
    },
    {
      icon: '/images/icons/throne.png',
      title: 'Royal Treatment',
      description: 'VIP healthcare services and priority access',
      points: '1500 pts'
    }
  ];

  return (
    <section style={{ backgroundColor: '#E5E2D9', padding: '5rem 0' }}>
      <div className="container">
        <h2 className="text-center mb-5" style={{ 
          color: '#1B3B21',
          fontSize: '2.5rem',
          fontWeight: '600',
          fontFamily: 'Crimson Text, serif'
        }}>
          ROYAL TREASURES
        </h2>
        
        <div className="row g-4">
          {treasures.map((treasure, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="treasure-card h-100">
                <div className="card-body text-center">
                  <div className="mb-4" style={{ height: '80px', position: 'relative' }}>
                    <Image
                      src={treasure.icon}
                      alt={treasure.title}
                      width={60}
                      height={60}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <h3 style={{ 
                    color: '#1B3B21',
                    fontSize: '1.5rem',
                    marginBottom: '1rem',
                    fontWeight: '600'
                  }}>
                    {treasure.title}
                  </h3>
                  <p className="text-muted mb-3">
                    {treasure.description}
                  </p>
                  <span className="points-badge">
                    {treasure.points}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 