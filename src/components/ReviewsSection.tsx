'use client';

import React from "react";
import Image from "next/image";
import { getFeaturedTestimonials } from "@/lib/testimonials";
import { Testimonial } from "@/types/testimonials";
import Container from "@/components/Container";

function ReviewCard({ review }: { review: Testimonial }) {
  return (
    <div
      className="bg-white flex flex-col items-start relative"
      style={{
        backgroundColor: "hsl(var(--background))",
        borderRadius: "var(--radius-testimonial-card)",
        boxShadow: "var(--shadow-testimonial-card)",
        border: "1px solid hsl(var(--color-testimonial-card-border))",
        padding: "var(--space-testimonial-card-padding)",
        minWidth: "var(--space-cardMin)",
        maxWidth: "var(--space-cardMax)",
        minHeight: "var(--space-80)",
        marginLeft: "var(--space-testimonial-card-gap)",
        marginRight: "var(--space-testimonial-card-gap)",
      }}
    >
      {/* Testimonial text with actual quotation marks */}
      <p 
        className="relative z-10 leading-relaxed"
        style={{ 
          color: "hsl(var(--color-testimonial-quote))",
          marginBottom: "var(--space-testimonial-content-spacing)",
          fontSize: "var(--font-size-testimonial-text)",
          fontWeight: "var(--font-weight-normal)",
          lineHeight: "var(--line-height-comfortable)",
          paddingTop: "var(--space-1)",
          fontFamily: "var(--font-geist-sans)",
        }}
      >
        &ldquo;{review.text}&rdquo;
      </p>
      
      {/* Author section */}
      <div className="flex items-center mt-auto w-full">
        {/* Avatar */}
        <div 
          className="rounded-full overflow-hidden flex-shrink-0"
          style={{
            width: "var(--space-testimonial-avatar-size)",
            height: "var(--space-testimonial-avatar-size)",
            marginRight: "var(--space-4)",
            borderRadius: "var(--radius-testimonial-avatar)",
          }}
        >
          {/* Display actual avatar image */}
          <Image
            src={review.avatar}
            alt={`${review.name} avatar`}
            width={80}
            height={80}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        
        {/* Author info */}
        <div className="min-w-0 flex-1">
          <div 
            className="font-bold"
            style={{ 
              color: "hsl(var(--color-testimonial-author-name))",
              fontSize: "var(--font-size-testimonial-author-name)",
              fontWeight: "var(--font-weight-bold)",
              marginBottom: "var(--space-1)",
              fontFamily: "var(--font-geist-sans)",
            }}
          >
            {review.name}
          </div>
          <div 
            style={{ 
              color: "hsl(var(--color-testimonial-author-title))",
              fontSize: "var(--font-size-testimonial-author-title)",
              fontWeight: "var(--font-weight-medium)",
              fontFamily: "var(--font-geist-sans)",
            }}
          >
            {review.title}
          </div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ reviews, direction = "left" }: { reviews: Testimonial[]; direction?: "left" | "right" }) {
  return (
    <div 
      className="overflow-hidden w-full"
      style={{ 
        paddingTop: "var(--space-4)", 
        paddingBottom: "var(--space-4)" 
      }}
    >
      <div
        className={`flex ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={{
          gap: "var(--space-testimonial-card-gap)",
          width: "max-content",
        }}
      >
        {[...reviews, ...reviews].map((review, idx) => (
          <ReviewCard review={review} key={`${review.id}-${idx}`} />
        ))}
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  // Get all testimonials from our data
  const allTestimonials = getFeaturedTestimonials();
  
  // Split testimonials: first 4 for top row, last 4 for bottom row
  const topRowTestimonials = allTestimonials.slice(0, 4);
  const bottomRowTestimonials = allTestimonials.slice(4, 8);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20" style={{ paddingTop: "var(--space-32)" }}>
      <Container>
        <div className="text-center mb-16">
          <h2 
            className="mb-4"
            style={{
              fontSize: "var(--font-size-4xlPlus)",
              fontWeight: "var(--font-weight-extrabold)",
              fontFamily: "var(--font-geist-sans)",
              color: "hsl(var(--foreground)",
              lineHeight: "var(--line-height-relaxed)",
            }}
          >
            Trusted by 10,000+ Designers and Their<br />Teams
          </h2>
        </div>

        {/* Marquee container with gradient overlays */}
        <div className="relative">
          {/* Left gradient overlay */}
          <div 
            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"
            style={{ width: "var(--space-testimonial-gradient-overlay-width)" }}
          />
          
          {/* Right gradient overlay */}
          <div 
            className="absolute right-0 top-0 bottom-0 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"
            style={{ width: "var(--space-testimonial-gradient-overlay-width)" }}
          />
          
          {/* Top row - moving right to left */}
          <MarqueeRow 
            reviews={topRowTestimonials} 
            direction="left"
          />
          
          {/* Bottom row - moving left to right */}
          <MarqueeRow 
            reviews={bottomRowTestimonials} 
            direction="right"
          />
        </div>
      </Container>
    </section>
  );
}
