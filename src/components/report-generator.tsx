import { useState } from "react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Loader2 } from "lucide-react"

interface ReportGeneratorProps {
  transcription: string
}

export function ReportGenerator({ transcription }: ReportGeneratorProps) {
  const [reportType, setReportType] = useState("soap")
  const [isGenerating, setIsGenerating] = useState(false)
  const [report, setReport] = useState("")

  const generateReport = async () => {
    setIsGenerating(true)
    // TODO: Implement actual report generation service integration
    // This is where you'd call your backend API that generates the report
    await new Promise(resolve => setTimeout(resolve, 2000))
    const mockReport = "SOAP Report\n\nSubjective: Patient reports headaches...\nObjective: ...\nAssessment: ...\nPlan: ..."
    setReport(mockReport)
    setIsGenerating(false)
  }

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Select value={reportType} onValueChange={setReportType}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select report type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="soap">SOAP Note</SelectItem>
              <SelectItem value="progress">Progress Note</SelectItem>
              <SelectItem value="consultation">Consultation Note</SelectItem>
              <SelectItem value="discharge">Discharge Summary</SelectItem>
            </SelectContent>
          </Select>

          <Button onClick={generateReport} disabled={isGenerating || !transcription}>
            {isGenerating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Generate Report
          </Button>
        </div>

        {report ? (
          <div className="p-4 rounded-md bg-muted whitespace-pre-wrap">
            <p>{report}</p>
          </div>
        ) : (
          <p className="text-muted-foreground">
            Select a report type and click "Generate Report"
          </p>
        )}
      </div>
    </Card>
  )
} 