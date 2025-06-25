
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoCarousel = () => {
  const [currentVideo, setCurrentVideo] = useState(1);
  
  // Placeholder video IDs - you can replace these with actual YouTube video IDs
  const videos = [
    { id: 'dQw4w9WgXcQ', title: 'Demo Video 1' },
    { id: 'dQw4w9WgXcQ', title: 'Demo Video 2' },
    { id: 'dQw4w9WgXcQ', title: 'Demo Video 3' },
  ];

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const getVideoIndex = (offset: number) => {
    return (currentVideo + offset + videos.length) % videos.length;
  };

  return (
    <section id="demos" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Concept Demos That Got Teams Talking
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Peek at some AI solutions we pitched — built to impress and designed to deliver.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center space-x-8">
            {/* Left Video (Blurred) */}
            <div className="hidden lg:block relative">
              <div className="w-80 h-48 rounded-lg overflow-hidden filter blur-sm opacity-60 transition-all duration-300">
                <iframe
                  src={`https://www.youtube.com/embed/${videos[getVideoIndex(-1)].id}?controls=0&modestbranding=1&rel=0`}
                  className="w-full h-full"
                  allowFullScreen
                  title={`Demo Video ${getVideoIndex(-1) + 1}`}
                />
              </div>
            </div>

            {/* Center Video (Main) */}
            <div className="relative z-10">
              <div className="w-full max-w-2xl h-64 md:h-80 rounded-xl overflow-hidden glass-card p-2">
                <iframe
                  src={`https://www.youtube.com/embed/${videos[currentVideo].id}?controls=1&modestbranding=1&rel=0`}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                  title={`Demo Video ${currentVideo + 1}`}
                />
              </div>
            </div>

            {/* Right Video (Blurred) */}
            <div className="hidden lg:block relative">
              <div className="w-80 h-48 rounded-lg overflow-hidden filter blur-sm opacity-60 transition-all duration-300">
                <iframe
                  src={`https://www.youtube.com/embed/${videos[getVideoIndex(1)].id}?controls=0&modestbranding=1&rel=0`}
                  className="w-full h-full"
                  allowFullScreen
                  title={`Demo Video ${getVideoIndex(1) + 1}`}
                />
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-card border-gray-600 text-white hover:bg-white/10"
            onClick={prevVideo}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-card border-gray-600 text-white hover:bg-white/10"
            onClick={nextVideo}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentVideo 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
