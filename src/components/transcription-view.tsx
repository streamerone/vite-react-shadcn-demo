import { useState } from "react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Loader2 } from "lucide-react"

interface TranscriptionViewProps {
  audioBlob: Blob
  onTranscriptionComplete: (text: string) => void
}

export function TranscriptionView({ audioBlob, onTranscriptionComplete }: TranscriptionViewProps) {
  const [isTranscribing, setIsTranscribing] = useState(false)
  const [transcription, setTranscription] = useState("")

  const transcribeAudio = async () => {
    setIsTranscribing(true)
    // TODO: Implement actual transcription service integration
    // This is where you'd call your backend API that handles the transcription
    // For now, we'll simulate a delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    const mockTranscription = "Patient reports experiencing headaches for the past week..."
    setTranscription(mockTranscription)
    onTranscriptionComplete(mockTranscription)
    setIsTranscribing(false)
  }

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">Transcription</h3>
          <Button 
            onClick={transcribeAudio} 
            disabled={isTranscribing}
          >
            {isTranscribing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Transcribe Audio
          </Button>
        </div>
        
        {transcription ? (
          <div className="p-4 rounded-md bg-muted">
            <p>{transcription}</p>
          </div>
        ) : (
          <p className="text-muted-foreground">
            Click "Transcribe Audio" to generate transcription
          </p>
        )}
      </div>
    </Card>
  )
} 