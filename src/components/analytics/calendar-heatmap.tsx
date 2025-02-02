import { Card } from "@/components/ui/card"
import { addDays, format, startOfYear, eachDayOfInterval } from "date-fns"

export function CalendarHeatmap() {
  const startDate = startOfYear(new Date())
  const days = eachDayOfInterval({
    start: startDate,
    end: new Date(),
  })

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-52 gap-1">
        {Array.from({ length: 52 }).map((_, weekIndex) => (
          <div key={weekIndex} className="grid grid-rows-7 gap-1">
            {Array.from({ length: 7 }).map((_, dayIndex) => {
              const intensity = Math.random() // Replace with actual data
              return (
                <div
                  key={dayIndex}
                  className={`w-3 h-3 rounded-sm ${
                    intensity > 0.7
                      ? "bg-green-500"
                      : intensity > 0.4
                      ? "bg-green-300"
                      : "bg-green-100"
                  }`}
                  title={`${intensity * 100} visits`}
                />
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
} 