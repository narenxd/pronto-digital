import { Globe, Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold mb-6">
              Pronto Digital
            </h3>
            <p className="text-gray-400">
              Empowering businesses with AI-driven marketing solutions that deliver measurable results and transform digital presence.
            </p>
            <div className="flex space-x-4 pt-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Globe className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Phone className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">AI Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Performance Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Campaign Optimization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">ROI Tracking</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Knowledge Base</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">API Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Contact Us</h4>
            <address className="text-gray-400 not-italic">
              Pronto Digital<br />
              123 Innovation Hub<br />
              San Francisco, CA 94105<br />
              United States
            </address>
            <p className="mt-4 text-gray-400">
              Phone: (555) 123-4567<br />
              Email: hello@prontodigital.ai
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pronto Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};