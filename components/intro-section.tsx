import Image from "next/image"
import { Mail } from "lucide-react"

import { GitHub, X } from "@/components/icons"
import { Button } from "@/components/ui/button"

export function IntroSection() {
  return (
    <section aria-labelledby="intro-heading" className="flex flex-col gap-8">
      <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-8">
        <Image
          src="https://github.com/akash3444.png"
          alt=""
          width={120}
          height={120}
          className="size-30 shrink-0 rounded-2xl object-cover ring ring-border"
        />
        <div className="flex min-w-0 flex-col justify-between gap-3">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-medium tracking-tight">
              Akash Moradiya
            </h1>
            <p className="text-base text-muted-foreground">Frontend Engineer</p>
          </div>
          <nav aria-label="Social links">
            <ul className="flex items-center gap-2">
              <li>
                <Button
                  render={
                    <a
                      href="https://x.com/akash_3444"
                      target="_blank"
                      rel="noreferrer"
                      title="X"
                    />
                  }
                  nativeButton={false}
                  variant="secondary"
                  size="icon"
                  aria-label="X"
                  className="border border-border/70 text-muted-foreground hover:text-foreground"
                >
                  <X aria-hidden="true" />
                </Button>
              </li>
              <li>
                <Button
                  render={
                    <a
                      href="https://github.com/akash3444"
                      target="_blank"
                      rel="noreferrer"
                      title="GitHub"
                    />
                  }
                  nativeButton={false}
                  variant="secondary"
                  size="icon"
                  aria-label="GitHub"
                  className="border border-border/70 text-muted-foreground hover:text-foreground"
                >
                  <GitHub aria-hidden="true" className="size-4.75" />
                </Button>
              </li>
              <li>
                <Button
                  render={
                    <a
                      href="mailto:akashmoradiya3444@gmail.com"
                      title="Email"
                    />
                  }
                  nativeButton={false}
                  variant="secondary"
                  size="icon"
                  aria-label="Email"
                  className="border border-border/70 text-muted-foreground hover:text-foreground"
                >
                  <Mail aria-hidden="true" />
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <p className="max-w-[48ch] text-xl/8 text-pretty text-muted-foreground sm:text-lg/8">
        A frontend engineer who builds polished interfaces, works on complex
        product features, and cares deeply about performance.
      </p>
    </section>
  )
}
