"use client";
import { useState } from "react";
import { Search, MessageCircle, Phone, Mail, Clock, ChevronDown, ChevronRight, CheckCircle, AlertCircle, Users, BookOpen, Zap, Shield, Bus, MapPin, Smartphone, Globe, Star, Send, FileText, Video, Headphones, ArrowRight } from "lucide-react";

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    category: "",
    subject: "",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const categories = [
    { id: "all", label: "All Topics", icon: BookOpen },
    { id: "buses", label: "Bus Tracking", icon: Bus },
    { id: "account", label: "Account & Profile", icon: Users },
    { id: "technical", label: "Technical Issues", icon: Zap },
    { id: "privacy", label: "Privacy & Security", icon: Shield }
  ];

  const faqs = [
    {
      id: 1,
      category: "buses",
      question: "How accurate is the real-time bus tracking?",
      answer: "Our real-time bus tracking uses GPS data from buses and is updated every 30 seconds. The accuracy is typically within 1-2 minutes of actual arrival times. However, factors like traffic congestion, weather conditions, and technical issues may occasionally affect accuracy."
    },
    {
      id: 2,
      category: "buses",
      question: "Why is my bus showing as 'delayed' or not appearing?",
      answer: "Buses may show as delayed due to traffic, breakdowns, or route changes. If a bus doesn't appear, it might be out of service, running a different route, or experiencing technical issues with its GPS system. We recommend checking alternative routes or contacting the bus operator directly."
    },
    {
      id: 3,
      category: "account",
      question: "How do I create an account and save my favorite routes?",
      answer: "You can create a free account by clicking 'Sign Up' in the top menu. Once registered, you can save favorite routes, set up notifications for specific buses, and access your travel history. Your preferences will be synced across all your devices."
    },
    {
      id: 4,
      category: "technical",
      question: "The app is running slowly or crashing. What should I do?",
      answer: "Try clearing your browser cache, disabling browser extensions, or using an incognito/private browsing window. Ensure you have a stable internet connection. If issues persist, try using a different browser or device. Contact our support team if problems continue."
    },
    {
      id: 5,
      category: "privacy",
      question: "How is my location data used and stored?",
      answer: "We use your location only to show nearby buses and provide relevant transit information. Location data is processed locally on your device and is not stored permanently on our servers. You can disable location sharing at any time in your browser or device settings."
    },
    {
      id: 6,
      category: "buses",
      question: "Can I track buses in other cities besides Mumbai?",
      answer: "Currently, our service focuses on Mumbai's bus network including BEST buses and other major operators. We're working to expand to other major Indian cities. Sign up for our newsletter to be notified when new cities are added."
    },
    {
      id: 7,
      category: "technical",
      question: "Why am I not receiving bus arrival notifications?",
      answer: "Ensure notifications are enabled in your browser settings. Check that you've subscribed to notifications for your saved routes. If using a mobile device, verify that the website has permission to send notifications in your device settings."
    },
    {
      id: 8,
      category: "account",
      question: "How do I reset my password or update my profile?",
      answer: "Click on your profile icon and select 'Account Settings'. From there you can update your personal information, change your password, or manage notification preferences. Use the 'Forgot Password' link on the login page if you need to reset your password."
    }
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      availability: "Available 24/7",
      action: "Start Chat",
      primary: true
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      availability: "Response within 24 hours",
      action: "Send Email",
      primary: false
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call our helpline",
      availability: "Mon-Fri, 9 AM - 6 PM IST",
      action: "Call Now",
      primary: false
    }
  ];

  const quickLinks = [
    { icon: FileText, title: "User Guide", description: "Complete guide to using the platform" },
    { icon: Video, title: "Video Tutorials", description: "Step-by-step video guides" },
    { icon: Globe, title: "API Documentation", description: "For developers integrating our service" },
    { icon: Smartphone, title: "Mobile App", description: "Download our mobile application" }
  ];

  const filteredFaqs = selectedCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const handleFormSubmit = () => {
    if (!contactForm.name || !contactForm.email || !contactForm.category || !contactForm.subject || !contactForm.message) {
      return;
    }
    
    setFormSubmitted(true);
    // In a real app, this would send the form data to your backend
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({
        name: "",
        email: "",
        category: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen pt-24" style={{backgroundColor: '#BBDCE5'}}>
      {/* Header Section */}
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl" style={{backgroundColor: 'rgba(207, 171, 141, 0.2)'}}>
                <Headphones className="h-6 w-6" style={{color: '#CFAB8D'}} />
              </div>
              <span className="font-semibold text-sm tracking-wide uppercase" style={{color: '#CFAB8D'}}>24/7 Support</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 leading-tight">
              Help &
              <span className="block" style={{color: '#CFAB8D'}}>
                Support
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Get the help you need with our comprehensive support resources, live chat, and detailed documentation.
            </p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <div className="p-6 rounded-3xl shadow-lg" style={{backgroundColor: '#ECEEDF'}}>
          <div className="relative">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, or guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-6 py-4 bg-transparent text-gray-800 placeholder-gray-500 border-none focus:outline-none text-lg"
            />
          </div>
        </div>
      </div>

      {/* Quick Contact Options */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactOptions.map((option, index) => (
            <div 
              key={index}
              className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer ${
                option.primary ? 'ring-2' : ''
              }`}
              style={{
                backgroundColor: '#ECEEDF',
                ringColor: option.primary ? '#CFAB8D' : 'transparent'
              }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl" style={{backgroundColor: 'rgba(207, 171, 141, 0.2)'}}>
                  <option.icon className="h-6 w-6" style={{color: '#CFAB8D'}} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-3">{option.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4" />
                    {option.availability}
                  </div>
                  <button 
                    className="w-full px-4 py-3 text-white rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    style={{backgroundColor: '#CFAB8D'}}
                  >
                    {option.action}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16" style={{backgroundColor: '#ECEEDF'}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center">
              Frequently Asked Questions
            </h2>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'text-white shadow-lg'
                      : 'text-gray-600 bg-white hover:bg-gray-50'
                  }`}
                  style={{
                    backgroundColor: selectedCategory === category.id ? '#CFAB8D' : undefined
                  }}
                >
                  <category.icon className="h-4 w-4" />
                  {category.label}
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="max-w-4xl mx-auto space-y-4">
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                    {expandedFaq === faq.id ? (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  
                  {expandedFaq === faq.id && (
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-600">
                Send us a message and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="p-8 rounded-3xl shadow-lg" style={{backgroundColor: '#ECEEDF'}}>
              {formSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-500" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600">
                    We've received your message and will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50"
                        style={{focusRingColor: '#CFAB8D'}}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50"
                        style={{focusRingColor: '#CFAB8D'}}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Category
                      </label>
                      <select
                        required
                        value={contactForm.category}
                        onChange={(e) => setContactForm({...contactForm, category: e.target.value})}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50"
                        style={{focusRingColor: '#CFAB8D'}}
                      >
                        <option value="">Select a category</option>
                        <option value="buses">Bus Tracking</option>
                        <option value="account">Account & Profile</option>
                        <option value="technical">Technical Issues</option>
                        <option value="privacy">Privacy & Security</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        required
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50"
                        style={{focusRingColor: '#CFAB8D'}}
                        placeholder="Brief description of your issue"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 resize-none"
                      style={{focusRingColor: '#CFAB8D'}}
                      placeholder="Describe your issue in detail..."
                    />
                  </div>

                  <div className="flex justify-center">
                    <button
                      onClick={handleFormSubmit}
                      className="px-8 py-4 text-white font-semibold rounded-2xl transition-all flex items-center gap-3 hover:opacity-90"
                      style={{backgroundColor: '#CFAB8D'}}
                    >
                      <Send className="h-5 w-5" />
                      Send Message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="py-16" style={{backgroundColor: '#ECEEDF'}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center">
              Additional Resources
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl group-hover:scale-110 transition-transform" style={{backgroundColor: 'rgba(207, 171, 141, 0.2)'}}>
                      <link.icon className="h-6 w-6" style={{color: '#CFAB8D'}} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">{link.title}</h3>
                      <p className="text-sm text-gray-600">{link.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{color: '#CFAB8D'}}>24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{color: '#CFAB8D'}}>&lt;2h</div>
              <div className="text-gray-600">Average Response</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{color: '#CFAB8D'}}>98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{color: '#CFAB8D'}}>50k+</div>
              <div className="text-gray-600">Issues Resolved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}