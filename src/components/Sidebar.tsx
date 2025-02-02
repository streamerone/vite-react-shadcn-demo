import { cn } from "@/lib/utils"
import {
  Calendar,
  Users,
  FileText,
  Settings,
  BarChart,
  Mic,
} from "lucide-react"
import { Link } from "./ui/link"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12 min-h-screen w-64 border-r bg-muted/10 dark:bg-gray-950", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold text-foreground">Dashboard</h2>
          <div className="space-y-1">
            <Link
              href="/recordings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <Mic className="h-4 w-4" />
              Recordings
            </Link>
            <Link
              href="/patients"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <Users className="h-4 w-4" />
              Patients
            </Link>
            <Link
              href="/calendar"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <Calendar className="h-4 w-4" />
              Calendar
            </Link>
            <Link
              href="/reports"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <FileText className="h-4 w-4" />
              Reports
            </Link>
            <Link
              href="/analytics"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <BarChart className="h-4 w-4" />
              Analytics
            </Link>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold text-foreground">Settings</h2>
          <div className="space-y-1">
            <Link
              href="/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <Settings className="h-4 w-4" />
              General
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
