import { ThemeProvider } from "@/components/theme-provider"
import { Layout } from "@/components/layout"
import { RecordingView } from "@/components/recording-view"
import { CalendarPage } from "@/pages/calendar"
import { PatientsPage } from "@/pages/patients"
import { AnalyticsPage } from "@/pages/analytics"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Layout>
          <Routes>
            <Route path="/" element={<RecordingView />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/patients" element={<PatientsPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
