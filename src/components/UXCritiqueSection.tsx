'use client';

export default function UXCritiqueSection() {
  return (
    <>
      {/* UX Critique Section - Part of Container 1 */}
      <div className="text-center px-8 bg-white" style={{ 
        paddingTop: 'var(--space-34)', 
        paddingBottom: 'var(--space-24)',
        borderLeft: '1px solid rgba(0, 0, 0, 0.05)',
        borderRight: '1px solid rgba(0, 0, 0, 0.05)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
      }}>
        <h2 
          className="font-bold mb-4"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 'var(--font-weight-bold, 700)',
            color: 'hsl(0, 0%, 16%)',
            letterSpacing: 'var(--letter-spacing-tight)',
            lineHeight: 1.2,
            fontSize: 'clamp(2.1rem, 4.2vw, 2.6rem)',
          }}
        >
          UX Critique & Onboarding Audit
        </h2>
                                                                                                                                                                                                                                                                                               <p 
             className="text-lg lg:text-xl max-w-6xl mx-auto leading-relaxed"
             style={{
               fontFamily: 'Inter, system-ui, sans-serif',
               fontWeight: 500,
               color: 'hsl(0, 0%, 45%)',
               lineHeight: 1.3,
               fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
               paddingTop: 'var(--space-8)',
               paddingBottom: 'var(--space-4)',
             }}
           >
          Instantly test your team's designs using 130+ psychology principles<br />
          and uncover actionable UX and Growth insights, together.
        </p>

        {/* Cards Container */}
        <div className="relative px-8 pb-16">
          <div className="flex justify-center items-center" style={{ minHeight: '400px' }}>
                                                                             {/* Card 1 - Front (Yellow) */}
              <div 
                className="relative z-30 bg-white rounded-lg p-1 shadow-lg"
                style={{
                  width: '300px',
                  transform: 'rotate(-5deg)',
                  marginRight: '-80px',
                  marginTop: '-175px',
                  border: '2px solid #fef3c7',
                }}
              >
                               {/* Top Left Number */}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-black" style={{ backgroundColor: '#fef3c7' }}>
                  #1
                </div>
                
                                 {/* Top Right Tag */}
                 <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1" style={{ backgroundColor: '#fef3c7' }}>
                   <span className="text-black">⚠️</span>
                   <span style={{ color: '#92400e' }}>Caution</span>
                 </div>
                
                 {/* Header Line */}
                 <div className="w-full absolute top-14 left-0" style={{ backgroundColor: '#e5e7eb', height: '0.5px' }}></div>
               
                                   {/* Main Content */}
                  <div className="mt-12 mb-4">
                    <p className="text-sm leading-relaxed text-left" style={{ color: '#374151' }}>
                      Add a progress indicator showing the total steps and current position in the KYC verification process to help users understand their journey
                    </p>
                  </div>
                
                {/* Principle */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">💭</span>
                  <span className="text-sm font-semibold text-left" style={{ color: '#374151' }}>Hick's Law</span>
                </div>
                
                {/* Explanation */}
                <p className="text-xs mb-4 text-left" style={{ color: '#374151' }}>
                  Users' motivation increases as they get closer to completing their goal
                </p>
               
                                {/* Footer Line */}
                 <div className="w-full h-1" style={{ backgroundColor: '#fef3c7', marginTop: '-8px', marginLeft: '-8px', marginRight: '-8px', width: 'calc(100% + 16px)' }}></div>
               
                               {/* Footer Fill */}
                <div className="w-full rounded-b-lg" style={{ backgroundColor: '#fef3c7', marginLeft: '-8px', marginRight: '-8px', marginBottom: '-8px', paddingTop: '8px', paddingBottom: '8px', width: 'calc(100% + 16px)' }}>
                  {/* Bottom Tags */}
                                     <div className="flex justify-between">
                     <span className="px-2 py-1 bg-white rounded-full text-xs ml-2" style={{ color: '#6b7280' }}>Understanding</span>
                     <span className="px-2 py-1 rounded-full text-xs mr-2" style={{ backgroundColor: '#fef3c7', color: '#92400e' }}>
                       Mar 20, 2025
                     </span>
                   </div>
                </div>
              </div>

                                                                             {/* Card 2 - Middle (Green) */}
              <div 
                className="relative z-20 bg-white rounded-lg p-1 shadow-lg"
                style={{
                  width: '300px',
                  transform: 'rotate(0deg)',
                  marginRight: '-25px',
                  marginTop: '50px',
                  border: '2px solid #bbf7d0',
                }}
              >
               {/* Top Right Tag */}
               <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1" style={{ backgroundColor: '#bbf7d0' }}>
                 <span className="text-black">💡</span>
                 <span style={{ color: '#166534' }}>Positive</span>
               </div>
               
               {/* Header Line */}
               <div className="w-full absolute top-12 left-0" style={{ backgroundColor: '#e5e7eb', height: '0.5px' }}></div>
             
                               {/* Main Content */}
                <div className="mt-12 mb-4">
                  <p className="text-sm leading-relaxed text-left" style={{ color: '#374151' }}>
                    Checkmarks on completed steps communicate progress and a sense of achievement through the onboarding
                  </p>
                </div>
                
                {/* Principle */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">📈</span>
                  <span className="text-sm font-semibold text-left" style={{ color: '#374151' }}>Peak-End Rule</span>
                </div>
                
                {/* Explanation */}
                <p className="text-xs mb-4 text-left" style={{ color: '#374151' }}>
                  People judge experiences largely based on how they feel at their peak moments and at the end, rather than the average of every moment
                </p>
               
                                {/* Footer Line */}
                 <div className="w-full h-1" style={{ backgroundColor: '#bbf7d0', marginTop: '-8px', marginLeft: '-8px', marginRight: '-8px', width: 'calc(100% + 16px)' }}></div>
               
                               {/* Footer Fill */}
                <div className="w-full rounded-b-lg" style={{ backgroundColor: '#bbf7d0', marginLeft: '-8px', marginRight: '-8px', marginBottom: '-8px', paddingTop: '8px', paddingBottom: '8px', width: 'calc(100% + 16px)' }}>
                  {/* Bottom Tags */}
                                     <div className="flex justify-between">
                     <span className="px-2 py-1 bg-white rounded-full text-xs ml-2" style={{ color: '#6b7280' }}>Memory Recall</span>
                     <span className="px-2 py-1 rounded-full text-xs mr-2" style={{ backgroundColor: '#bbf7d0', color: '#166534' }}>Mar 20, 2025</span>
                   </div>
                </div>
              </div>

                                                                             {/* Card 3 - Back (Yellow) */}
              <div 
                className="relative z-10 bg-white rounded-lg p-1 shadow-lg"
                style={{
                  width: '300px',
                  transform: 'rotate(5deg)',
                  marginTop: '250px',
                  marginLeft: '-40px',
                  border: '2px solid #fef3c7',
                }}
              >
               {/* Top Right Tag */}
               <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1" style={{ backgroundColor: '#fef3c7' }}>
                 <span className="text-black">⚠️</span>
                 <span style={{ color: '#92400e' }}>Caution</span>
               </div>
               
               {/* Header Line */}
               <div className="w-full absolute top-12 left-0" style={{ backgroundColor: '#e5e7eb', height: '0.5px' }}></div>
             
                               {/* Main Content */}
                <div className="mt-12 mb-4">
                  <p className="text-sm leading-relaxed text-left" style={{ color: '#374151' }}>
                    Simplify the initial screen by reducing visual elements competing for attention and prioritize the primary "Sign up" action
                  </p>
                </div>
                
                {/* Principle */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">📐</span>
                  <span className="text-sm font-semibold text-left" style={{ color: '#374151' }}>Visual Hierarchy</span>
                </div>
                
                {/* Explanation */}
                <p className="text-xs mb-4 text-left" style={{ color: '#374151' }}>
                  The current design lacks clear visual prioritization, causing cognitive load when multiple elements compete for attention
                </p>
               
                                {/* Footer Line */}
                 <div className="w-full h-1" style={{ backgroundColor: '#fef3c7', marginTop: '-8px', marginLeft: '-8px', marginRight: '-8px', width: 'calc(100% + 16px)' }}></div>
               
                               {/* Footer Fill */}
                <div className="w-full rounded-b-lg" style={{ backgroundColor: '#fef3c7', marginLeft: '-8px', marginRight: '-8px', marginBottom: '-8px', paddingTop: '8px', paddingBottom: '8px', width: 'calc(100% + 16px)' }}>
                  {/* Bottom Tags */}
                                     <div className="flex justify-between">
                     <span className="px-2 py-1 bg-white rounded-full text-xs ml-2" style={{ color: '#6b7280' }}>Information Overload</span>
                     <span className="px-2 py-1 rounded-full text-xs mr-2" style={{ backgroundColor: '#fef3c7', color: '#92400e' }}>Mar 20, 2025</span>
                   </div>
                </div>
              </div>
           </div>
         </div>
       </div>
     </>
   );
} 