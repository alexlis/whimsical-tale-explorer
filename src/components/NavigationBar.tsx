
import React from 'react';
import { BookOpen, BookOpenText, Heart, Home, Search, Sparkles, Mic } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavigationBar: React.FC = () => {
  return (
    <header className="py-4 px-4 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-3xl font-bubblegum text-primary flex items-center">
            <BookOpenText className="w-8 h-8 mr-2 text-secondary" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              StoryLand
            </span>
          </span>
        </Link>
        
        <div className="md:hidden">
          <button className="p-2 rounded-full bg-muted text-foreground hover:bg-muted/80 transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </div>
        
        <div className="hidden md:flex items-center space-x-1">
          <div className="relative mr-2">
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-muted-foreground pointer-events-none" />
            <input 
              type="text" 
              placeholder="Search stories..." 
              className="pl-10 pr-4 py-2 rounded-full bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary w-64"
            />
          </div>
          
          <nav className="flex items-center space-x-1">
            <NavButton to="/" icon={<Home className="w-5 h-5" />} label="Home" />
            <NavButton to="/stories" icon={<BookOpen className="w-5 h-5" />} label="Stories" />
            <NavButton to="/favorites" icon={<Heart className="w-5 h-5" />} label="Favorites" />
            <NavButton to="/read-aloud" icon={<Mic className="w-5 h-5" />} label="Read Aloud" />
          </nav>
        </div>
      </div>
      
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] rounded-t-xl z-50">
        <nav className="flex justify-around py-3">
          <NavIcon to="/" icon={<Home className="w-6 h-6" />} label="Home" />
          <NavIcon to="/stories" icon={<BookOpen className="w-6 h-6" />} label="Stories" />
          <NavIcon to="/favorites" icon={<Heart className="w-6 h-6" />} label="Favorites" />
          <NavIcon to="/read-aloud" icon={<Mic className="w-6 h-6" />} label="Read" />
        </nav>
      </div>
    </header>
  );
};

interface NavButtonProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavButton: React.FC<NavButtonProps> = ({ to, icon, label }) => {
  return (
    <Link to={to} className="nav-button bg-white hover:bg-muted flex items-center text-foreground">
      {icon}
      <span className="ml-1">{label}</span>
    </Link>
  );
};

const NavIcon: React.FC<NavButtonProps> = ({ to, icon, label }) => {
  return (
    <Link to={to} className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary transition-colors">
      <motion.div whileTap={{ scale: 0.9 }}>
        {icon}
      </motion.div>
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
};

export default NavigationBar;
