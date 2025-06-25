
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoCarousel = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  
  const videos = [
    { id: 'pvHgiplNkQA', embedUrl: 'https://www.youtube.com/embed/pvHgiplNkQA?autoplay=1&mute=1&loop=1&playlist=pvHgiplNkQA&controls=0&modestbranding=1&rel=0' },
    { id: 'rWT4nN3WrwI', embedUrl: 'https://www.youtube.com/embed/rWT4nN3WrwI?autoplay=1&mute=1&loop=1&playlist=rWT4nN3WrwI&controls=0&modestbranding=1&rel=0' },
    { id: 'ode0RbA3sDw', embedUrl: 'https://www.youtube.com/embed/ode0RbA3sDw?autoplay=1&mute=1&loop=1&playlist=ode0RbA3sDw&controls=0&modestbranding=1&rel=0' },
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
    <section id="demos" className="py-20 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20 animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-float"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6 animate-fade-in">
            Concept Demos That Got Teams Talking
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in">
            Peek at some AI solutions we pitched — built to impress and designed to deliver.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-8">
            {/* Left Video (Blurred) */}
            <div className="hidden lg:block relative">
              <div className="w-72 h-96 rounded-xl overflow-hidden filter blur-sm opacity-50 transition-all duration-500 hover:opacity-70">
                <iframe
                  src={videos[getVideoIndex(-1)].embedUrl}
                  className="w-full h-full object-cover"
                  allowFullScreen
                  allow="autoplay; encrypted-media"
                  title={`Demo Video ${getVideoIndex(-1) + 1}`}
                />
              </div>
            </div>

            {/* Center Video (Main) */}
            <div className="relative z-10">
              <div className="w-full max-w-sm h-96 md:h-[500px] md:max-w-md rounded-xl overflow-hidden glass-card p-2 shadow-2xl animate-pulse-glow">
                <iframe
                  src={videos[currentVideo].embedUrl}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                  allow="autoplay; encrypted-media"
                  title={`Demo Video ${currentVideo + 1}`}
                />
              </div>
            </div>

            {/* Right Video (Blurred) */}
            <div className="hidden lg:block relative">
              <div className="w-72 h-96 rounded-xl overflow-hidden filter blur-sm opacity-50 transition-all duration-500 hover:opacity-70">
                <iframe
                  src={videos[getVideoIndex(1)].embedUrl}
                  className="w-full h-full object-cover"
                  allowFullScreen
                  allow="autoplay; encrypted-media"
                  title={`Demo Video ${getVideoIndex(1) + 1}`}
                />
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 glass-card border-gray-600 text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
            onClick={prevVideo}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 glass-card border-gray-600 text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
            onClick={nextVideo}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideo(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentVideo 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125 shadow-lg' 
                    : 'bg-gray-600 hover:bg-gray-500 hover:scale-110'
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
