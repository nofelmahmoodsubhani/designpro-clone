

import Header from "@/components/Header";
import { ThemeToggle } from "@/components/theme-toggle";
import { FigmaButton } from "@/components/ui/FigmaButton";
import { ChromeButton } from "@/components/ui/ChromeButton";
import { CreatorBadge } from "@/components/ui/creator-badge";
import Container from "@/components/Container";
import VideoDemo from "@/components/VideoDemo";
import StatisticsCard from "@/components/StatisticsCard";

export default function Home() {
  return (
    <>
      <Header />
            <main
              id="main"
              className="relative flex min-h-screen flex-col items-center text-foreground"
              style={{ background: 'var(--color-background)', paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)' }}
            >
        {/* Theme toggle at top right */}
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>

        <Container className="flex flex-col items-center" style={{ marginTop: 'var(--space-8)' }}>
          <span className="mb-10 pl-3 pr-1 py-0.5 rounded-full bg-muted text-foreground text-base font-medium inline-flex items-center gap-0">
            From the creators of
            <span className="font-bold bg-background text-foreground rounded-full px-3 py-0.5 ml-2" style={{ boxShadow: 'var(--shadow-lg)' }}>Siri</span>
          </span>
          <h1
            className="text-4xl sm:text-6xl font-bold text-center mb-6"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 'var(--font-weight-bold, 700)',
              color: 'var(--color-foreground)',
              letterSpacing: 'var(--letter-spacing-tight)',
              lineHeight: 1.03,
              maxWidth: '900px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <span>UX guidance for</span>
            <br className="block sm:hidden" />
            <span className="block">fast-moving teams</span>
          </h1>
          <p
            className="text-lg sm:text-xl text-muted-foreground text-center mb-10"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 'var(--font-weight-medium)',
              letterSpacing: 'var(--letter-spacing-tight)',
              lineHeight: 1.4,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Real-time design expertise at your team’s fingertips–cut feedback cycles, ship faster, and make better<br />
            product decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <FigmaButton href="#" />
            <ChromeButton href="#" />
          </div>
        </Container>

        {/* Video Demo Section */}
        <Container className="py-16">
          <VideoDemo />
        </Container>

        {/* Statistics Card Section */}
        <Container className="py-0">
          <StatisticsCard />
        </Container>
      </main>
    </>
  );
}

