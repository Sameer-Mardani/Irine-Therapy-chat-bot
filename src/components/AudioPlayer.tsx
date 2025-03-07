import React, { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

// Assuming your sound files are in a "public/audio" folder or similar
const soundFiles = [
  "/light_rainn.mp3",
  "/forest_ambienc.mp3",
  "/water_oceanwave.mp3",
];

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % soundFiles.length; // Cycle through tracks
    setCurrentTrackIndex(nextIndex);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = soundFiles[nextIndex];
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing next track:", error);
        });
      }
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2">
      <audio
        ref={audioRef}
        loop
        src={soundFiles[currentTrackIndex]} // Start with the first track
      />
      <Button
        variant="outline"
        size="icon"
        onClick={togglePlay}
        className="bg-white/80 backdrop-blur-sm hover:bg-white/90"
      >
        {isPlaying ? (
          <Volume2 className="h-4 w-4" />
        ) : (
          <VolumeX className="h-4 w-4" />
        )}
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={nextTrack}
        className="bg-white/80 backdrop-blur-sm hover:bg-white/90"
      >
        Next
      </Button>
    </div>
  );
};

export default AudioPlayer;
