import React, { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/download/audio/2022/02/22/audio_d1718ab41b.mp3?filename=relaxing-mountains-rivers-142569.mp3"
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
    </div>
  );
};

export default AudioPlayer;