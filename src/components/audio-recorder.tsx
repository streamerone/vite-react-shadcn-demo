import { useState, useRef } from "react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Mic, Square, Loader2 } from "lucide-react"

interface AudioRecorderProps {
  onRecordingComplete: (blob: Blob) => void
}

export function AudioRecorder({ onRecordingComplete }: AudioRecorderProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      mediaRecorderRef.current = new MediaRecorder(stream)
      
      mediaRecorderRef.current.ondataavailable = (e) => {
        chunksRef.current.push(e.data)
      }

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' })
        onRecordingComplete(blob)
        chunksRef.current = []
      }

      mediaRecorderRef.current.start()
      setIsRecording(true)
    } catch (err) {
      console.error("Error accessing microphone:", err)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop()
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop())
      setIsRecording(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        {!isRecording ? (
          <Button onClick={startRecording}>
            <Mic className="mr-2 h-4 w-4" />
            Start Recording
          </Button>
        ) : (
          <Button variant="destructive" onClick={stopRecording}>
            <Square className="mr-2 h-4 w-4" />
            Stop Recording
          </Button>
        )}
      </div>
      
      {isRecording && (
        <div className="flex items-center text-sm text-muted-foreground">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Recording in progress...
        </div>
      )}
    </div>
  )
} 