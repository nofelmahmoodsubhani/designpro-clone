import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-24 bg-background text-foreground">
      {/* Theme toggle at top right */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <h1 className="text-3xl font-bold mb-6">DesignPro Clone</h1>

      <div className="mb-6 space-x-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>

      <Button variant="default">Click me</Button>

      <Card className="w-[380px] mt-10">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>This is a card description.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Here’s the main content of the card.</p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </Card>
    </main>
  );
}

