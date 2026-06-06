import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center px-6">
      <p className="text-xs tracking-[0.3em] uppercase text-[#9E7C5C] mb-6">
        404
      </p>
      <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight text-white mb-6 text-center">
        Not Found
      </h1>
      <p className="text-white/50 text-center max-w-sm leading-relaxed mb-12">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Button asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
