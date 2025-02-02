import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface RecentPatient {
  id: string
  name: string
  date: string
  type: string
  status: 'completed' | 'scheduled' | 'cancelled'
}

const recentPatients: RecentPatient[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    date: "Today, 2:00 PM",
    type: "Follow-up",
    status: "completed"
  },
  {
    id: "2",
    name: "Michael Chen",
    date: "Today, 3:30 PM",
    type: "Consultation",
    status: "scheduled"
  },
  {
    id: "3",
    name: "Emily Brown",
    date: "Today, 4:15 PM",
    type: "Check-up",
    status: "scheduled"
  },
  {
    id: "4",
    name: "David Wilson",
    date: "Yesterday",
    type: "Follow-up",
    status: "completed"
  },
  {
    id: "5",
    name: "Lisa Anderson",
    date: "Yesterday",
    type: "Consultation",
    status: "cancelled"
  }
]

export function RecentPatients() {
  return (
    <div className="space-y-8">
      {recentPatients.map((patient) => (
        <div key={patient.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback>
              {patient.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{patient.name}</p>
            <p className="text-sm text-muted-foreground">
              {patient.type}
            </p>
          </div>
          <div className="ml-auto text-sm">
            <div className="text-right">{patient.date}</div>
            <div className={`text-xs ${
              patient.status === 'completed' 
                ? 'text-green-500' 
                : patient.status === 'cancelled' 
                  ? 'text-red-500' 
                  : 'text-blue-500'
            }`}>
              {patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 