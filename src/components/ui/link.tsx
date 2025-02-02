import { cn } from "@/lib/utils"
import { Link as RouterLink } from "react-router-dom"

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

export function Link({ href, children, className, ...props }: LinkProps) {
  return (
    <RouterLink
      to={href}
      className={cn(
        "text-sm font-medium text-muted-foreground transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-white",
        className
      )}
      {...props}
    >
      {children}
    </RouterLink>
  )
} 