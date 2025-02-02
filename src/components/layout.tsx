import { ModeToggle } from "./mode-toggle"
import { UserNav } from "./user-nav"
import { MainNav } from "./main-nav"
import { Sidebar } from "./sidebar"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-950">
      <header className="border-b dark:border-gray-800">
        <div className="flex h-16 items-center px-4">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <ModeToggle />
            <UserNav />
          </div>
        </div>
      </header>

      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  )
} 