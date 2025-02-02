import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { useTheme } from "@/components/theme-provider"

const data = [
  { name: "Hypertension", value: 145 },
  { name: "Diabetes", value: 98 },
  { name: "Asthma", value: 76 },
  { name: "Arthritis", value: 65 },
  { name: "Anxiety", value: 54 }
]

const COLORS = {
  light: ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"],
  dark: ["#4299E1", "#48BB78", "#ECC94B", "#ED8936", "#9F7AEA"]
}

export function ConditionsChart() {
  const { theme } = useTheme()
  const colors = theme === "dark" ? COLORS.dark : COLORS.light

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="flex flex-col">
                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                      {payload[0].name}
                    </span>
                    <span className="font-bold text-muted-foreground">
                      {payload[0].value} patients
                    </span>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
} 