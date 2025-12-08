import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, FileText } from 'lucide-react';
import { ReactNode } from 'react';

interface LegalSection {
  title: string;
  content: ReactNode;
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  description: string;
  sections: LegalSection[];
}

const sidebarLinks = [
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Refund Policy', href: '/refund' },
  { name: 'Usage Policy', href: '/usage-policy' },
  { name: 'Cookies Notice', href: '/cookies' },
  { name: 'Billing Agreement', href: '/billing' },
];

export function LegalPageLayout({ title, lastUpdated, description, sections }: LegalPageLayoutProps) {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <div className="bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h1 className="font-display text-3xl lg:text-5xl font-bold mb-2">{title}</h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <span className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    Last updated: {lastUpdated}
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground">{description}</p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24">
              <div className="bg-card rounded-2xl p-6 border border-border mb-6">
                <h3 className="font-display font-semibold mb-4">Legal Documents</h3>
                <nav className="space-y-2">
                  {sidebarLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`block px-4 py-2.5 rounded-xl text-sm transition-all ${
                        link.name === title 
                          ? 'bg-primary text-primary-foreground font-medium' 
                          : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
                <h4 className="font-display font-semibold mb-2">Need Help?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  If you have questions about our policies, our team is here to help.
                </p>
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                >
                  Contact Support
                  <ArrowLeft className="w-3 h-3 rotate-180" />
                </Link>
              </div>
            </div>
          </motion.aside>

          {/* Content */}
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-card rounded-3xl border border-border overflow-hidden">
              {sections.map((section, index) => (
                <motion.section
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className={`p-8 lg:p-10 ${index !== sections.length - 1 ? 'border-b border-border' : ''}`}
                >
                  <h2 className="font-display text-xl lg:text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    {section.title}
                  </h2>
                  <div className="text-muted-foreground leading-relaxed space-y-4 pl-11">
                    {section.content}
                  </div>
                </motion.section>
              ))}
            </div>

            {/* Footer note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 p-6 bg-secondary/50 rounded-2xl text-center"
            >
              <p className="text-sm text-muted-foreground">
                By using FiberFlow services, you acknowledge that you have read, understood, and agree to these terms.
                For any questions, please <Link to="/contact" className="text-primary hover:underline">contact us</Link>.
              </p>
            </motion.div>
          </motion.main>
        </div>
      </div>
    </div>
  );
}