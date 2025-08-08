import { Mail } from "lucide-react";
import Link from "next/link";

import { EmailProtection } from "@/components/email-protection";
import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-12 md:py-16">
          <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Kyobeom Song
                </h1>
                <p className="text-xl text-muted-foreground">송교범, 宋敎範</p>
                <p className="text-lg">
                  Math Ph.D. Candidate at Rutgers University, New Brunswick
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Welcome. I am Kyobeom Song, a Math Ph.D. Candidate at Rutgers
                  University, New Brunswick, working with Professor{" "}
                  <Link
                    href="https://sites.math.rutgers.edu/~cl1412/"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chi Li
                  </Link>
                  .
                </p>
                <p>
                  You may contact me at{" "}
                  <EmailProtection email="ks1951 at math dot rutgers dot edu" />
                  .
                </p>
                <p>My primary research interest is geometry.</p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button
                    asChild
                    className="group relative transition-all duration-300 ease-in-out"
                  >
                    <Link href="/research">
                      <span className="relative flex items-center">
                        View My Research
                        <svg
                          className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="group relative transition-all duration-300 ease-in-out hover:text-primary"
                  >
                    <Link href="/cv">
                      <span className="relative flex items-center">
                        Curriculum Vitae
                        <span className="ml-2 inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="aspect-square flex items-center justify-center p-6">
              <img
                src="/ks1951.jpg"
                alt="My photo"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>
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
