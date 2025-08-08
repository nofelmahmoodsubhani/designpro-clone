'use client';

import Image from 'next/image';
import { FaCheck, FaEye, FaShoppingCart } from 'react-icons/fa';
import UXCritiqueSection from './UXCritiqueSection';

interface TextBlock {
  heading: string;
  description: string;
}

const textBlocks: TextBlock[] = [
  {
    heading: "Audit your UI",
    description: "Quickly catch UI issues and ensure your designs adhere to best practices. Our AI analyzes color, layout, typography, and visual hierarchy to ensure pixel-perfect designs before hand-off."
  },
  {
    heading: "Meet accessibility guidelines",
    description: "Make your designs usable for people with a wide range of abilities and disabilities. Ensure designs comply with WCAG AA and AAA standards, including color contrast and keyboard navigation."
  },
  {
    heading: "Improve your copy",
    description: "Enhance your content with AI-powered copy suggestions that improve clarity, tone, and user engagement. Get real-time feedback on readability and messaging effectiveness."
  },
  {
    heading: "Drive website growth",
    description: "Optimize your designs for conversion and user engagement. Our AI provides insights on user behavior patterns and suggests improvements to increase your website's performance."
  }
];

export default function FeatureRow() {
  return (
    <div className="w-full py-16 bg-background" style={{ paddingTop: 'var(--space-32)', paddingBottom: 'var(--space-16)' }}>
      <div className="max-w-7xl mx-auto">
                                                                                                                                                                                                                                                                                               {/* White Container */}
             <div 
               className="bg-card rounded-lg border border-border/40"
               style={{
                 borderRadius: 'var(--radius-lg)',
                 borderWidth: '1px',
                 borderStyle: 'solid',
                 borderColor: 'rgba(0, 0, 0, 0.05)',
                 borderBottom: 'none'
               }}
             >
          {/* Section Header */}
          <div className="text-center px-8" style={{ paddingTop: 'var(--space-34)', paddingBottom: 'var(--space-24)' }}>
            <h2 
              className="font-bold mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 'var(--font-weight-bold, 700)',
                color: 'var(--foreground)',
                letterSpacing: 'var(--letter-spacing-tight)',
                lineHeight: 1.2,
                fontSize: 'clamp(2.1rem, 4.2vw, 2.6rem)',
              }}
            >
              Design confidence for 
              {/* Funky Teal Underline */}
              <div className="relative inline-block ml-2">
                <span className="relative">
                  your team
                  <svg 
                    className="absolute -bottom-4 left-2 w-full h-6"
                    viewBox="0 0 1283 132" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M1282.46 5.79c-.91-3.88-5.18-6.65-9.04-5.54-104.37 29.02-193.78 56.87-361.6 74.53-268.41 28.16-539.6 14.6-803.08-26.38C94.9 47.97-.34 26.24.08 41.38c-1.56 14.21 19.47 12.91 29.6 17.24 32.82 8.6 66.1 15.33 99.4 21.81 238.99 44.43 482.98 55.29 725.63 49.01 92.37-4.11 185.68-9.96 275.51-33.09 18.68-6.31 42.79-9.21 55.18-25.89 6.76-13.28-12.41-21.16-13.83-6.12-17.69 11.67-39.31 15.61-59.45 21.34-114.56 25.18-245.31 30.46-361.99 30.36-191.39.45-383.13-10.13-572-42.21 277.31 36.42 560.77 44.96 837.82 2.23 104.21-15.4 195.11-42.74 260.97-61.22a7.57 7.57 0 0 0 5.54-9.05Z" 
                      fill="hsl(var(--color-teal-exact))"
                      stroke="hsl(var(--color-teal-exact))"
                      strokeWidth="0.5"
                    />
                  </svg>
                </span>
              </div>
            </h2>
            <p 
              className="text-lg lg:text-xl max-w-6xl mx-auto leading-relaxed"
                             style={{
                 fontFamily: 'Inter, system-ui, sans-serif',
                 fontWeight: 500,
                 color: 'hsl(0 0% 50%)',
                 lineHeight: 1.3,
                 fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
                 paddingTop: 'var(--space-8)',
                 paddingBottom: 'var(--space-6)',
               }}
            >
              Your team's trusted design partner delivering UI, UX, accessibility<br />
              and growth insights through 600+ proven best practices—turning<br />
              weeks of design iterations into minutes.
            </p>
          </div>

                                                                                                                               {/* Feature Content Container */}
              <div className="relative h-screen flex items-center justify-center">
            <div className="w-full px-16">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                                 {/* Left Column - Product Card */}
                 <div className="lg:col-span-2 flex items-center justify-center">
                   <div 
                     className="bg-white shadow-lg overflow-hidden"
                     style={{
                       borderRadius: '24px',
                       boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                       maxWidth: '340px',
                       width: '100%',
                     }}
                   >
                    {/* Product Image */}
                    <div className="relative" style={{ borderRadius: '20px 20px 0 0', overflow: 'hidden' }}>
                      <Image
                        src="/woman.avif"
                        alt="Woman with tennis racket"
                        width={320}
                        height={200}
                        className="w-full h-48 object-cover"
                        priority
                      />
                    </div>
                    
                    {/* Product Details */}
                    <div className="p-6" style={{ borderRadius: '0 0 20px 20px' }}>
                      {/* Price and Rating */}
                      <div className="flex items-center gap-2 mb-3">
                                                <span
                          className="text-5xl font-bold"
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 'var(--font-weight-bold)',
                            color: 'hsl(0 0% 0%)',
                            opacity: 0.8,
                          }}
                        >
                          $80
                        </span>
                        <FaCheck 
                          className="text-red-500"
                          style={{ fontSize: '28px' }}
                        />
                      </div>
                      
                      {/* Product Name */}
                      <h3 
                        className="text-lg font-bold mb-2"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 'var(--font-weight-bold)',
                          color: 'hsl(0 0% 0%)',
                          opacity: 0.7,
                        }}
                      >
                        Tennis Racket
                      </h3>
                      
                      {/* Description */}
                      <p 
                        className="mb-4 text-xs"
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontWeight: 600,
                          fontSize: '12px',
                          color: 'hsl(var(--color-gray-600-custom))',
                          lineHeight: 1.8,
                          maxWidth: '280px',
                          opacity: 0.8,
                        }}
                      >
                        This tennis racket is made with materials that are good for playing. It has strings and a handle and comes in different colors and it is very light.
                      </p>
                      
                      {/* Buttons */}
                      <div className="flex gap-3">
                        <button 
                          className="flex-1 py-2 px-3 rounded-lg text-sm font-medium"
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontWeight: 'var(--font-weight-medium)',
                            fontSize: '14px',
                            color: 'hsl(var(--color-gray-600-custom))',
                            backgroundColor: 'hsl(var(--color-button-gray))',
                            pointerEvents: 'none',
                            opacity: 0.8,
                          }}
                        >
                          Preview this
                        </button>
                        <button 
                          className="flex-1 py-2 px-3 rounded-lg text-sm font-medium"
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontWeight: 'var(--font-weight-medium)',
                            fontSize: '14px',
                            color: 'hsl(var(--color-green-dark))',
                            backgroundColor: 'hsl(var(--color-green-light))',
                            pointerEvents: 'none',
                            opacity: 0.8,
                          }}
                        >
                          PURCHASE
                        </button>
                      </div>
                                         </div>
                   </div>
                 </div>
                
                                                  {/* Right Column - First Text Block Only */}
                 <div className="lg:col-span-3 flex items-center justify-center">
                   <div className="max-w-2xl">
                     <h2 
                       className="text-3xl lg:text-4xl font-bold mb-6"
                       style={{
                         fontFamily: 'var(--font-heading)',
                         fontWeight: 'var(--font-weight-bold, 700)',
                         color: 'var(--color-foreground)',
                         letterSpacing: 'var(--letter-spacing-tight)',
                         lineHeight: 1.2,
                       }}
                     >
                       {textBlocks[0].heading}
                     </h2>
                     <p 
                       className="text-lg lg:text-xl leading-relaxed"
                       style={{
                         fontFamily: 'var(--font-body)',
                         fontWeight: 400,
                         color: 'hsl(0 0% 50%)',
                         lineHeight: 1.6,
                       }}
                     >
                       {textBlocks[0].description}
                     </p>
                   </div>
                 </div>
              </div>
            </div>
                     </div>
         </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <UXCritiqueSection />
       </div>
     </div>
   );
} 