import { ThemeToggle } from "@/components/theme-toggle";
import { FigmaButton } from "@/components/ui/FigmaButton";
import { ChromeButton } from "@/components/ui/ChromeButton";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-24 bg-background text-foreground">
      {/* Theme toggle at top right */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <h1 className="text-3xl font-bold mb-6">DesignPro Clone</h1>

      {/* Showcase new buttons only */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <FigmaButton href="#">Try Figma Plugin</FigmaButton>
        <ChromeButton href="#">Try Chrome Extension</ChromeButton>
      </div>
    </main>
  );
}

