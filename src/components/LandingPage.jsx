import React, { useState, useEffect } from 'react';
import { Feather, Users, Shield, Zap, TrendingUp, BookOpen, Heart, MessageCircle, Edit3, ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Feather className="w-8 h-8" />,
      title: "Rich Text Editor",
      description: "Craft beautiful stories with our powerful editor"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Authentication",
      description: "Your content is protected with Appwrite security"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Optimized performance for the best experience"
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Writers" },
    { number: "50K+", label: "Posts Published" },
    { number: "100K+", label: "Monthly Readers" }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          {/* Logo Space */}
          <div className={`flex justify-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-3xl shadow-lg border border-blue-100">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">BlogForge</span>
            </div>
          </div>

          {/* Main Hero Content */}
          <div className={`text-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              Share Your Voice
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                With the World
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A modern blogging platform where creativity meets technology. 
              Write, share, and connect with readers across the globe.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={() => navigate("/signup")}
                className="group px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Start Writing Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => navigate("/login")}
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg border-2 border-blue-600 hover:bg-blue-50 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Sign In
              </button>
            </div>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-3 rounded-full text-blue-700 font-medium">
              <Shield className="w-5 h-5" />
              <span>Powered by Appwrite Authentication</span>
            </div>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl border border-blue-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to
            <span className="block text-blue-600">Create Amazing Content</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed for modern content creators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-3xl p-8 shadow-lg border-2 transition-all duration-500 hover:shadow-2xl hover:scale-105 ${
                activeFeature === index ? 'border-blue-600 shadow-blue-200' : 'border-transparent'
              }`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Features */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for Creators, By Creators
            </h2>
            <p className="text-xl opacity-90">
              Join our community of passionate writers and readers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: <Edit3 className="w-6 h-6" />, label: "Write Posts", color: "bg-blue-500" },
              { icon: <Heart className="w-6 h-6" />, label: "Like & Save", color: "bg-red-500" },
              { icon: <MessageCircle className="w-6 h-6" />, label: "Comment", color: "bg-green-500" },
              { icon: <Users className="w-6 h-6" />, label: "Connect", color: "bg-purple-500" }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className={`${item.color} w-14 h-14 rounded-full flex items-center justify-center text-white mx-auto mb-4 hover:rotate-12 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <span className="text-white font-semibold text-lg">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <TrendingUp className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of writers sharing their stories. Sign up now and publish your first post in minutes.
            </p>
            <button 
              onClick={() => navigate("/signup")}
              className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
            >
              Create Free Account
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}