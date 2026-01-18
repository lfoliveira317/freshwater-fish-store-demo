import React from 'react';
import { Link } from 'wouter';
import { ArrowRight, Droplets, Heart, ShieldCheck } from 'lucide-react';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=2000&auto=format&fit=crop" 
            alt="Serene underwater scene" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004E64]/90 to-[#004E64]/40 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <span className="inline-block py-1 px-3 rounded-full bg-[#25A18E]/20 text-[#25A18E] border border-[#25A18E]/30 text-sm font-semibold mb-6 backdrop-blur-sm">
              Premium Freshwater Fish
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Bring <span className="text-[#25A18E]">Serenity</span> <br />
              To Your Home
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-lg">
              Discover our curated collection of vibrant freshwater fish and lush aquatic plants. Create your own underwater sanctuary today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <a className="px-8 py-4 bg-[#25A18E] text-white font-semibold rounded-full hover:bg-[#1e8a7a] transition-all duration-300 shadow-lg shadow-[#25A18E]/30 flex items-center justify-center gap-2 group">
                  Explore Collection
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Link>
              <Link href="/contact">
                <a className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center justify-center">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Water Ripple Element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F5F9FA] to-transparent z-10"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#F5F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004E64] mb-4">Why Choose ZenAquatics?</h2>
            <p className="text-slate-600 text-lg">We are dedicated to the health of our fish and the happiness of our customers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-[#FF6B6B]" />,
                title: "Ethically Sourced",
                desc: "All our fish come from sustainable breeders who prioritize animal welfare above all else."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-[#25A18E]" />,
                title: "Health Guarantee",
                desc: "We offer a 14-day health guarantee on all livestock. Your peace of mind is our priority."
              },
              {
                icon: <Droplets className="w-8 h-8 text-[#2980B9]" />,
                title: "Expert Advice",
                desc: "Our team of marine biologists is here to help you build and maintain the perfect ecosystem."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#004E64] mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Species Preview */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-[#25A18E] font-semibold tracking-wider uppercase text-sm">New Arrivals</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#004E64] mt-2">Featured Species</h2>
            </div>
            <Link href="/products">
              <a className="text-[#004E64] font-semibold hover:text-[#25A18E] transition-colors flex items-center gap-2">
                View all fish <ArrowRight size={18} />
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Crowntail Betta",
                price: "$24.99",
                image: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?q=80&w=800&auto=format&fit=crop"
              },
              {
                name: "Neon Tetra School",
                price: "$12.99",
                image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?q=80&w=800&auto=format&fit=crop"
              },
              {
                name: "Blue Discus",
                price: "$65.00",
                image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop"
              }
            ].map((fish, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300 z-10"></div>
                  <img 
                    src={fish.image} 
                    alt={fish.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <button className="absolute bottom-4 right-4 bg-white text-[#004E64] p-3 rounded-full shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <ArrowRight size={20} />
                  </button>
                </div>
                <h3 className="text-xl font-bold text-[#004E64] group-hover:text-[#25A18E] transition-colors">{fish.name}</h3>
                <p className="text-slate-500 mt-1">{fish.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#004E64] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#25A18E]/10 rounded-l-full transform translate-x-1/3"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to start your aquarium?</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            Whether you're a beginner or a seasoned aquarist, we have everything you need to create a thriving underwater world.
          </p>
          <Link href="/products">
            <a className="inline-block px-10 py-4 bg-[#FF6B6B] text-white font-bold rounded-full hover:bg-[#ff5252] transition-all duration-300 shadow-lg shadow-[#FF6B6B]/30 transform hover:-translate-y-1">
              Shop Now
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
