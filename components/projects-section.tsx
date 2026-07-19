const projects = [
  {
    name: "Shadcn UI Blocks",
    url: "https://shadcnui-blocks.com",
    description:
      "A library of 200+ production-ready blocks and 25+ customized shadcn/ui components, ready to copy and ship.",
  },
  {
    name: "basecn",
    url: "https://basecn.dev",
    description:
      "A collection of thoughtfully crafted shadcn/ui components powered by Base UI for building modern interfaces faster.",
  },
  {
    name: "FormCanvas",
    url: "https://formcanvas.dev",
    description:
      "A visual form builder that generates typed React Hook Form or TanStack Form code with your choice of validation library.",
  },
]

export function ProjectsSection() {
  return (
    <section aria-labelledby="projects-heading">
      <div className="flex flex-col gap-6">
        <h2
          id="projects-heading"
          className="max-w-[40ch] text-xl font-medium text-balance"
        >
          Projects
        </h2>
        <ul
          role="list"
          className="-mx-5 divide-y divide-dashed rounded-2xl border-foreground/10 bg-card py-2"
        >
          {projects.map((project) => (
            <li
              key={project.name}
              className="grid gap-2 px-5 py-4 sm:grid-cols-[1fr_2fr] sm:gap-8"
            >
              <h3 className="font-medium text-balance">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-dotted decoration-foreground/25 underline-offset-5 transition-colors hover:decoration-foreground"
                >
                  {project.name}
                </a>
              </h3>
              <p className="text-base/7 text-pretty text-muted-foreground">
                {project.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
