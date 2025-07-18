import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold bg-medical-gradient bg-clip-text text-transparent">
                L & Z Biotech Limited
              </h3>
              <p className="text-muted-foreground mt-2 text-sm">
                Leading provider of high-quality medical supplies and equipment across Kenya. 
                Committed to improving healthcare outcomes through reliable products and excellent service.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products?category=medical-equipment" className="text-muted-foreground hover:text-primary transition-colors">
                  Medical Equipment
                </Link>
              </li>
              <li>
                <Link to="/products?category=surgical-instruments" className="text-muted-foreground hover:text-primary transition-colors">
                  Surgical Instruments
                </Link>
              </li>
              <li>
                <Link to="/products?category=laboratory-supplies" className="text-muted-foreground hover:text-primary transition-colors">
                  Laboratory Supplies
                </Link>
              </li>
              <li>
                <Link to="/products?category=disposables" className="text-muted-foreground hover:text-primary transition-colors">
                  Disposables
                </Link>
              </li>
              <li>
                <Link to="/products?category=pharmaceuticals" className="text-muted-foreground hover:text-primary transition-colors">
                  Pharmaceuticals
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                 Aryan Center Drive, F1 & F2,
                 Opposite panari, off Mombasa Road,
                 P.O BOX 417-00204,Nairobi Kenya 
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+254 708 870 793</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">sales@lzbiotech.co.ke</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} L & Z Biotech Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/admin" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Admin Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}