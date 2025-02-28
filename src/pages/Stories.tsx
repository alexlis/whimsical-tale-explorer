
import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import { motion } from 'framer-motion';
import { Filter, BookOpen, ArrowDown } from 'lucide-react';

const Stories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  
  const categories = ['All', 'Adventure', 'Animals', 'Bedtime', 'Friendship', 'Learning', 'Fairy Tales'];
  const ageGroups = ['All Ages', '0-3', '3-5', '5-8', '8-12'];
  
  const allStories = [
    { id: 1, title: "The Magic Forest", imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07", category: "Adventure", age: "5-8", isNew: true },
    { id: 2, title: "Captain Whiskers", imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901", category: "Animals", age: "3-5", isNew: false },
    { id: 3, title: "Banana King", imageUrl: "https://images.unsplash.com/photo-1501286353178-1ec881214838", category: "Friendship", age: "3-5", isNew: true },
    { id: 4, title: "Mittens the Explorer", imageUrl: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1", category: "Adventure", age: "0-3", isNew: false },
    { id: 5, title: "The Sleepy Moon", imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07", category: "Bedtime", age: "0-3", isNew: false },
    { id: 6, title: "Counting Stars", imageUrl: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1", category: "Learning", age: "3-5", isNew: false },
    { id: 7, title: "Princess Petal", imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901", category: "Fairy Tales", age: "5-8", isNew: true },
    { id: 8, title: "The Brave Little Boat", imageUrl: "https://images.unsplash.com/photo-1501286353178-1ec881214838", category: "Adventure", age: "3-5", isNew: false },
    { id: 9, title: "Friendly Frogs", imageUrl: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1", category: "Animals", age: "0-3", isNew: false },
    { id: 10, title: "The Colorful Cloud", imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07", category: "Fairy Tales", age: "3-5", isNew: false },
    { id: 11, title: "Learn Your ABCs", imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901", category: "Learning", age: "3-5", isNew: true },
    { id: 12, title: "Dream of Butterflies", imageUrl: "https://images.unsplash.com/photo-1501286353178-1ec881214838", category: "Bedtime", age: "0-3", isNew: false },
  ];
  
  const filteredStories = allStories.filter(story => {
    const categoryMatch = selectedCategory === null || selectedCategory === 'All' || story.category === selectedCategory;
    const ageMatch = selectedAge === null || selectedAge === 'All Ages' || story.age === selectedAge;
    return categoryMatch && ageMatch;
  });
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <NavigationBar />
      
      <main className="max-w-5xl mx-auto px-4 pb-20 md:pb-8">
        <section className="py-8">
          <h1 className="text-3xl md:text-4xl font-bubblegum mb-6">Explore All Stories</h1>
          
          <div className="bg-white rounded-2xl shadow-md p-4 mb-8">
            <div className="flex items-center mb-4">
              <Filter className="w-5 h-5 mr-2 text-primary" />
              <h2 className="font-bubblegum text-lg">Filter Stories</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        (category === 'All' && selectedCategory === null) || selectedCategory === category
                          ? 'bg-primary text-white'
                          : 'bg-muted hover:bg-muted/80 text-foreground'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Age Group</label>
                <div className="flex flex-wrap gap-2">
                  {ageGroups.map(age => (
                    <button
                      key={age}
                      onClick={() => setSelectedAge(age === 'All Ages' ? null : age)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        (age === 'All Ages' && selectedAge === null) || selectedAge === age
                          ? 'bg-secondary text-white'
                          : 'bg-muted hover:bg-muted/80 text-foreground'
                      }`}
                    >
                      {age}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="story-card"
              >
                <img src={story.imageUrl} alt={story.title} className="story-card-image" />
                {story.isNew && (
                  <span className="absolute top-2 right-2 bg-primary text-white text-xs font-bubblegum px-2 py-1 rounded-full z-10">
                    New!
                  </span>
                )}
                <div className="story-card-overlay"></div>
                <div className="story-card-content">
                  <div className="flex flex-wrap gap-1 mb-1">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-primary/90 text-white text-xs">
                      {story.category}
                    </span>
                    <span className="inline-block px-2 py-0.5 rounded-full bg-secondary/90 text-white text-xs">
                      Ages {story.age}
                    </span>
                  </div>
                  <h3 className="text-lg font-bubblegum">{story.title}</h3>
                  <button className="mt-2 flex items-center text-sm bg-white/90 text-primary px-3 py-1 rounded-full hover:bg-white transition-colors">
                    <BookOpen className="w-4 h-4 mr-1" />
                    Read Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No stories found matching your filters.</p>
              <button 
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedAge(null);
                }}
                className="mt-4 inline-flex items-center px-4 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
          
          {filteredStories.length > 0 && filteredStories.length < allStories.length && (
            <div className="text-center mt-8">
              <p className="text-muted-foreground">
                Showing {filteredStories.length} of {allStories.length} stories
              </p>
            </div>
          )}
          
          {filteredStories.length === allStories.length && (
            <div className="text-center mt-8">
              <button className="inline-flex items-center px-6 py-3 rounded-full bg-muted text-foreground hover:bg-muted/80 transition-colors">
                <span>Load More Stories</span>
                <ArrowDown className="w-4 h-4 ml-2" />
              </button>
            </div>
          )}
        </section>
      </main>
      
      <footer className="bg-white p-6 text-center text-muted-foreground mt-auto">
        <div className="max-w-5xl mx-auto">
          <p className="font-bubblegum text-lg mb-2">StoryLand</p>
          <p className="text-sm">© 2023 StoryLand. All stories are created with love for young readers.</p>
        </div>
      </footer>
    </div>
  );
};

export default Stories;
