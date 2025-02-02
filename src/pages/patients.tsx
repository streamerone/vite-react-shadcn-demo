import { Input } from "@/components/ui/input"
import { useState } from "react"
import { PatientList } from "@/components/patients/patient-list"
import { Search } from "lucide-react"

export function PatientsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Patients</h2>
          <p className="text-sm text-muted-foreground">
            Manage and view your patient records
          </p>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search patients..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <PatientList searchQuery={searchQuery} />
    </div>
  )
} 