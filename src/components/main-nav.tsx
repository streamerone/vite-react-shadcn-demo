import { Link } from "./ui/link"

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block text-foreground">MANGO</span>
      </Link>
      <nav className="flex gap-6">
        <Link href="/patients" className="text-sm font-medium dark:text-gray-300 dark:hover:text-white">
          Patients
        </Link>
        <Link href="/appointments" className="text-sm font-medium dark:text-gray-300 dark:hover:text-white">
          Appointments
        </Link>
        <Link href="/reports" className="text-sm font-medium dark:text-gray-300 dark:hover:text-white">
          Reports
        </Link>
      </nav>
    </div>
  )
} 