const experience = [
  {
    company: "Smallest AI",
    role: "Frontend Engineer",
    location: "Bangalore, India (Remote)",
    period: "2026 — Present",
    description:
      "Developing and optimizing the platform UI to create a faster, more polished user experience.",
  },
  {
    company: "Tagline Infotech LLP",
    role: "Frontend Engineer",
    location: "Surat, India (On-site)",
    period: "2022 — 2025",
    description:
      "Built frontend experiences across e-commerce, resource planning, and finance projects using React, Next.js, MUI, and Tailwind CSS.",
  },
]

export function ExperienceSection() {
  return (
    <section aria-labelledby="experience-heading">
      <div className="flex flex-col gap-6">
        <h2
          id="experience-heading"
          className="max-w-[40ch] text-xl font-medium text-balance"
        >
          Experience
        </h2>
        <ol
          role="list"
          className="-mx-5 divide-y divide-dashed rounded-2xl border-foreground/10 bg-card py-2"
        >
          {experience.map((item) => (
            <li
              key={`${item.company}-${item.period}`}
              className="grid gap-2 px-5 py-4 sm:grid-cols-[1fr_2fr] sm:gap-8"
            >
              <div className="min-w-0">
                <h3 className="font-medium text-balance">{item.company}</h3>
                <p className="text-base/7 text-muted-foreground sm:text-sm/6">
                  {item.role}
                </p>
              </div>
              <div className="min-w-0">
                <p className="text-base/7 text-pretty text-muted-foreground">
                  {item.description}
                </p>
                <p className="mt-3 w-fit max-w-full rounded-md bg-background px-2 py-px text-xs/5 font-normal text-muted-foreground tabular-nums ring-1 ring-foreground/10 ring-inset">
                  {item.period}
                  <span
                    aria-hidden="true"
                    className="mx-2 text-sm leading-none font-bold"
                  >
                    •
                  </span>
                  {item.location}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
