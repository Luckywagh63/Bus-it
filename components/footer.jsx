import { Navigation } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{backgroundColor: '#D9C4B0'}}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl" style={{backgroundColor: '#CFAB8D'}}>
                <Navigation className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-800">TransitFlow</span>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Revolutionizing urban mobility with intelligent transportation solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-6 text-lg">Platform</h4>
            <ul className="space-y-3 text-gray-700">
              <li><a href="#" className="hover:opacity-70 transition-opacity">Features</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Live Tracking</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Route Planning</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-6 text-lg">Support</h4>
            <ul className="space-y-3 text-gray-700">
              <li><a href="#" className="hover:opacity-70 transition-opacity">Help Center</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Contact Us</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-gray-700">
              <li><a href="#" className="hover:opacity-70 transition-opacity">About</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Privacy</a></li>
              <li><a href="#" className="hover:opacity-70 transition-opacity">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-400 mt-12 pt-8">
          <p className="text-center text-gray-700">
            © {new Date().getFullYear()} TransitFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}