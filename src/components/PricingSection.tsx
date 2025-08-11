'use client';

import React from 'react';
import { FaFigma } from 'react-icons/fa';
import { AiOutlineChrome } from 'react-icons/ai';
import Container from '@/components/Container';

export default function PricingSection() {
  return (
    <section style={{ backgroundColor: 'hsl(var(--background))', paddingTop: 'var(--space-48)', paddingBottom: 'var(--space-32)' }}>
      <Container>
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'hsl(var(--foreground))' }}>
            Elevate your team's design work
          </h2>
        </div>

        <div id="pricing" className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto" style={{ scrollMarginTop: 'var(--space-24)' }}>
          {/* Free Card */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-12 border min-h-[520px] flex flex-col" style={{ borderColor: 'hsl(var(--color-free-card-border))' }}>
            <div className="text-left mb-8">
              <h3 className="text-6xl font-semibold text-black mb-2">
                Free <span className="text-2xl font-normal text-betaText">(BETA)</span>
              </h3>
            </div>
            
            <ul className="space-y-5 mb-10 flex-grow">
              <li className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#6b7280' }}>
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-tickText text-xl font-semibold">15 Reviews every week</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#6b7280' }}>
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-tickText text-xl font-semibold">Improve copy, UI, accessibility & get UX and onboarding insights</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#6b7280' }}>
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-tickText text-xl font-semibold">Add your own branding guide or copy guidelines for personalized feedback</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#6b7280' }}>
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-tickText text-xl font-semibold">Slack community to speak to design experts from Apple, Google and Stanford d.school</span>
              </li>
            </ul>

            <div className="space-y-4 mt-auto">
              <div className="w-full rounded-2xl p-2" style={{ backgroundColor: 'hsl(var(--color-figma-capsule) / 0.7)' }}>
                <a
                  href="https://www.figma.com/community/plugin/1339202278007297015/ai-design-reviewer-detect-ui-ux-accessibility-copy-issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-figma text-figmaForeground font-semibold py-4 px-6 flex items-center justify-center text-lg"
                  style={{ borderRadius: 'var(--radius-2xl)' }}
                >
                  <FaFigma className="w-5 h-5 mr-2" />
                  Try Figma Plugin
                </a>
              </div>
              <div className="w-full rounded-2xl p-2" style={{ backgroundColor: 'hsl(var(--color-figma-capsule) / 0.7)' }}>
                <a
                  href="https://chromewebstore.google.com/detail/ai-website-optimizer-boos/lhepaglfniknbbjllciljbooleolpdhe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-gray-900 font-semibold py-4 px-6 flex items-center justify-center text-lg"
                  style={{ borderRadius: 'var(--radius-2xl)' }}
                >
                  <AiOutlineChrome className="w-5 h-5 mr-2 text-black" />
                  <span className="text-black">Try Chrome Extension</span>
                </a>
              </div>
            </div>
          </div>

          {/* Premium Card */}
          <div className="md:col-span-1 bg-blue-900 rounded-2xl shadow-lg px-8 py-12 text-white relative overflow-hidden min-h-[520px] flex flex-col">
            {/* Speckled texture overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
                                radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }} />
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              {/* Podium Icon with "1" - Top Left */}
              <div className="flex justify-start mb-40">
                <div className="relative">
                  {/* Podium base */}
                  <div className="w-16 h-8 bg-white rounded-t-lg opacity-20"></div>
                  {/* Podium steps */}
                  <div className="absolute bottom-0 left-0 w-12 h-6 bg-white rounded-t-lg opacity-30"></div>
                  <div className="absolute bottom-0 left-2 w-8 h-4 bg-white rounded-t-lg opacity-40"></div>
                  {/* Number "1" on top step */}
                  <div className="absolute bottom-1 left-6 w-4 h-3 bg-white rounded flex items-center justify-center">
                    <span className="text-blue-900 text-xs font-bold">1</span>
                  </div>
                </div>
              </div>
              
              {/* Premium Plan heading - Left aligned */}
              <h3 className="text-2xl font-semibold mb-6 text-left">Premium Plan</h3>
              
              {/* Description in 4 lines - Left aligned, bold, white */}
              <p className="text-3xl font-black leading-tight mb-10 flex-grow text-left" style={{ fontFamily: 'var(--font-geist-sans)', fontWeight: '900' }}>
                Enhance the UX<br />
                and Growth of<br />
                your onboarding<br />
                or critical flows
              </p>
              
              <div className="w-full rounded-3xl p-2 mt-auto bg-capsuleBorder/20">
                <a
                  href="https://calendly.com/mscarim-designpro/free-20-min-review?month=2025-08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-black font-semibold text-lg py-4 px-6 rounded-2xl text-center block"
                >
                  Schedule a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
