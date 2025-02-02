import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { useTheme } from "@/components/theme-provider"

const data = [
  {
    name: "Jan",
    total: 234,
    emergency: 42,
    followup: 92,
  },
  {
    name: "Feb",
    total: 245,
    emergency: 38,
    followup: 105,
  },
  // ... add more months
]

export function Overview() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey="name"
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
                  <div className="grid gap-2">
                    {payload.map((p) => (
                      <div key={p.dataKey} className="flex items-center justify-between gap-2">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                          {p.dataKey}
                        </span>
                        <span className="font-bold text-muted-foreground">
                          {p.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Line
          type="monotone"
          dataKey="total"
          strokeWidth={2}
          className="stroke-primary dark:stroke-primary/80"
        />
        <Line
          type="monotone"
          dataKey="emergency"
          strokeWidth={2}
          className="stroke-green-500 dark:stroke-green-400"
        />
        <Line
          type="monotone"
          dataKey="followup"
          strokeWidth={2}
          className="stroke-blue-500 dark:stroke-blue-400"
        />
      </LineChart>
    </ResponsiveContainer>
  )
} 