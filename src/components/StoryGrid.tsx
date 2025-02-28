
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

interface StoryCardProps {
  title: string;
  imageUrl: string;
  category: string;
  delay: number;
}

const StoryCard: React.FC<StoryCardProps> = ({ title, imageUrl, category, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="story-card"
    >
      <img src={imageUrl} alt={title} className="story-card-image" />
      <div className="story-card-overlay"></div>
      <div className="story-card-content">
        <span className="inline-block px-2 py-1 mb-1 rounded-full bg-primary/90 text-white text-xs">
          {category}
        </span>
        <h3 className="text-lg font-bubblegum">{title}</h3>
        <button className="mt-2 flex items-center text-sm bg-white/90 text-primary px-3 py-1 rounded-full hover:bg-white transition-colors">
          <BookOpen className="w-4 h-4 mr-1" />
          Read Now
        </button>
      </div>
    </motion.div>
  );
};

const StoryGrid: React.FC = () => {
  const stories = [
    { id: 1, title: "The Magic Forest", imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07", category: "Adventure" },
    { id: 2, title: "Captain Whiskers", imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901", category: "Animals" },
    { id: 3, title: "Banana King", imageUrl: "https://images.unsplash.com/photo-1501286353178-1ec881214838", category: "Friendship" },
    { id: 4, title: "Mittens the Explorer", imageUrl: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1", category: "Adventure" },
    { id: 5, title: "The Sleepy Moon", imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07", category: "Bedtime" },
    { id: 6, title: "Counting Stars", imageUrl: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1", category: "Learning" },
    { id: 7, title: "Princess Petal", imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901", category: "Fairy Tales" },
    { id: 8, title: "The Brave Little Boat", imageUrl: "https://images.unsplash.com/photo-1501286353178-1ec881214838", category: "Adventure" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bubblegum mb-4">Popular Stories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {stories.map((story, index) => (
          <StoryCard
            key={story.id}
            title={story.title}
            imageUrl={story.imageUrl}
            category={story.category}
            delay={index}
          />
        ))}
      </div>
    </div>
  );
};

export default StoryGrid;
