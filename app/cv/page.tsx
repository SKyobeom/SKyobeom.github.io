import Link from "next/link"
import { Mail } from "lucide-react"

import { Separator } from "@/components/ui/separator"
import { MainNav } from "@/components/main-nav"
import { EmailProtection } from "@/components/email-protection"

export default function CurriculumVitaePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-12">
          <div className="flex flex-col items-start gap-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Curriculum Vitae</h1>
              <p className="text-muted-foreground">
                Song, Kyobeom (Contact: <EmailProtection email="ks1951 at math dot rutgers dot edu" />)
              </p>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="grid gap-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">Research Interest</h2>
              <p>Geometry; Complex Differential Geometry, Topology</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Education</h2>
              <ul className="space-y-4 list-disc pl-5">
                <li>
                  <div>
                    <span className="font-medium">Ph.D. in Mathematics</span>, September 2023 – present
                    <p className="text-muted-foreground">Rutgers University</p>
                  </div>
                </li>
                <li>
                  <div>
                    <span className="font-medium">B.S. in Mathematics (with distinction)</span>, March 2017 – February
                    2023
                    <p className="text-muted-foreground">Korea University</p>
                    <p className="text-sm mt-1 italic">
                      Note: Completed mandatory military service in South Korea from November 5, 2020 to August 4, 2022
                    </p>
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Awards and Honors</h2>

              <h3 className="text-lg font-medium mb-2">Graduate Period</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>
                  Academic Excellence Award at Rutgers (First place in the written qualification exam) (Fall 2023)
                </li>
              </ul>

              <h3 className="text-lg font-medium mb-2">Undergraduate Period</h3>
              <ul className="list-disc pl-5">
                <li>President's List (Fall 2018, Spring 2019), Dean's List (Spring 2018)</li>
                <li>
                  Best Tutor of the Korea University Tutoring Program (ranked in the top 5 university-wide) (Spring
                  2022)
                </li>
                <li>National Science & Technology Scholarship (full scholarship for 4 years)</li>
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

