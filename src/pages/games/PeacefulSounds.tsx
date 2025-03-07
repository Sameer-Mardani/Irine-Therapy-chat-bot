import React, { useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import CloudBackground from "@/components/CloudBackground";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const peacefulTracks = [
  {
    id: 1,
    title: "Gentle Rain",
    duration: "3:45",
    category: "Nature Sounds",
    imageUrl: "https://images.unsplash.com/photo-1518877593221-1f28583780b4",
    audioSrc: "/light_rainn.mp3",
  },
  {
    id: 2,
    title: "Ocean Waves",
    duration: "5:20",
    category: "Nature Sounds",
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    audioSrc: "/water_oceanwave.mp3",
  },
  {
    id: 3,
    title: "Forest Meditation",
    duration: "4:15",
    category: "Meditation",
    imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    audioSrc: "/forest_ambienc.mp3",
  },
];

const PeacefulSounds = () => {
  const [playing, setPlaying] = useState<number | null>(null);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = (trackId: number) => {
    if (!audioRef.current) return;

    const track = peacefulTracks.find((t) => t.id === trackId);
    if (!track) return;

    if (playing === trackId) {
      audioRef.current.pause();
      setPlaying(null);
    } else {
      audioRef.current.src = track.audioSrc;
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setPlaying(trackId);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <div className="min-h-screen bg-wellness-blue/20">
      <CloudBackground />
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12 relative">
        <h1 className="text-3xl font-semibold text-center mb-8 text-wellness-blue">
          Peaceful Sounds
        </h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Immerse yourself in a collection of calming sounds and melodies
          designed to help you relax and find peace.
        </p>

        {/* Single audio element for all tracks */}
        <audio ref={audioRef} loop />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {peacefulTracks.map((track) => (
            <Card key={track.id} className="p-4 bg-white/80 backdrop-blur-sm">
              <div className="aspect-video relative rounded-md overflow-hidden mb-4">
                <img
                  src={track.imageUrl}
                  alt={track.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold mb-1">{track.title}</h3>
              <p className="text-sm text-gray-500 mb-4">
                {track.category} • {track.duration}
              </p>
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => togglePlay(track.id)}
                  className="w-10 h-10 rounded-full"
                >
                  {playing === track.id ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMute}
                  className="w-10 h-10 rounded-full"
                >
                  {muted ? (
                    <VolumeX className="h-4 w-4" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PeacefulSounds;
