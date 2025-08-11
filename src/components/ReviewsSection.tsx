'use client';

import React from "react";

const DUMMY_REVIEWS = [
  {
    text: "This tool is incredibly useful as it ensures that my junior designers work consistently and deliver high-quality results, freeing my mind for more strategic decisions.",
    name: "Kuber Chopra",
    title: "Founder, Rasta Design Agency",
    avatar: "/public/avatars/avatar1.png",
  },
  {
    text: "DesignPro aids my team in delivering websites and content that drives conversions, ultimately fulfilling my clients' business goals.",
    name: "Nick Punt",
    title: "Founder, Margins",
    avatar: "/public/avatars/avatar2.png",
  },
  {
    text: "DesignPro nailed the major weak points of my new user experience, helping me cover my blind spots.",
    name: "Alan Chan",
    title: "Head of APAC Marketing, Stripe",
    avatar: "/public/avatars/avatar3.png",
  },
  {
    text: "One of their big selling points is saving time for both stakeholders and users. With stakeholders you have to really understand what users want, which is the most difficult part and DesignPro can help address that.",
    name: "Meesh Lin",
    title: "ex-Senior Product Designer, Okta",
    avatar: "/public/avatars/avatar4.png",
  },
  {
    text: "I wish I had DesignPro for my team at Uber. The magical part is having all the feedback beautifully labeled and converted into tasks in an inbox.",
    name: "Emily Hsiung",
    title: "ex-Staff Designer, Uber",
    avatar: "/public/avatars/avatar5.png",
  },
  {
    text: "I've had sleepless nights doing design reviews more than once. With DesignPro I thought back to times in my career where I wish it had been there.",
    name: "Chetana Deorah",
    title: "ex-Design Director, Netflix",
    avatar: "/public/avatars/avatar6.png",
  },
];

function ReviewCard({ review }: { review: typeof DUMMY_REVIEWS[0] }) {
  return (
    <div
      className="shadow-lg flex flex-col items-start"
      style={{
        backgroundColor: "hsl(var(--background))",
        borderRadius: "var(--radius-2xl)",
        boxShadow: "var(--shadow-lg)",
        color: "hsl(var(--foreground))",
        padding: "var(--space-6)",
        minWidth: "var(--space-cardMin)",
        maxWidth: "var(--space-cardMax)",
        marginLeft: "var(--space-4)",
        marginRight: "var(--space-4)",
      }}
    >
      <p className="leading-relaxed" style={{ 
        color: "hsl(var(--color-gray600))",
        marginBottom: "var(--space-4)",
        fontSize: "var(--font-size-base)"
      }}>{review.text}</p>
      <div className="flex items-center mt-auto">
        <div className="rounded-full overflow-hidden" style={{
          width: "var(--space-10)",
          height: "var(--space-10)",
          backgroundColor: "hsl(var(--color-gray200))",
          marginRight: "var(--space-3)"
        }}>
          {/* Dummy avatar, replace with <Image /> if needed */}
        </div>
        <div>
          <div style={{ 
            color: "hsl(var(--foreground))",
            fontSize: "var(--font-size-base)",
            fontWeight: "var(--font-weight-bold)"
          }}>{review.name}</div>
          <div style={{ 
            color: "hsl(var(--color-mutedForeground))",
            fontSize: "var(--font-size-sm)"
          }}>{review.title}</div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ reviews, reverse = false }: { reviews: typeof DUMMY_REVIEWS; reverse?: boolean }) {
  return (
    <div className="overflow-hidden w-full" style={{ 
      paddingTop: "var(--space-2)", 
      paddingBottom: "var(--space-2)" 
    }}>
      <div
        className="flex animate-marquee"
        style={{
          gap: "var(--space-4)",
          animationDirection: reverse ? "reverse" : "normal",
          animationDuration: "var(--motion-durationSlow)",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {[...reviews, ...reviews].map((review, idx) => (
          <ReviewCard review={review} key={idx} />
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation-name: marquee;
        }
      `}</style>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="w-full bg-background" style={{ 
      paddingTop: "var(--space-48)", 
      paddingBottom: "var(--space-32)" 
    }}>
      <div className="mx-auto" style={{
        maxWidth: "var(--space-7xl)",
        paddingLeft: "var(--space-4)",
        paddingRight: "var(--space-4)"
      }}>
        <h2
          className="text-center"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: "var(--font-weight-bold)",
            color: "var(--foreground)",
            fontSize: "var(--font-size-5xl)",
            letterSpacing: "var(--letter-spacing-tight)",
            lineHeight: "var(--lineHeight-tight)",
            marginBottom: "var(--space-12)",
          }}
        >
          Trusted by 10,000+ Designers and Their<br />
          <span>Teams</span>
        </h2>
        <MarqueeRow reviews={DUMMY_REVIEWS} />
        <MarqueeRow reviews={DUMMY_REVIEWS} reverse />
      </div>
    </section>
  );
}
