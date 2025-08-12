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
           borderRadius: 'var(--radius-2xl)',
           boxShadow: 'var(--shadow-lg)',
         }}
       >
                 <div className="grid grid-cols-3 gap-6">
          {stats.map((stat, index) => (
                         <div 
               key={index} 
               className={`flex items-center justify-center ${index < stats.length - 1 ? 'border-r border-border pr-6' : ''}`}
               style={{ gap: 'var(--space-4)' }}
             >
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
                     fontWeight: 'var(--font-weight-semibold)',
                     fontSize: 'var(--font-size-2xl-rem)',
                     color: 'hsl(var(--color-black))',
                   }}
                 >
                  {stat.number}
                </div>
                                 <div 
                   className="text-muted-foreground"
                   style={{
                     fontFamily: 'var(--font-body)',
                     fontWeight: 'var(--font-weight-normal)',
                     fontSize: 'var(--font-size-sm-rem)',
                   }}
                 >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 