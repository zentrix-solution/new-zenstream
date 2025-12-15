import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Wifi, Router, Settings, FileText, MessageCircle, Phone, 
  ChevronRight, Download, BookOpen, Video, Zap, Search,
  HelpCircle, Wrench, CreditCard, Shield, Globe, Smartphone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const categories = [
  {
    icon: Wifi,
    title: 'Connection Issues',
    description: 'Troubleshoot slow speeds, outages, and connectivity problems',
    articles: 12,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Router,
    title: 'Router Setup',
    description: 'Set up and configure your FiberFlow router',
    articles: 8,
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Settings,
    title: 'Account & Billing',
    description: 'Manage your account, payments, and subscriptions',
    articles: 15,
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Speed Optimization',
    description: 'Get the most out of your fiber connection',
    articles: 10,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Security & Privacy',
    description: 'Protect your network and personal data',
    articles: 7,
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile App',
    description: 'Learn how to use the FiberFlow mobile app',
    articles: 9,
    color: 'from-indigo-500 to-violet-500',
  },
];

const quickActions = [
  { icon: Video, label: 'Video Tutorials', href: '#', description: 'Step-by-step guides' },
  { icon: Download, label: 'User Manuals', href: '#', description: 'PDF downloads' },
  { icon: BookOpen, label: 'Knowledge Base', href: '#', description: '200+ articles' },
  { icon: MessageCircle, label: 'Community', href: '#', description: 'Ask the community' },
];

const faqs = [
  {
    question: 'How do I reset my FiberFlow router?',
    answer: 'To reset your router, press and hold the reset button on the back for 10 seconds. The lights will flash, and the router will restart with factory settings. You can then reconfigure it through the FiberFlow app or web portal.'
  },
  {
    question: 'Why is my internet slower than expected?',
    answer: 'Slow speeds can be caused by several factors: distance from the router, network congestion, outdated equipment, or interference from other devices. Try moving closer to your router, restarting it, or checking for firmware updates in the FiberFlow app.'
  },
  {
    question: 'How can I upgrade my plan?',
    answer: 'You can upgrade your plan anytime through your account settings on our website or in the FiberFlow app. Go to Account > Plan > Upgrade. Changes take effect on your next billing cycle, or immediately for an additional fee.'
  },
  {
    question: 'What should I do if my service is down?',
    answer: 'First, check our status page for any known outages in your area. If there is no reported outage, try restarting your router. If the issue persists, contact our 24/7 support team at 1-800-FIBER for assistance.'
  },
  {
    question: 'How do I set up parental controls?',
    answer: 'Parental controls can be configured through the FiberFlow app. Go to Network Settings > Parental Controls to set up content filters, time limits, and manage access for specific devices on your network.'
  },
];

const popularArticles = [
  { title: 'How to reset your FiberFlow router', views: '12.5K' },
  { title: 'Understanding your speed test results', views: '8.3K' },
  { title: 'Setting up parental controls', views: '6.7K' },
  { title: 'Connecting smart home devices', views: '5.9K' },
  { title: 'Troubleshooting Wi-Fi dead zones', views: '5.2K' },
  { title: 'Upgrading your internet plan', views: '4.8K' },
];

export default function Support() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-transparent py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              Support Center
            </motion.span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-4">
              How can we <span className="text-gradient">help</span>?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Find answers to common questions, troubleshoot issues, or get in touch with our support team.
            </p>
            
            {/* Search */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto relative"
            >
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search for help articles, tutorials, or FAQs..."
                className="h-14 text-lg pl-14 pr-6 rounded-2xl border-2 focus:border-primary"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {quickActions.map((action, index) => (
            <motion.a
              key={action.label}
              href={action.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex flex-col items-center gap-3 p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all text-center"
            >
              <motion.div 
                whileHover={{ rotate: 10 }}
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
              >
                <action.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <div>
                <span className="font-semibold text-sm block">{action.label}</span>
                <span className="text-xs text-muted-foreground">{action.description}</span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-2xl lg:text-3xl font-bold mb-8">Browse by category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.a
                key={category.title}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold mb-1 flex items-center gap-2">
                      {category.title}
                      <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
                    <span className="text-xs text-primary font-medium">{category.articles} articles</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="text-muted-foreground mt-1">Quick answers to common questions</p>
            </div>
            <Button variant="outline" asChild>
              <a href="tel:8556837815">View All FAQs</a>
            </Button>
          </div>
          
          <Accordion type="single" collapsible className="bg-card rounded-2xl border border-border overflow-hidden">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border last:border-0">
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-secondary/50">
                  <span className="flex items-center gap-3 text-left font-medium">
                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground">
                  <div className="pl-8">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Popular Articles & Contact */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-6 border border-border"
          >
            <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Popular articles
            </h3>
            <ul className="space-y-4">
              {popularArticles.map((article, index) => (
                <motion.li 
                  key={article.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a href="#" className="flex items-center justify-between gap-3 p-3 rounded-xl hover:bg-secondary transition-colors group">
                    <span className="text-sm group-hover:text-primary transition-colors">{article.title}</span>
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">{article.views}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-2xl p-8 text-primary-foreground"
          >
            <h3 className="font-display text-xl font-semibold mb-4">Still need help?</h3>
            <p className="text-primary-foreground/80 mb-6">
              Our support team is available 24/7 to assist you with any questions or issues.
            </p>
            <div className="space-y-4">
              <motion.a 
                href="tel:1-800-FIBER" 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <div>
                  <p className="font-semibold">Call us</p>
                  <p className="text-sm text-primary-foreground/70">1-800-FIBER (1-800-342-3700)</p>
                </div>
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <div>
                  <p className="font-semibold">Live chat</p>
                  <p className="text-sm text-primary-foreground/70">Average wait: 2 min</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Downloadable Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl lg:text-3xl font-bold mb-8">Downloadable resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Router Quick Start Guide', size: '2.4 MB', icon: Router },
              { name: 'Network Setup Manual', size: '5.1 MB', icon: Settings },
              { name: 'Mesh System Guide', size: '3.2 MB', icon: Wifi },
              { name: 'Troubleshooting Handbook', size: '1.8 MB', icon: Wrench },
            ].map((doc, index) => (
              <motion.button
                key={doc.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <doc.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{doc.name}</p>
                  <p className="text-xs text-muted-foreground">PDF • {doc.size}</p>
                </div>
                <Download className="w-4 h-4 text-muted-foreground" />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}