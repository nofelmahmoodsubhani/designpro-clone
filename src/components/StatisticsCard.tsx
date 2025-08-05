import Image from 'next/image';

interface StatItem {
  iconSrc: string;
  number: string;
  label: string;
}

export default function StatisticsCard() {
  const stats: StatItem[] = [
    {
      iconSrc: "/users-icon.png.png",
      number: "11K",
      label: "Users"
    },
    {
      iconSrc: "/likes-icon.png.png",
      number: "400+",
      label: "Likes"
    },
    {
      iconSrc: "/reviews-icon.png.png",
      number: "13K",
      label: "UI Reviews"
    }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
             <div 
         className="bg-white shadow-lg px-5 py-4 border border-border"
         style={{
           borderRadius: '16px',
           boxShadow: 'var(--shadow-lg)',
         }}
       >
                 <div className="flex items-center justify-between">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center" style={{ gap: 'var(--space-4)' }}>
              <div>
                                 <Image
                   src={stat.iconSrc}
                   alt={stat.label}
                   width={22}
                   height={22}
                   priority
                 />
              </div>
              <div className="flex flex-col">
                                 <div 
                   className="font-semibold"
                   style={{
                     fontFamily: 'var(--font-body)',
                     fontWeight: 600,
                     fontSize: '1.125rem',
                     color: '#000000',
                   }}
                 >
                  {stat.number}
                </div>
                                 <div 
                   style={{
                     fontFamily: 'var(--font-body)',
                     fontWeight: 400,
                     fontSize: '0.75rem',
                     color: '#6B7280',
                   }}
                 >
                  {stat.label}
                </div>
              </div>
                             {index < stats.length - 1 && (
                 <div 
                   className="w-px h-8 bg-border mx-4"
                   style={{ marginLeft: 'var(--space-4)', marginRight: 'var(--space-4)' }}
                 />
               )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 