import { GitHub, X } from "@/components/icons"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10 py-4">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-6 px-6 sm:px-8">
        <p className="text-base/7 text-muted-foreground sm:text-sm/6">
          Designed and built by Akash Moradiya
        </p>
        <nav aria-label="Social links">
          <ul className="flex items-center gap-1">
            <li>
              <Button
                render={
                  <a
                    href="https://x.com/akash_3444"
                    target="_blank"
                    rel="noreferrer"
                  />
                }
                nativeButton={false}
                variant="ghost"
                size="icon"
                aria-label="X"
                className="text-muted-foreground"
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
                  />
                }
                nativeButton={false}
                variant="ghost"
                size="icon"
                aria-label="GitHub"
                className="text-muted-foreground"
              >
                <GitHub aria-hidden="true" className="size-5" />
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
