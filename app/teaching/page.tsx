import Link from "next/link"
import { Mail } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { MainNav } from "@/components/main-nav"
import { EmailProtection } from "@/components/email-protection"

export default function TeachingPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Teaching</h1>
          </div>
          <Separator className="my-6" />

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">Current Teaching</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Intro Linear Algebra (MATH250:C2,C3)</CardTitle>
                  <CardDescription>Spring 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">Office Hours</h3>
                      <p>Monday and Thursday, 11:50 - 13:10, Hill 523</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Contact</h3>
                      <p>
                        <EmailProtection email="ks1951 at math dot rutgers dot edu" />
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">Review Sessions</h3>
                      <p>Schedule will be announced via Canvas.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Teaching History</h2>

              <h3 className="text-lg font-medium mb-2">Rutgers University</h3>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Intro Linear Algebra 1, Teaching Assistant at Large Classes, Spring 2025</li>
                <li>Calculus 2, Recitation Instructor, Fall 2024</li>
                <li>Intro Linear Algebra 1, Grader, Spring 2024</li>
                <li>Intro Real Analysis 1, Grader, Fall 2023</li>
                <li>Linear Algebra, Grader, Fall 2023</li>
              </ul>

              <h3 className="text-lg font-medium mb-2">Korea University</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Lebesgue Integration Theory, Tutoring Team Leader, Spring 2022
                  <p className="text-sm mt-1 italic">(Awarded as top 2 tutoring team University-wide)</p>
                </li>
                <li>Topology 1, Tutoring Team Leader, Spring 2021</li>
              </ul>
            </section>
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
  )
}

