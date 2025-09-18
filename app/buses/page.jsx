"use client";
import { useState, useEffect } from "react";
import { Search, Bus, Navigation, Zap, Menu, X, RefreshCw, AlertTriangle, Clock, Route, MapPin, Star, Play, Globe, TrendingUp, Award, Target, ArrowRight, Locate, Filter } from "lucide-react";

export default function BusesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [buses, setBuses] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null);
  const [userLocation, setUserLocation] = useState({ lat: 19.0760, lng: 72.8777 }); // Mumbai coordinates
  const [liveBuses, setLiveBuses] = useState([]);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [destination, setDestination] = useState("");

  // Generate mock buses running to destination
  const generateBusesToDestination = (dest) => {
    if (!dest.trim()) return [];
    
    const busCount = Math.floor(Math.random() * 6) + 3;
    const buses = [];
    
    for (let i = 0; i < busCount; i++) {
      const arrivalTime = Math.floor(Math.random() * 45) + 2;
      const delay = Math.random() > 0.8 ? Math.floor(Math.random() * 12) + 1 : 0;
      
      buses.push({
        id: `bus-${Date.now()}-${i}`,
        routeNumber: `${Math.floor(Math.random() * 400) + 100}`,
        operator: ['BEST', 'Mumbai Metro', 'Private'][Math.floor(Math.random() * 3)],
        currentStop: `Stop ${Math.floor(Math.random() * 20) + 1}`,
        destination: dest,
        estimatedArrival: `${arrivalTime} min`,
        status: delay > 0 ? 'delayed' : 'on_time',
        delay: delay,
        occupancy: Math.floor(Math.random() * 100),
        nextStops: [
          `${dest} Junction`,
          `${dest} Central`,
          `${dest} Station`,
          `${dest} Market`
        ].slice(0, Math.floor(Math.random() * 3) + 2)
      });
    }
    
    return buses.sort((a, b) => parseInt(a.estimatedArrival) - parseInt(b.estimatedArrival));
  };

  // Generate live buses around user location
  const generateLiveBuses = () => {
    const buses = [];
    const busCount = Math.floor(Math.random() * 15) + 10;
    
    for (let i = 0; i < busCount; i++) {
      // Generate random coordinates within ~5km radius of Mumbai center
      const lat = 19.0760 + (Math.random() - 0.5) * 0.1;
      const lng = 72.8777 + (Math.random() - 0.5) * 0.1;
      
      buses.push({
        id: `live-bus-${i}`,
        routeNumber: `${Math.floor(Math.random() * 400) + 100}`,
        lat: lat,
        lng: lng,
        direction: Math.floor(Math.random() * 360),
        speed: Math.floor(Math.random() * 40) + 10,
        occupancy: Math.floor(Math.random() * 100),
        destination: ['Andheri', 'Bandra', 'Colaba', 'Dadar', 'Kurla', 'Powai', 'Worli'][Math.floor(Math.random() * 7)]
      });
    }
    
    return buses;
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    setDestination(searchQuery);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    const busResults = generateBusesToDestination(searchQuery);
    setBuses(busResults);
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  // Initialize live buses on component mount
  useEffect(() => {
    const buses = generateLiveBuses();
    setLiveBuses(buses);
    setMapLoaded(true);
    
    // Update bus positions every 5 seconds
    const interval = setInterval(() => {
      setLiveBuses(prev => prev.map(bus => ({
        ...bus,
        lat: bus.lat + (Math.random() - 0.5) * 0.001,
        lng: bus.lng + (Math.random() - 0.5) * 0.001,
        direction: (bus.direction + Math.floor(Math.random() * 20) - 10) % 360
      })));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const getStatusBadge = (status, delay = 0) => {
    switch(status) {
      case 'on_time':
        return <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">On Time</span>;
      case 'delayed':
        return <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">+{delay}min</span>;
      default:
        return <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Unknown</span>;
    }
  };

  const getOccupancyColor = (occupancy) => {
    if (occupancy < 30) return 'bg-green-500';
    if (occupancy < 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getOccupancyText = (occupancy) => {
    if (occupancy < 30) return 'Low';
    if (occupancy < 70) return 'Medium';
    return 'High';
  };

  return (
    <div className="min-h-screen pt-24" style={{backgroundColor: '#BBDCE5'}}>
      {/* Header Section */}
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl" style={{backgroundColor: 'rgba(207, 171, 141, 0.2)'}}>
                <Bus className="h-6 w-6" style={{color: '#CFAB8D'}} />
              </div>
              <span className="font-semibold text-sm tracking-wide uppercase" style={{color: '#CFAB8D'}}>Real-Time Transit</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 leading-tight">
              Live Bus
              <span className="block" style={{color: '#CFAB8D'}}>
                Tracking
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Find buses to your destination and track live buses around your location with real-time updates and accurate arrival times.
            </p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <div className="p-6 rounded-3xl shadow-lg" style={{backgroundColor: '#ECEEDF'}}>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="Where are you going? (e.g., Bandra, Andheri, Colaba)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full pl-16 pr-6 py-4 bg-transparent text-gray-800 placeholder-gray-500 border-none focus:outline-none text-lg"
              />
            </div>
            <button 
              onClick={handleSearch}
              disabled={isLoading || !searchQuery.trim()}
              className="px-8 py-4 text-white font-semibold rounded-2xl transition-all flex items-center justify-center gap-3 min-w-[150px] disabled:opacity-50"
              style={{backgroundColor: '#CFAB8D'}}
            >
              {isLoading ? (
                <>
                  <RefreshCw className="h-5 w-5 animate-spin" />
                  Searching
                </>
              ) : (
                <>
                  <Bus className="h-5 w-5" />
                  Find Buses
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Buses to Destination Section */}
      {destination && (
        <div className="max-w-5xl mx-auto px-6 pb-16">
          {isLoading ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center gap-4 px-8 py-6 rounded-2xl shadow-lg" style={{backgroundColor: '#ECEEDF'}}>
                <RefreshCw className="h-6 w-6 animate-spin" style={{color: '#CFAB8D'}} />
                <span className="text-gray-800 font-medium text-lg">Finding buses to {destination}...</span>
              </div>
            </div>
          ) : buses.length > 0 ? (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-800">
                  Buses to {destination} ({buses.length})
                </h2>
                <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
                  <Filter className="h-5 w-5" />
                  Filter
                </button>
              </div>

              <div className="grid gap-6">
                {buses.map((bus) => (
                  <div 
                    key={bus.id}
                    className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
                    style={{backgroundColor: '#ECEEDF'}}
                    onClick={() => setSelectedBus(selectedBus?.id === bus.id ? null : bus)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl" style={{backgroundColor: 'rgba(207, 171, 141, 0.2)'}}>
                          <Bus className="h-6 w-6" style={{color: '#CFAB8D'}} />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-xl font-bold text-gray-800">Route {bus.routeNumber}</h3>
                            <span className="text-sm px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                              {bus.operator}
                            </span>
                          </div>
                          <p className="text-gray-600">{bus.currentStop} → {bus.destination}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-800 mb-1">{bus.estimatedArrival}</div>
                        {getStatusBadge(bus.status, bus.delay)}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${getOccupancyColor(bus.occupancy)}`}></div>
                        <span className="text-gray-600">
                          {getOccupancyText(bus.occupancy)} occupancy ({bus.occupancy}%)
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <ArrowRight className="h-4 w-4" />
                        Next: {bus.nextStops[0]}
                      </div>
                    </div>

                    {selectedBus?.id === bus.id && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2">Upcoming Stops</h4>
                          <div className="space-y-2">
                            {bus.nextStops.map((stop, index) => (
                              <div key={index} className="flex items-center gap-3 text-gray-600">
                                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                <span>{stop}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <button className="flex-1 px-4 py-3 text-white rounded-xl hover:opacity-90 transition-opacity font-medium flex items-center justify-center gap-2" style={{backgroundColor: '#CFAB8D'}}>
                            <MapPin className="h-4 w-4" />
                            Track Bus
                          </button>
                          <button className="flex-1 px-4 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-xl transition-colors font-medium flex items-center justify-center gap-2">
                            <Star className="h-4 w-4" />
                            Save Route
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="p-8 rounded-3xl shadow-lg max-w-lg mx-auto" style={{backgroundColor: '#ECEEDF'}}>
                <AlertTriangle className="h-12 w-12 mx-auto mb-4" style={{color: '#CFAB8D'}} />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No Buses Found</h3>
                <p className="text-gray-600">
                  No buses currently running to "{destination}". Try searching for a different destination.
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Live Buses Map Section */}
      <div className="py-16" style={{backgroundColor: '#ECEEDF'}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-800">Live Buses Around You</h2>
              <div className="flex items-center gap-2 text-gray-600">
                <Locate className="h-5 w-5" />
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>

            {/* Map Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{height: '600px'}}>
              {/* Mock Map Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100">
                {/* Grid Pattern */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}
                ></div>
                
                {/* Mock Streets */}
                <div className="absolute top-20 left-0 right-0 h-1 bg-gray-400 opacity-60"></div>
                <div className="absolute top-40 left-0 right-0 h-1 bg-gray-400 opacity-60"></div>
                <div className="absolute top-60 left-0 right-0 h-1 bg-gray-400 opacity-60"></div>
                <div className="absolute left-20 top-0 bottom-0 w-1 bg-gray-400 opacity-60"></div>
                <div className="absolute left-40 top-0 bottom-0 w-1 bg-gray-400 opacity-60"></div>
                <div className="absolute left-60 top-0 bottom-0 w-1 bg-gray-400 opacity-60"></div>
                
                {/* User Location */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
                    <div className="absolute -inset-3 bg-blue-500 rounded-full opacity-20 animate-ping"></div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs font-medium text-gray-800 shadow">
                      You
                    </div>
                  </div>
                </div>

                {/* Live Buses */}
                {liveBuses.map((bus, index) => {
                  const x = (bus.lng - 72.8277) * 2000 + 400;
                  const y = (19.1260 - bus.lat) * 2000 + 300;
                  
                  return (
                    <div
                      key={bus.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                      style={{ 
                        left: `${Math.max(20, Math.min(x, 900))}px`, 
                        top: `${Math.max(20, Math.min(y, 580))}px`,
                        transform: `translate(-50%, -50%) rotate(${bus.direction}deg)`
                      }}
                    >
                      <div className="relative">
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg" style={{backgroundColor: '#CFAB8D'}}>
                          <Bus className="h-3 w-3" />
                        </div>
                        
                        {/* Hover tooltip */}
                        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                          <div className="font-bold">Route {bus.routeNumber}</div>
                          <div>To: {bus.destination}</div>
                          <div>Speed: {bus.speed} km/h</div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-800"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map Controls */}
              <div className="absolute top-4 right-4 space-y-2">
                <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <TrendingUp className="h-5 w-5 text-gray-600" />
                </button>
                <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <Locate className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              {/* Live Stats */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{color: '#CFAB8D'}}>{liveBuses.length}</div>
                    <div className="text-xs text-gray-600">Live Buses</div>
                  </div>
                  <div className="w-px h-8 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {liveBuses.filter(bus => bus.occupancy < 70).length}
                    </div>
                    <div className="text-xs text-gray-600">Available</div>
                  </div>
                  <div className="w-px h-8 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {liveBuses.length > 0 ? Math.round(liveBuses.reduce((acc, bus) => acc + bus.speed, 0) / liveBuses.length) : 0}
                    </div>
                    <div className="text-xs text-gray-600">Avg Speed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Your Location</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-4 h-4 rounded-sm flex items-center justify-center" style={{backgroundColor: '#CFAB8D'}}>
                  <Bus className="h-2 w-2 text-white" />
                </div>
                <span className="text-gray-700">Live Bus</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <span className="text-gray-700">Occupancy Level</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}