import React, { useState } from 'react';
import { Filter, Search, ShoppingCart } from 'lucide-react';
import Layout from '../components/Layout';

interface Product {
  id: number;
  name: string;
  scientificName: string;
  price: number;
  category: string;
  image: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const products: Product[] = [
  {
    id: 1,
    name: "Crowntail Betta",
    scientificName: "Betta splendens",
    price: 24.99,
    category: "Betta",
    image: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?q=80&w=800&auto=format&fit=crop",
    description: "Known for their spectacular fin shapes and vibrant colors. Perfect for beginners.",
    difficulty: "Easy"
  },
  {
    id: 2,
    name: "Neon Tetra School (10)",
    scientificName: "Paracheirodon innesi",
    price: 12.99,
    category: "Schooling",
    image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?q=80&w=800&auto=format&fit=crop",
    description: "Peaceful community fish that glow under aquarium lighting. Best kept in groups.",
    difficulty: "Easy"
  },
  {
    id: 3,
    name: "Blue Discus",
    scientificName: "Symphysodon aequifasciatus",
    price: 65.00,
    category: "Cichlids",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
    description: "The king of the aquarium. Requires pristine water conditions and specific care.",
    difficulty: "Hard"
  },
  {
    id: 4,
    name: "Fancy Guppy Mix",
    scientificName: "Poecilia reticulata",
    price: 5.99,
    category: "Livebearers",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800&auto=format&fit=crop",
    description: "Active, colorful, and easy to breed. A classic choice for any freshwater tank.",
    difficulty: "Easy"
  },
  {
    id: 5,
    name: "Angelfish",
    scientificName: "Pterophyllum scalare",
    price: 18.50,
    category: "Cichlids",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=800&auto=format&fit=crop",
    description: "Elegant swimmers with distinctive triangular shapes. Semi-aggressive but beautiful.",
    difficulty: "Medium"
  },
  {
    id: 6,
    name: "Cherry Shrimp",
    scientificName: "Neocaridina davidi",
    price: 3.99,
    category: "Invertebrates",
    image: "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?q=80&w=800&auto=format&fit=crop",
    description: "Excellent cleanup crew that adds a pop of red to planted tanks.",
    difficulty: "Easy"
  }
];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Betta', 'Schooling', 'Cichlids', 'Livebearers', 'Invertebrates'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Header */}
      <div className="bg-[#004E64] py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Collection</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Explore our diverse range of healthy, ethically sourced freshwater fish. From beginner-friendly tetras to majestic discus.
          </p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              <Filter size={20} className="text-slate-400 mr-2 flex-shrink-0" />
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-[#004E64] text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search species..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#25A18E] focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col h-full">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide backdrop-blur-md ${
                      product.difficulty === 'Easy' ? 'bg-green-500/80 text-white' :
                      product.difficulty === 'Medium' ? 'bg-yellow-500/80 text-white' :
                      'bg-red-500/80 text-white'
                    }`}>
                      {product.difficulty} Care
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-4">
                    <p className="text-xs text-[#25A18E] font-semibold uppercase tracking-wider mb-1">{product.category}</p>
                    <h3 className="text-xl font-bold text-[#004E64] mb-1">{product.name}</h3>
                    <p className="text-slate-400 text-sm italic">{product.scientificName}</p>
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <span className="text-2xl font-bold text-[#004E64]">${product.price.toFixed(2)}</span>
                    <button className="p-3 bg-[#F5F9FA] text-[#004E64] rounded-full hover:bg-[#004E64] hover:text-white transition-colors duration-300">
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="inline-block p-6 bg-slate-50 rounded-full mb-4">
              <Search size={48} className="text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-700 mb-2">No fish found</h3>
            <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
