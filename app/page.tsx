import { ExperienceSection } from "@/components/experience-section"
import { IntroSection } from "@/components/intro-section"
import { ProjectsSection } from "@/components/projects-section"

export default function Page() {
  return (
    <div className="isolate flex min-h-svh flex-col">
      <main className="mx-auto flex max-w-3xl flex-1 flex-col gap-20 px-6 py-16 sm:gap-24 sm:px-8 sm:py-24">
        <IntroSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>
    </div>
  )
}
