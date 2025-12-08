import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Star, Shield, Clock } from 'lucide-react';
import { Logo } from '@/components/Logo';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Blog', href: '/blog' },
  ],
  services: [
    { name: 'Residential Plans', href: '/plans' },
    { name: 'Business Solutions', href: '/plans' },
    { name: 'Enterprise', href: '/plans' },
  ],
  support: [
    { name: 'Help Center', href: '/support' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'System Status', href: '/status' },
  ],
  legal: [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Refund Policy', href: '/refund' },
    { name: 'Usage Policy', href: '/usage-policy' },
    { name: 'Cookies', href: '/cookies' },
    { name: 'Billing Agreement', href: '/billing' },
  ],
};

const trustBadges = [
  { icon: Star, text: '4.9★ Rating' },
  { icon: Shield, text: '99.9% Uptime' },
  { icon: Clock, text: '24/7 Support' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-900">
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16 border-b border-white/10">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
                <Logo className="w-12 h-12" />
                <span className="font-display font-bold text-2xl text-white group-hover:text-primary transition-colors">
                  ZENSTREAM
                </span>
              </Link>
              
              <p className="text-gray-400 text-sm mb-6 max-w-sm leading-relaxed">
                500+ channels and fiber speeds up to 10 Gbps. No contracts.
              </p>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl p-6 border border-primary/20 backdrop-blur-sm">
                <p className="text-white/90 text-sm mb-3">Ready to get started?</p>
                <a 
                  href="tel:8336601996"
                  className="flex items-center gap-2 text-2xl font-bold text-white hover:text-primary transition-colors mb-2"
                >
                  <Phone className="w-6 h-6" />
                  (833) 660-1996
                </a>
                <p className="text-gray-400 text-xs">Available 24/7 for your convenience</p>
              </div>

              {/* Trust Badges */}
              <div className="flex gap-4 mt-6">
                {trustBadges.map((badge) => (
                  <div key={badge.text} className="flex items-center gap-2 text-gray-400 text-xs">
                    <badge.icon className="w-4 h-4 text-primary" />
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-2 group text-sm"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-2 group text-sm"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold text-white mb-6 mt-8 text-sm uppercase tracking-wider">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-2 group text-sm"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-2 group text-sm"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-500 text-sm"
            >
              © {new Date().getFullYear()} ZENSTREAM. All rights reserved. Made with passion for entertainment.
            </motion.p>
            
            <div className="flex items-center gap-6 text-sm">
              <span className="text-gray-500">Nationwide Service</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-500">500K+ Customers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </footer>
  );
}
