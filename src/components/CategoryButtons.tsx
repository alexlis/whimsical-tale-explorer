
import React from 'react';
import { BookOpen, Cat, PawPrint, Heart, Stars, BrainCircuit, Crown } from 'lucide-react';

const categories = [
  { name: 'Adventure', icon: <Stars className="w-5 h-5 mr-2" />, color: 'bg-[#FEC6A1]' },
  { name: 'Animals', icon: <PawPrint className="w-5 h-5 mr-2" />, color: 'bg-[#D3E4FD]' },
  { name: 'Bedtime', icon: <Stars className="w-5 h-5 mr-2" />, color: 'bg-[#E5DEFF]' },
  { name: 'Friendship', icon: <Heart className="w-5 h-5 mr-2" />, color: 'bg-[#FFDEE2]' },
  { name: 'Learning', icon: <BrainCircuit className="w-5 h-5 mr-2" />, color: 'bg-[#F2FCE2]' },
  { name: 'Fairy Tales', icon: <Crown className="w-5 h-5 mr-2" />, color: 'bg-[#FEF7CD]' },
];

const CategoryButtons: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bubblegum mb-4 text-center">Explore Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {categories.map((category) => (
          <button key={category.name} className="category-button" style={{ backgroundColor: 'white' }}>
            <span className={`absolute inset-0 ${category.color} -z-10 rounded-full`}></span>
            <span className="flex items-center justify-center">
              {category.icon}
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryButtons;
