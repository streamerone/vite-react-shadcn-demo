import { addDays, format, addWeeks, isSameDay } from "date-fns"
import { cn } from "@/lib/utils"

interface Appointment {
  id: string
  patientName: string
  time: string
  duration: number // in minutes
  type: 'checkup' | 'follow-up' | 'consultation'
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled'
}

const HOURS = Array.from({ length: 12 }, (_, i) => i + 8) // 8 AM to 7 PM

// Generate appointments for the next 4 weeks
function generateAppointments(): Appointment[] {
  const appointments: Appointment[] = []
  const types: Appointment['type'][] = ['checkup', 'follow-up', 'consultation']
  const patientFirstNames = ['John', 'Sarah', 'Mike', 'Emma', 'Robert', 'Lisa', 'David', 'Maria', 'James', 'Sophie']
  const patientLastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez']
  let id = 1

  // Generate appointments for next 4 weeks
  for (let week = 0; week < 4; week++) {
    // For each day of the week (Monday to Friday)
    for (let day = 0; day < 5; day++) {
      // Generate 2-4 appointments per day
      const numAppointments = Math.floor(Math.random() * 3) + 2
      const usedHours = new Set()

      for (let i = 0; i < numAppointments; i++) {
        // Generate random hour between 8 AM and 4 PM
        let hour
        do {
          hour = Math.floor(Math.random() * 9) + 8 // 8 AM to 4 PM
        } while (usedHours.has(hour))
        usedHours.add(hour)

        const minute = Math.random() < 0.5 ? 0 : 30
        const duration = [30, 45, 60][Math.floor(Math.random() * 3)]
        const type = types[Math.floor(Math.random() * types.length)]
        const firstName = patientFirstNames[Math.floor(Math.random() * patientFirstNames.length)]
        const lastName = patientLastNames[Math.floor(Math.random() * patientLastNames.length)]

        const appointmentDate = addDays(addWeeks(new Date(), week), day)
        appointmentDate.setHours(hour, minute, 0, 0)

        appointments.push({
          id: String(id++),
          patientName: `${firstName} ${lastName}`,
          time: format(appointmentDate, "yyyy-MM-dd HH:mm"),
          duration,
          type,
          status: 'scheduled'
        })
      }
    }
  }

  return appointments.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime())
}

const SAMPLE_APPOINTMENTS = generateAppointments()

function getAppointmentStyle(type: Appointment['type']) {
  switch (type) {
    case 'checkup':
      return 'bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700'
    case 'follow-up':
      return 'bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700'
    case 'consultation':
      return 'bg-purple-100 dark:bg-purple-900 border-purple-300 dark:border-purple-700'
    default:
      return 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700'
  }
}

interface WeekViewProps {
  startDate: Date
}

export function WeekView({ startDate }: WeekViewProps) {
  const days = Array.from({ length: 7 }, (_, i) => addDays(startDate, i))
  const today = new Date()

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)] bg-background border rounded-lg">
      {/* Header */}
      <div className="flex border-b">
        <div className="w-20 border-r" /> {/* Time column header */}
        {days.map((day) => (
          <div
            key={day.toString()}
            className={cn(
              "flex-1 text-center py-2 border-r last:border-r-0",
              isSameDay(day, today) && "bg-muted"
            )}
          >
            <div className="font-medium">{format(day, 'EEE')}</div>
            <div className="text-sm text-muted-foreground">{format(day, 'MMM d')}</div>
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="flex flex-1 overflow-y-auto">
        {/* Time column */}
        <div className="w-20 flex-none border-r">
          {HOURS.map((hour) => (
            <div
              key={hour}
              className="h-20 border-b text-sm text-muted-foreground text-right pr-2 pt-1"
            >
              {format(new Date().setHours(hour, 0), 'h:mm a')}
            </div>
          ))}
        </div>

        {/* Days */}
        {days.map((day) => (
          <div key={day.toString()} className={cn(
            "flex-1 border-r last:border-r-0",
            isSameDay(day, today) && "bg-muted/50"
          )}>
            {HOURS.map((hour) => (
              <div
                key={hour}
                className="h-20 border-b relative group"
              >
                {/* Render appointments for this day and hour */}
                {SAMPLE_APPOINTMENTS
                  .filter(apt => {
                    const aptDate = new Date(apt.time)
                    return (
                      format(aptDate, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd') &&
                      aptDate.getHours() === hour
                    )
                  })
                  .map((apt) => (
                    <div
                      key={apt.id}
                      className={cn(
                        "absolute left-0 right-0 mx-1 p-2 rounded border text-sm cursor-pointer hover:shadow-md transition-shadow",
                        getAppointmentStyle(apt.type)
                      )}
                      style={{
                        top: `${(parseInt(apt.time.split(':')[1]) / 60) * 100}%`,
                        height: `${(apt.duration / 60) * 100}%`
                      }}
                    >
                      <div className="font-medium truncate">{apt.patientName}</div>
                      <div className="text-xs truncate">
                        {format(new Date(apt.time), 'h:mm a')} - {apt.type}
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
} 