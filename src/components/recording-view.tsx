import { useState } from "react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { AudioRecorder } from "./audio-recorder"
import { TranscriptionView } from "./transcription-view"
import { ReportGenerator } from "./report-generator"

export function RecordingView() {
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null)
  const [transcription, setTranscription] = useState<string>("")
  
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Patient Consultation Recording</h2>
        <AudioRecorder onRecordingComplete={setAudioBlob} />
      </Card>

      {audioBlob && (
        <Tabs defaultValue="transcription">
          <TabsList>
            <TabsTrigger value="transcription">Transcription</TabsTrigger>
            <TabsTrigger value="report">Report Generator</TabsTrigger>
          </TabsList>
          <TabsContent value="transcription">
            <TranscriptionView 
              audioBlob={audioBlob}
              onTranscriptionComplete={setTranscription}
            />
          </TabsContent>
          <TabsContent value="report">
            <ReportGenerator transcription={transcription} />
          </TabsContent>
        </Tabs>
      )}
    </div>
  )
} 