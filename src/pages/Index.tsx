
import React from 'react';
import { motion } from 'framer-motion';
import NavigationBar from '../components/NavigationBar';
import StoryCarousel from '../components/StoryCarousel';
import CategoryButtons from '../components/CategoryButtons';
import StoryGrid from '../components/StoryGrid';
import ReadAloudButton from '../components/ReadAloudButton';
import { Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <NavigationBar />
      
      <main className="pb-20 md:pb-8">
        <section className="py-6 md:py-10">
          <div className="max-w-5xl mx-auto px-4 text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-3">
                <Sparkles className="w-4 h-4 inline-block mr-1" /> 
                Discover magical stories
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bubblegum mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Begin an Adventure in StoryLand
              </h1>
              <p className="text-lg max-w-2xl mx-auto mb-6">
                Explore a collection of wonderful stories that will spark your imagination and take you to magical worlds!
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <ReadAloudButton title="Featured Story" />
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <StoryCarousel />
          </motion.div>
        </section>
        
        <section className="py-8">
          <CategoryButtons />
        </section>
        
        <section className="py-8">
          <StoryGrid />
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

export default Index;
