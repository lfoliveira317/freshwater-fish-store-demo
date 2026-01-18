import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Clock } from 'lucide-react';
import Layout from '../components/Layout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <Layout>
      {/* Header */}
      <div className="bg-[#004E64] py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Have questions about setting up your tank or need advice on fish compatibility? We're here to help.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-[#004E64] mb-8">Visit Our Showroom</h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Experience the tranquility of our aquatic gallery. View our livestock in person and speak directly with our specialists.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E0F2F1] text-[#25A18E] rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#004E64] mb-1">Location</h3>
                  <p className="text-slate-600">123 Riverbed Lane</p>
                  <p className="text-slate-600">Freshwater City, FC 90210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E0F2F1] text-[#25A18E] rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#004E64] mb-1">Phone</h3>
                  <p className="text-slate-600">(555) 123-4567</p>
                  <p className="text-slate-500 text-sm mt-1">Mon-Fri from 9am to 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E0F2F1] text-[#25A18E] rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#004E64] mb-1">Email</h3>
                  <p className="text-slate-600">hello@zenaquatics.com</p>
                  <p className="text-slate-600">support@zenaquatics.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E0F2F1] text-[#25A18E] rounded-full">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#004E64] mb-1">Hours</h3>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-slate-600">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 7:00 PM</span>
                    <span>Saturday:</span>
                    <span>10:00 AM - 6:00 PM</span>
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 h-64 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 relative">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" 
                alt="Map location" 
                className="w-full h-full object-cover opacity-50 grayscale"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white px-4 py-2 rounded-full shadow-md text-sm font-semibold text-slate-600">Interactive Map Loading...</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <h2 className="text-2xl font-bold text-[#004E64] mb-6">Send us a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-[#E0F2F1] border border-[#25A18E]/20 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-[#25A18E] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#004E64] mb-2">Message Sent!</h3>
                <p className="text-slate-600">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-[#25A18E] font-semibold hover:text-[#004E64] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#25A18E] focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#25A18E] focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-slate-700">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#25A18E] focus:border-transparent transition-all text-slate-600"
                  >
                    <option value="" disabled>Select a topic</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Order Status">Order Status</option>
                    <option value="Fish Care Advice">Fish Care Advice</option>
                    <option value="Wholesale">Wholesale Opportunities</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#25A18E] focus:border-transparent transition-all resize-none"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 shadow-lg ${
                    isSubmitting 
                      ? 'bg-slate-400 cursor-not-allowed' 
                      : 'bg-[#004E64] hover:bg-[#25A18E] shadow-[#004E64]/20 hover:shadow-[#25A18E]/30 transform hover:-translate-y-1'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
