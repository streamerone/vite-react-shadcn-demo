import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"

interface Patient {
  id: string
  name: string
  dateOfBirth: Date
  lastVisit: Date
  upcomingAppointment?: Date
  conditions: string[]
  status: 'active' | 'inactive'
  phoneNumber: string
  email: string
}

const SAMPLE_PATIENTS: Patient[] = [
  {
    id: "P001",
    name: "John Smith",
    dateOfBirth: new Date(1985, 5, 15),
    lastVisit: new Date(2024, 2, 1),
    upcomingAppointment: new Date(2024, 3, 15),
    conditions: ["Hypertension", "Type 2 Diabetes"],
    status: "active",
    phoneNumber: "(555) 123-4567",
    email: "john.smith@email.com"
  },
  {
    id: "P002",
    name: "Emma Davis",
    dateOfBirth: new Date(1992, 8, 23),
    lastVisit: new Date(2024, 2, 5),
    conditions: ["Asthma"],
    status: "active",
    phoneNumber: "(555) 234-5678",
    email: "emma.davis@email.com"
  },
  {
    id: "P003",
    name: "Michael Chang",
    dateOfBirth: new Date(1978, 3, 10),
    lastVisit: new Date(2024, 1, 28),
    upcomingAppointment: new Date(2024, 3, 20),
    conditions: ["Arthritis"],
    status: "active",
    phoneNumber: "(555) 345-6789",
    email: "m.chang@email.com"
  },
  {
    id: "P004",
    name: "Sarah Johnson",
    dateOfBirth: new Date(1990, 11, 3),
    lastVisit: new Date(2024, 2, 10),
    conditions: ["Anxiety", "Migraine"],
    status: "active",
    phoneNumber: "(555) 456-7890",
    email: "sarah.j@email.com"
  },
  {
    id: "P005",
    name: "Robert Brown",
    dateOfBirth: new Date(1965, 7, 28),
    lastVisit: new Date(2024, 1, 15),
    upcomingAppointment: new Date(2024, 3, 18),
    conditions: ["Coronary Artery Disease"],
    status: "active",
    phoneNumber: "(555) 567-8901",
    email: "r.brown@email.com"
  },
  {
    id: "P006",
    name: "Lisa Anderson",
    dateOfBirth: new Date(1982, 4, 12),
    lastVisit: new Date(2024, 2, 8),
    conditions: ["Depression"],
    status: "active",
    phoneNumber: "(555) 678-9012",
    email: "l.anderson@email.com"
  },
  {
    id: "P007",
    name: "David Wilson",
    dateOfBirth: new Date(1973, 9, 5),
    lastVisit: new Date(2024, 1, 20),
    conditions: ["GERD", "Sleep Apnea"],
    status: "inactive",
    phoneNumber: "(555) 789-0123",
    email: "d.wilson@email.com"
  },
  {
    id: "P008",
    name: "Maria Garcia",
    dateOfBirth: new Date(1995, 2, 18),
    lastVisit: new Date(2024, 2, 12),
    upcomingAppointment: new Date(2024, 3, 25),
    conditions: ["Hypothyroidism"],
    status: "active",
    phoneNumber: "(555) 890-1234",
    email: "m.garcia@email.com"
  },
  {
    id: "P009",
    name: "James Wilson",
    dateOfBirth: new Date(1988, 6, 30),
    lastVisit: new Date(2024, 2, 3),
    conditions: ["Allergies"],
    status: "active",
    phoneNumber: "(555) 901-2345",
    email: "j.wilson@email.com"
  },
  {
    id: "P010",
    name: "Emily White",
    dateOfBirth: new Date(1979, 1, 25),
    lastVisit: new Date(2024, 1, 30),
    conditions: ["Osteoporosis"],
    status: "active",
    phoneNumber: "(555) 012-3456",
    email: "e.white@email.com"
  },
  // Add 10 more patients with similar data structure...
]

interface PatientListProps {
  searchQuery: string
}

export function PatientList({ searchQuery }: PatientListProps) {
  const filteredPatients = SAMPLE_PATIENTS.filter(patient => 
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.conditions.some(condition => 
      condition.toLowerCase().includes(searchQuery.toLowerCase())
    ) ||
    patient.id.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="dark:text-darkText">Name</TableHead>
            <TableHead className="dark:text-darkText">Age</TableHead>
            <TableHead className="dark:text-darkText">Conditions</TableHead>
            <TableHead className="dark:text-darkText">Last Visit</TableHead>
            <TableHead className="dark:text-darkText">Next Appointment</TableHead>
            <TableHead className="dark:text-darkText">Status</TableHead>
            <TableHead className="dark:text-darkText">Contact</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPatients.map((patient) => (
            <TableRow key={patient.id}>
              <TableCell className="font-medium dark:text-darkText">
                {patient.name}
              </TableCell>
              <TableCell className="dark:text-darkText">
                {new Date().getFullYear() - patient.dateOfBirth.getFullYear()}
              </TableCell>
              <TableCell>
                <div className="flex gap-1 flex-wrap">
                  {patient.conditions.map(condition => (
                    <Badge key={condition} variant="secondary" className="dark:text-darkText">
                      {condition}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell className="dark:text-darkText">
                {format(patient.lastVisit, 'MMM d, yyyy')}
              </TableCell>
              <TableCell className="dark:text-darkText">
                {patient.upcomingAppointment 
                  ? format(patient.upcomingAppointment, 'MMM d, yyyy')
                  : "None scheduled"}
              </TableCell>
              <TableCell>
                <Badge 
                  variant={patient.status === 'active' ? 'default' : 'secondary'}
                  className={patient.status === 'active' ? '' : 'dark:text-darkText'}
                >
                  {patient.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="text-sm">
                  <div className="dark:text-darkText">{patient.phoneNumber}</div>
                  <div className="text-muted-foreground dark:text-gray-400">
                    {patient.email}
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
} 