
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Story {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  ageGroup: string;
}

const stories: Story[] = [
  {
    id: '1',
    title: 'The Magic Forest',
    description: 'Join Lucy on her adventure through an enchanted forest full of talking animals and magical trees.',
    imageUrl: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    category: 'Adventure',
    ageGroup: '5-8'
  },
  {
    id: '2',
    title: 'Captain Whiskers',
    description: 'Follow the adventures of Captain Whiskers, a brave cat who sails the seven seas.',
    imageUrl: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    category: 'Animals',
    ageGroup: '4-7'
  },
  {
    id: '3',
    title: 'Banana King',
    description: 'Meet Milo the monkey who becomes king of the jungle by sharing his bananas with everyone.',
    imageUrl: 'https://images.unsplash.com/photo-1501286353178-1ec881214838',
    category: 'Friendship',
    ageGroup: '3-6'
  },
  {
    id: '4',
    title: 'Mittens the Explorer',
    description: 'Join Mittens the kitten as she explores her new home and meets friendly neighbors.',
    imageUrl: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1',
    category: 'Adventure',
    ageGroup: '3-5'
  }
];

const StoryCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? stories.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === stories.length - 1 ? 0 : prevIndex + 1));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 overflow-hidden">
      <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0"
          >
            <div className="relative h-full">
              <img
                src={stories[currentIndex].imageUrl}
                alt={stories[currentIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <div className="inline-block px-3 py-1 mb-2 rounded-full bg-primary/90 text-white text-sm font-bubblegum">
                  {stories[currentIndex].category} • Ages {stories[currentIndex].ageGroup}
                </div>
                <h2 className="text-2xl md:text-4xl font-bubblegum mb-2">{stories[currentIndex].title}</h2>
                <p className="text-sm md:text-base max-w-xl">{stories[currentIndex].description}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 z-10"
        aria-label="Previous story"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 z-10"
        aria-label="Next story"
      >
        <ChevronRight size={24} />
      </button>

      <div className="flex justify-center mt-4 gap-2">
        {stories.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to story ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default StoryCarousel;
