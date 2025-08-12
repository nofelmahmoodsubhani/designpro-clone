'use client';

export default function UXCritiqueSection() {
  return (
    <>
      {/* UX Critique Section - Part of Container 1 */}
      <div className="text-center px-8 bg-background" style={{ 
        paddingTop: 'var(--space-16)', 
        paddingBottom: 'var(--space-8)',
        borderLeft: '1px solid var(--rgba-border-light)',
        borderRight: '1px solid var(--rgba-border-light)',
        borderBottom: '1px solid var(--rgba-border-light)',
        borderBottomLeftRadius: 'var(--radius-lg)',
        borderBottomRightRadius: 'var(--radius-lg)'
      }}>
        <h2 
          className="font-bold mb-4"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 'var(--font-weight-bold, 700)',
            color: 'var(--foreground)',
            letterSpacing: 'var(--letter-spacing-tight)',
            lineHeight: 'var(--uxcritique-typography-heading-line-height)',
            fontSize: 'var(--font-size-clamp-large)',
          }}
        >
          UX Critique & Onboarding Audit
        </h2>
        <p 
          className="text-lg lg:text-xl max-w-6xl mx-auto leading-relaxed"
          style={{
            fontFamily: 'var(--font-geist-sans)',
            fontWeight: 'var(--uxcritique-typography-body-font-weight)',
            color: 'hsl(var(--uxcritique-typography-subheading-color))',
            lineHeight: 'var(--uxcritique-typography-body-line-height)',
            fontSize: 'var(--font-size-clamp-medium)',
            paddingTop: 'var(--space-8)',
            paddingBottom: 'var(--space-4)',
          }}
        >
          Instantly test your team&apos;s designs using 130+ psychology principles<br />
          and uncover actionable UX and Growth insights, together.
        </p>

        {/* Cards Container */}
        <div className="relative px-8 pb-16">
          <div className="flex justify-center items-center" style={{ minHeight: 'var(--uxcritique-card-min-height)' }}>
                                                                             {/* Card 1 - Front (Yellow) */}
              <div 
                className="relative z-30 bg-white rounded-lg p-1 shadow-lg"
                style={{
                  width: 'var(--uxcritique-card-width)',
                  transform: 'rotate(var(--uxcritique-card-transform-front))',
                  marginRight: 'var(--uxcritique-card-positioning-front-margin-right)',
                  marginTop: 'var(--uxcritique-card-positioning-front-margin-top)',
                  border: 'var(--uxcritique-card-border-width) solid hsl(var(--color-card-yellow-exact))',
                }}
              >
                {/* Top Left Number */}
                <div className="absolute top-4 left-4 rounded-full flex items-center justify-center text-sm font-bold text-black" style={{ 
                  backgroundColor: 'hsl(var(--color-card-yellow-exact))',
                  width: 'var(--uxcritique-card-elements-icon-size)',
                  height: 'var(--uxcritique-card-elements-icon-size)'
                }}>
                  #1
                </div>
                
                {/* Top Right Tag */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1" style={{ backgroundColor: 'hsl(var(--color-card-yellow-exact))' }}>
                  <span className="text-black">⚠️</span>
                  <span style={{ color: 'hsl(var(--color-card-brown))' }}>Caution</span>
                </div>
                
                {/* Header Line */}
                <div className="w-full absolute left-0" style={{ 
                  backgroundColor: 'hsl(var(--color-card-tag-gray))', 
                  height: 'var(--uxcritique-card-elements-header-line-height)',
                  top: 'var(--uxcritique-card-elements-header-line-top)'
                }}></div>
               
                                   {/* Main Content */}
                  <div className="mt-12 mb-4">
                    <p className="text-sm leading-relaxed text-left" style={{ color: 'hsl(var(--color-card-text-gray))' }}>
                      Add a progress indicator showing the total steps and current position in the KYC verification process to help users understand their journey
                    </p>
                  </div>
                
                {/* Principle */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">💭</span>
                  <span className="text-sm font-semibold text-left" style={{ color: 'hsl(var(--color-card-text-gray))' }}>Hick&apos;s Law</span>
                </div>
                
                {/* Explanation */}
                <p className="text-xs mb-4 text-left" style={{ color: 'hsl(var(--color-card-text-gray))' }}>
                  Users&apos; motivation increases as they get closer to completing their goal
                </p>
               
                                {/* Footer Line */}
                 <div className="w-full h-1" style={{ 
                  backgroundColor: 'hsl(var(--color-card-yellow-exact))', 
                  marginTop: 'var(--uxcritique-card-elements-footer-spacing-margin-top)', 
                  marginLeft: 'var(--uxcritique-card-elements-footer-spacing-margin-left)', 
                  marginRight: 'var(--uxcritique-card-elements-footer-spacing-margin-right)', 
                  width: 'var(--uxcritique-card-elements-footer-width)' 
                }}></div>
                
                {/* Footer Fill */}
                <div className="w-full rounded-b-lg" style={{ 
                  backgroundColor: 'hsl(var(--color-card-yellow-exact))', 
                  marginLeft: 'var(--uxcritique-card-elements-footer-spacing-margin-left)', 
                  marginRight: 'var(--uxcritique-card-elements-footer-spacing-margin-right)', 
                  marginBottom: 'var(--uxcritique-card-elements-footer-spacing-margin-top)', 
                  paddingTop: 'var(--uxcritique-card-elements-footer-spacing-padding-top)', 
                  paddingBottom: 'var(--uxcritique-card-elements-footer-spacing-padding-bottom)', 
                  width: 'var(--uxcritique-card-elements-footer-width)' 
                }}>
                  {/* Bottom Tags */}
                                     <div className="flex justify-between">
                     <span className="px-2 py-1 bg-white rounded-full text-xs ml-2" style={{ color: 'hsl(var(--color-card-text-gray))' }}>Understanding</span>
                     <span className="px-2 py-1 rounded-full text-xs mr-2" style={{ backgroundColor: 'hsl(var(--color-card-yellow-exact))', color: 'hsl(var(--color-card-brown))' }}>
                       Mar 20, 2025
                     </span>
                   </div>
                </div>
              </div>

              {/* Card 2 - Middle (Green) */}
              <div 
                className="relative z-20 bg-white rounded-lg p-1 shadow-lg"
                style={{
                  width: 'var(--uxcritique-card-width)',
                  transform: 'rotate(var(--uxcritique-card-transform-middle))',
                  marginRight: 'var(--uxcritique-card-positioning-middle-margin-right)',
                  marginTop: 'var(--uxcritique-card-positioning-middle-margin-top)',
                  border: 'var(--uxcritique-card-border-width) solid hsl(var(--color-card-green-exact))',
                }}
              >
               {/* Top Right Tag */}
               <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1" style={{ backgroundColor: 'hsl(var(--color-card-green-exact))' }}>
                 <span className="text-black">💡</span>
                 <span style={{ color: 'hsl(var(--color-card-dark-green))' }}>Positive</span>
               </div>
               
               {/* Header Line */}
               <div className="w-full absolute left-0" style={{ 
                  backgroundColor: 'hsl(var(--color-card-tag-gray))', 
                  height: 'var(--uxcritique-card-elements-header-line-height)',
                  top: 'var(--uxcritique-card-elements-header-line-top)'
                }}></div>
             
                               {/* Main Content */}
                <div className="mt-12 mb-4">
                  <p className="text-sm leading-relaxed text-left" style={{ color: 'hsl(var(--color-card-text-gray))' }}>
                    Checkmarks on completed steps communicate progress and a sense of achievement through the onboarding
                  </p>
                </div>
                
                {/* Principle */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">📈</span>
                  <span className="text-sm font-semibold text-left" style={{ color: 'hsl(var(--color-card-text-gray))' }}>Peak-End Rule</span>
                </div>
                
                {/* Explanation */}
                <p className="text-xs mb-4 text-left" style={{ color: 'hsl(var(--color-card-text-gray))' }}>
                  People judge experiences largely based on how they feel at their peak moments and at the end, rather than the average of every moment
                </p>
               
                                {/* Footer Line */}
                 <div className="w-full h-1" style={{ 
                  backgroundColor: 'hsl(var(--color-card-green-exact))', 
                  marginTop: 'var(--uxcritique-card-elements-footer-spacing-margin-top)', 
                  marginLeft: 'var(--uxcritique-card-elements-footer-spacing-margin-left)', 
                  marginRight: 'var(--uxcritique-card-elements-footer-spacing-margin-right)', 
                  width: 'var(--uxcritique-card-elements-footer-width)' 
                }}></div>
                
                {/* Footer Fill */}
                <div className="w-full rounded-b-lg" style={{ 
                  backgroundColor: 'hsl(var(--color-card-green-exact))', 
                  marginLeft: 'var(--uxcritique-card-elements-footer-spacing-margin-left)', 
                  marginRight: 'var(--uxcritique-card-elements-footer-spacing-margin-right)', 
                  marginBottom: 'var(--uxcritique-card-elements-footer-spacing-margin-top)', 
                  paddingTop: 'var(--uxcritique-card-elements-footer-spacing-padding-top)', 
                  paddingBottom: 'var(--uxcritique-card-elements-footer-spacing-padding-bottom)', 
                  width: 'var(--uxcritique-card-elements-footer-width)' 
                }}>
                  {/* Bottom Tags */}
                                     <div className="flex justify-between">
                     <span className="px-2 py-1 bg-white rounded-full text-xs ml-2" style={{ color: 'hsl(var(--color-card-text-gray))' }}>Memory Recall</span>
                     <span className="px-2 py-1 rounded-full text-xs mr-2" style={{ backgroundColor: 'hsl(var(--color-card-green-exact))', color: 'hsl(var(--color-card-dark-green))' }}>Mar 20, 2025</span>
                   </div>
                </div>
              </div>

                                                                             {/* Card 3 - Back (Yellow) */}
              <div 
                className="relative z-10 bg-white rounded-lg p-1 shadow-lg"
                style={{
                  width: 'var(--uxcritique-card-width)',
                  transform: 'rotate(var(--uxcritique-card-transform-back))',
                  marginTop: 'var(--uxcritique-card-positioning-back-margin-top)',
                  marginLeft: 'var(--uxcritique-card-positioning-back-margin-left)',
                  border: 'var(--uxcritique-card-border-width) solid hsl(var(--color-card-yellow-exact))',
                }}
              >
               {/* Top Right Tag */}
               <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1" style={{ backgroundColor: 'hsl(var(--color-card-yellow-exact))' }}>
                 <span className="text-black">⚠️</span>
                 <span style={{ color: 'hsl(var(--color-card-brown))' }}>Caution</span>
               </div>
               
               {/* Header Line */}
               <div className="w-full absolute left-0" style={{ 
                  backgroundColor: 'hsl(var(--color-card-tag-gray))', 
                  height: 'var(--uxcritique-card-elements-header-line-height)',
                  top: 'var(--uxcritique-card-elements-header-line-top)'
                }}></div>
             
                               {/* Main Content */}
                <div className="mt-12 mb-4">
                  <p className="text-sm leading-relaxed text-left" style={{ color: 'hsl(var(--color-card-text-gray))' }}>
                    Simplify the initial screen by reducing visual elements competing for attention and prioritize the primary &quot;Sign up&quot; action
                  </p>
                </div>
                
                {/* Principle */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">📐</span>
                  <span className="text-sm font-semibold text-left" style={{ color: 'hsl(var(--color-card-text-gray))' }}>Visual Hierarchy</span>
                </div>
                
                {/* Explanation */}
                <p className="text-xs mb-4 text-left" style={{ color: 'hsl(var(--color-card-text-gray))' }}>
                  The current design lacks clear visual prioritization, causing cognitive load when multiple elements compete for attention
                </p>
               
                                {/* Footer Line */}
                 <div className="w-full h-1" style={{ 
                  backgroundColor: 'hsl(var(--color-card-yellow-exact))', 
                  marginTop: 'var(--uxcritique-card-elements-footer-spacing-margin-top)', 
                  marginLeft: 'var(--uxcritique-card-elements-footer-spacing-margin-left)', 
                  marginRight: 'var(--uxcritique-card-elements-footer-spacing-margin-right)', 
                  width: 'var(--uxcritique-card-elements-footer-width)' 
                }}></div>
                
                {/* Footer Fill */}
                <div className="w-full rounded-b-lg" style={{ 
                  backgroundColor: 'hsl(var(--color-card-yellow-exact))', 
                  marginLeft: 'var(--uxcritique-card-elements-footer-spacing-margin-left)', 
                  marginRight: 'var(--uxcritique-card-elements-footer-spacing-margin-right)', 
                  marginBottom: 'var(--uxcritique-card-elements-footer-spacing-margin-top)', 
                  paddingTop: 'var(--uxcritique-card-elements-footer-spacing-padding-top)', 
                  paddingBottom: 'var(--uxcritique-card-elements-footer-spacing-padding-bottom)', 
                  width: 'var(--uxcritique-card-elements-footer-width)' 
                }}>
                  {/* Bottom Tags */}
                                     <div className="flex justify-between">
                     <span className="px-2 py-1 bg-white rounded-full text-xs ml-2" style={{ color: 'hsl(var(--color-card-text-gray))' }}>Information Overload</span>
                     <span className="px-2 py-1 rounded-full text-xs mr-2" style={{ backgroundColor: 'hsl(var(--color-card-yellow-exact))', color: 'hsl(var(--color-card-brown))' }}>Mar 20, 2025</span>
                   </div>
                </div>
              </div>
           </div>
         </div>
       </div>
     </>
   );
} 