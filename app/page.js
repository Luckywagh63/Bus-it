"use client";
import { useState, useEffect } from "react";
import { Search, Bus, Navigation, Zap, Menu, X, RefreshCw, AlertTriangle, Clock, Route, MapPin, Star, Play, Globe, TrendingUp, Award, Target, ArrowRight } from "lucide-react";

export default function TransitFlow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hero images with real URLs
  const heroImages = [
    {
      id: 1,
      title: "Smart City Transit",
      description: "Advanced GPS tracking across metropolitan networks",
      category: "Technology",
      imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Live Journey Tracking", 
      description: "Real-time locations with precision accuracy",
      category: "Real-Time",
      imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Route Optimization",
      description: "Intelligent journey planning and scheduling", 
      category: "Planning",
      imageUrl: "https://images.unsplash.com/photo-1564694202883-46e7448c1b26?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTrackBus = () => {
    // This would navigate to the buses page in a real app
    console.log("Redirecting to /buses page");
    // In Next.js, you would use: router.push('/buses')
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#BBDCE5'}}>
      {/* Hero Section */}
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Column */}
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl" style={{backgroundColor: 'rgba(207, 171, 141, 0.2)'}}>
                    <Zap className="h-6 w-6" style={{color: '#CFAB8D'}} />
                  </div>
                  <span className="font-semibold text-sm tracking-wide uppercase" style={{color: '#CFAB8D'}}>Next-Generation Platform</span>
                </div>
                
                <h1 className="text-6xl lg:text-8xl font-bold text-gray-800 leading-tight">
                  Smart Transit
                  <span className="block" style={{color: '#CFAB8D'}}>
                    Revolution
                  </span>
                </h1>
                
                <p className="text-2xl text-gray-600 leading-relaxed max-w-xl">
                  Experience the future of urban mobility with real-time tracking, AI-powered insights, and seamless journey planning.
                </p>
              </div>

              {/* Track Bus Button Section */}
              <div className="space-y-6">
                <div className="p-8 rounded-3xl shadow-lg space-y-6" style={{backgroundColor: '#ECEEDF'}}>
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-3">
                      <div className="p-3 rounded-xl" style={{backgroundColor: 'rgba(207, 171, 141, 0.2)'}}>
                        <Bus className="h-6 w-6" style={{color: '#CFAB8D'}} />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800">Ready to Track Your Bus?</h2>
                    </div>
                    
                    <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto">
                      Get real-time updates on buses to your destination and see live buses around you on the map
                    </p>
                  </div>

                  <a href="/buses">
                  <button 
                    onClick={handleTrackBus}
                    className="w-full py-6 text-white font-bold text-xl rounded-2xl transition-all hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-4"
                    style={{backgroundColor: '#CFAB8D'}}
                  >
                    <Bus className="h-7 w-7" />
                    Track Your Bus
                    <ArrowRight className="h-7 w-7" />
                  </button>
                  </a>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold" style={{color: '#CFAB8D'}}>200+</div>
                      <div className="text-sm text-gray-600">Live Routes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold" style={{color: '#CFAB8D'}}>24/7</div>
                      <div className="text-sm text-gray-600">Real-Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold" style={{color: '#CFAB8D'}}>99%</div>
                      <div className="text-sm text-gray-600">Accurate</div>
                    </div>
                  </div>
                </div>
                
                {/* Feature Pills */}
                <div className="flex flex-wrap gap-3 justify-center">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 text-sm font-medium">
                    <MapPin className="h-4 w-4" style={{color: '#CFAB8D'}} />
                    Live Tracking
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 text-sm font-medium">
                    <Clock className="h-4 w-4" style={{color: '#CFAB8D'}} />
                    Real-Time Updates
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 text-sm font-medium">
                    <Route className="h-4 w-4" style={{color: '#CFAB8D'}} />
                    Smart Routes
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image Gallery */}
            <div className="space-y-8">
              {/* Main Featured Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src={heroImages[currentImageIndex].imageUrl}
                  alt={heroImages[currentImageIndex].title}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="p-4 rounded-2xl mb-4" style={{backgroundColor: 'rgba(207, 171, 141, 0.8)'}}>
                    <span className="text-sm font-semibold">{heroImages[currentImageIndex].category}</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3">{heroImages[currentImageIndex].title}</h3>
                  <p className="text-xl text-white/90">{heroImages[currentImageIndex].description}</p>
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="grid grid-cols-3 gap-6">
                {heroImages.map((image, idx) => (
                  <button
                    key={image.id}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative overflow-hidden rounded-2xl transition-all ${
                      currentImageIndex === idx 
                        ? 'ring-4 shadow-lg' 
                        : 'opacity-70 hover:opacity-90'
                    }`}
                    style={{ringColor: '#CFAB8D'}}
                  >
                    <img 
                      src={image.imageUrl}
                      alt={image.title}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-xs font-medium">{image.category}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center gap-3">
                {heroImages.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      currentImageIndex === idx ? 'w-12' : 'w-3 opacity-50'
                    }`}
                    style={{backgroundColor: '#CFAB8D'}}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24" style={{backgroundColor: '#ECEEDF'}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {/* Section Header */}
            <div className="text-center space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-800">
                Why Choose
                <span className="block" style={{color: '#CFAB8D'}}>
                  TransitFlow?
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our advanced platform combines cutting-edge technology with user-friendly design to revolutionize your daily commute
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="space-y-6 text-center">
                <div className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center" style={{backgroundColor: 'rgba(207, 171, 141, 0.2)'}}>
                  <TrendingUp className="h-8 w-8" style={{color: '#CFAB8D'}} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Real-Time Intelligence</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Advanced tracking algorithms and AI-powered predictions for accurate arrival times and route optimization across urban networks.
                </p>
              </div>

              <div className="space-y-6 text-center">
                <div className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center" style={{backgroundColor: 'rgba(217, 196, 176, 0.3)'}}>
                  <Target className="h-8 w-8" style={{color: '#D9C4B0'}} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Precision & Reliability</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  High-accuracy tracking with seamless integration across multiple transportation networks and smart city infrastructure.
                </p>
              </div>

              <div className="space-y-6 text-center">
                <div className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center" style={{backgroundColor: 'rgba(207, 171, 141, 0.2)'}}>
                  <Navigation className="h-8 w-8" style={{color: '#CFAB8D'}} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Smart Navigation</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Intelligent journey planning with live updates, alternative routes, and optimal timing for your daily travels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Platform Section */}
      <div className="py-24" style={{backgroundColor: '#BBDCE5'}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-800">
                What is Our
                <span className="block" style={{color: '#CFAB8D'}}>
                  Platform?
                </span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="p-4 rounded-2xl flex-shrink-0" style={{backgroundColor: 'rgba(207, 171, 141, 0.2)'}}>
                    <Bus className="h-8 w-8" style={{color: '#CFAB8D'}} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-3 text-xl">Live Bus Tracking</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">Track buses in real-time, see exact locations, occupancy levels, and get accurate arrival predictions for your destination.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="p-4 rounded-2xl flex-shrink-0" style={{backgroundColor: 'rgba(217, 196, 176, 0.3)'}}>
                    <MapPin className="h-8 w-8" style={{color: '#D9C4B0'}} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-3 text-xl">Interactive Maps</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">View live buses around your location on interactive maps with detailed route information and real-time updates.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=600&fit=crop"
                alt="Platform Overview"
                className="w-full aspect-square object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <Navigation className="h-16 w-16 mb-4 drop-shadow-lg" />
                <h3 className="text-2xl font-bold mb-2">TransitFlow Platform</h3>
                <p className="text-white/90">Your complete mobility companion</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-24" style={{backgroundColor: '#ECEEDF'}}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
              Ready to Transform Your
              <span className="block" style={{color: '#CFAB8D'}}>
                Daily Commute?
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Join thousands of commuters who trust TransitFlow for reliable, real-time public transportation tracking
            </p>

            <div className="pt-8">
              <a href="/buses"><button 
                onClick={handleTrackBus}
                className="px-12 py-6 text-white font-bold text-xl rounded-3xl transition-all hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-4 mx-auto"
                style={{backgroundColor: '#CFAB8D'}}
              >
                <Bus className="h-7 w-7" />
                Start Tracking Buses
                <ArrowRight className="h-7 w-7" />
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}