import { Button } from "@/components/ui/button"
import { WeekView } from "@/components/calendar/week-view"
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react"
import { useState } from "react"
import { addWeeks, startOfWeek } from "date-fns"

export function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const startOfCurrentWeek = startOfWeek(currentDate, { weekStartsOn: 1 })

  const goToPreviousWeek = () => {
    setCurrentDate(addWeeks(currentDate, -1))
  }

  const goToNextWeek = () => {
    setCurrentDate(addWeeks(currentDate, 1))
  }

  const goToToday = () => {
    setCurrentDate(new Date())
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Calendar</h2>
          <p className="text-sm text-muted-foreground">
            Manage your appointments and schedule
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={goToPreviousWeek}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" onClick={goToToday}>
            <CalendarIcon className="mr-2 h-4 w-4" />
            Today
          </Button>
          <Button variant="outline" size="icon" onClick={goToNextWeek}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <WeekView startDate={startOfCurrentWeek} />
    </div>
  )
} 