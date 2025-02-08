import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import CloudBackground from "@/components/CloudBackground";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Dummy data for therapists
const therapists = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Anxiety & Depression",
    experience: "15 years",
    bio: "Specialized in cognitive behavioral therapy with extensive experience in treating anxiety and depression. Committed to creating a safe and supportive environment for healing.",
    availability: "Monday, Wednesday, Friday",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Family Therapy",
    experience: "12 years",
    bio: "Expert in family dynamics and relationship counseling. Helps families build stronger connections and overcome challenges together.",
    availability: "Tuesday, Thursday, Saturday",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialization: "Trauma & PTSD",
    experience: "18 years",
    bio: "Specialized in trauma-informed therapy and EMDR. Dedicated to helping clients process trauma and build resilience.",
    availability: "Monday, Tuesday, Thursday",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
];

const HumanCare = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTherapists = therapists.filter(
    (therapist) =>
      therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      therapist.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-wellness-purple/20">
      <CloudBackground />
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12 relative">
        <h1 className="text-3xl font-semibold text-center mb-8 text-wellness-purple">
          Professional Human Care
        </h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with licensed therapists who can provide the support and guidance
          you need. Our professionals are here to help you on your journey to
          better mental health.
        </p>

        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by name or specialization..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {filteredTherapists.map((therapist) => (
            <Card
              key={therapist.id}
              className="p-6 bg-white/80 backdrop-blur-sm transform transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4">
                <img
                  src={therapist.imageUrl}
                  alt={therapist.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {therapist.name}
              </h3>
              <p className="text-wellness-purple font-medium text-center mb-2">
                {therapist.specialization}
              </p>
              <p className="text-sm text-gray-500 text-center mb-4">
                {therapist.experience} of experience
              </p>
              <p className="text-gray-600 text-sm mb-4">{therapist.bio}</p>
              <div className="text-sm text-gray-500">
                <p className="text-center">
                  Available: {therapist.availability}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HumanCare;