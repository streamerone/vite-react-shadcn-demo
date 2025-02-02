import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { useTheme } from "@/components/theme-provider"

const data = [
  { hour: "8 AM", visits: 12, waitTime: 8 },
  { hour: "9 AM", visits: 28, waitTime: 15 },
  { hour: "10 AM", visits: 41, waitTime: 22 },
  { hour: "11 AM", visits: 35, waitTime: 18 },
  { hour: "12 PM", visits: 25, waitTime: 12 },
  { hour: "1 PM", visits: 22, waitTime: 10 },
  { hour: "2 PM", visits: 32, waitTime: 15 },
  { hour: "3 PM", visits: 38, waitTime: 20 },
  { hour: "4 PM", visits: 30, waitTime: 14 },
  { hour: "5 PM", visits: 18, waitTime: 8 },
]

export function VisitFrequency() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-muted-foreground">Busiest time</div>
          <div className="text-2xl font-bold">10:00 AM</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Avg. daily visits</div>
          <div className="text-2xl font-bold">28.1</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Peak wait time</div>
          <div className="text-2xl font-bold">22m</div>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis 
            dataKey="hour" 
            stroke={isDark ? "#888888" : "#666666"}
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke={isDark ? "#888888" : "#666666"}
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Tooltip 
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                          Visits
                        </span>
                        <span className="font-bold text-muted-foreground">
                          {payload[0].value}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                          Wait Time
                        </span>
                        <span className="font-bold text-muted-foreground">
                          {payload[1].value}m
                        </span>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
          <Bar
            dataKey="visits"
            fill="currentColor"
            radius={[4, 4, 0, 0]}
            className="fill-primary dark:fill-primary/80"
          />
          <Bar
            dataKey="waitTime"
            fill="currentColor"
            radius={[4, 4, 0, 0]}
            className="fill-muted dark:fill-muted/80"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
} 