import Image from 'next/image';

const companies = [
  {
    name: 'Miro',
    logo: '/logos/miro.avif',
    alt: 'Miro logo'
  },
  {
    name: 'Airwallex',
    logo: '/logos/airwallex.avif',
    alt: 'Airwallex logo'
  },
  {
    name: 'BILT',
    logo: '/logos/bilt.avif',
    alt: 'BILT logo'
  },
  {
    name: 'Google',
    logo: '/logos/google.avif',
    alt: 'Google logo'
  },
  {
    name: 'Salesforce',
    logo: '/logos/salesforce.avif',
    alt: 'Salesforce logo'
  },
  {
    name: 'Workstream',
    logo: '/logos/workstream.avif',
    alt: 'Workstream logo'
  }
];

export default function TrustedBy() {
  return (
    <div className="w-full py-12" style={{ paddingTop: '10rem' }}>
      <div className="max-w-7xl mx-auto text-center">
                 {/* Heading */}
         <h2 
           className="text-xl text-muted-foreground mb-16"
           style={{
             fontFamily: 'var(--font-body)',
             fontWeight: 400,
                             fontSize: 'var(--font-size-4xl-rem)',
             color: 'var(--color-muted-foreground)',
             opacity: 0.7,
           }}
         >
           Trusted by top fast-moving design and product teams
         </h2>
        
        {/* Scrolling Logos Container */}
        <div className="relative overflow-hidden w-full">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
          
          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
          
                                                                                                                                                                                                                                                                                                                                                               <div 
                 className="flex items-center gap-12 animate-scroll"
                 style={{
                   animation: 'scroll 75s linear infinite',
                   width: 'max-content',
                 }}
               >
                         {/* First set of logos */}
             {companies.map((company) => (
                                                                                                                                   <div 
                     key={`first-${company.name}`}
                     className="flex items-center justify-center opacity-100 hover:opacity-100 transition-opacity flex-shrink-0 w-64 bg-white rounded-lg p-2"
                   >
                 <Image
                   src={company.logo}
                   alt={company.alt}
                   width={200}
                   height={80}
                   className="h-16 w-48 object-contain"
                 />
               </div>
             ))}
            
                         {/* Duplicate set for seamless loop */}
             {companies.map((company) => (
                                                                                                                                   <div 
                     key={`second-${company.name}`}
                     className="flex items-center justify-center opacity-100 hover:opacity-100 transition-opacity flex-shrink-0 w-64 bg-white rounded-lg p-2"
                   >
                 <Image
                   src={company.logo}
                   alt={company.alt}
                   width={200}
                   height={80}
                   className="h-16 w-48 object-contain"
                 />
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
} 