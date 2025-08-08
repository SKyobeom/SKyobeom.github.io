import { ArrowLeft, ExternalLink, Mail } from "lucide-react";
import Link from "next/link";

import { EmailProtection } from "@/components/email-protection";
import { MainNav } from "@/components/main-nav";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ResearchPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Research</h1>
          </div>
          <Separator className="my-6" />

          <div className="prose max-w-none">
            <p>
              I'm a geometer/topologist. What captivates me most about geometry
              is the interplay among diverse mathematics within a single
              problem. Consequently, I do not confine myself exclusively to a
              particular area or tools—I consider myself quite a generalist and
              aspire to approach problems from multiple perspectives.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              Current Research Problems
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Blaschke's Conjecture in Complex Projective Spaces</li>
              <li>Geometric Features of Entire Grauert Tubes</li>
              <li>Signature and Casson Invariant of Milnor Fiber</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">Papers</h2>
            <ol className="list-decimal pl-5">
              <li className="mb-2">
                Zoll Manifolds of Type ℂℙⁿ with Entire Grauert Tubes{" "}
                (with <strong>Chi Li</strong>),{" "}
                <a
                  href="https://arxiv.org/abs/2501.15682"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  arxiv.org/abs/2501.15682
                </a>
                , submitted
              </li>
              <li className="mb-2">
                A Note on Zoll Manifolds with Entire Grauert Tubes,{" "}
                <a
                  href="https://arxiv.org/abs/2508.03352"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  arxiv.org/abs/2508.03352
                </a>
              </li>
            </ol>

            <h2 className="text-xl font-semibold mt-8 mb-4">Invited Talks</h2>
            <ol className="list-decimal pl-5">
              <li className="mb-2">
                Characterization of Zoll Manifolds via Algebraization – Lightning Talk(15 min) at Summer school I: Invitation to complex geometry, Renyi Institute, August 08, 2025
              </li>
              <li className="mb-2">
                Characterization of Zoll Manifolds via Algebraization – Rutgers Complex Geometry Seminar, March 14, 2025
              </li>
              <li className="mb-2">
                What is: Geometric Group Theory? – Rutgers Student Geometry/Topology Seminar, November 7, 2023
              </li>
            </ol>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Kyobeom Song. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="mailto:ks1951@math.rutgers.edu"
              className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
            >
              <Mail className="h-4 w-4" />
              <EmailProtection email="ks1951 at math dot rutgers dot edu" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
