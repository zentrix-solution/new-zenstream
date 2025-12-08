import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Phone,
    title: 'Call us',
    value: '(833) 660-1996',
    description: '24/7 customer support',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    value: 'Instant Support',
    description: 'Average response under 2 min',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Clock,
    title: 'Available',
    value: '24/7/365',
    description: 'Always here for you',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: CheckCircle,
    title: 'Fast Response',
    value: 'Under 1 Hour',
    description: 'Quick resolution times',
    color: 'from-orange-500 to-red-500',
  },
];

const subjects = [
  'General Inquiry',
  'Sales Question',
  'Technical Support',
  'Billing Issue',
  'Partnership Opportunity',
  'Other',
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
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
              Get in Touch
            </motion.span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-4">
              We'd love to <span className="text-gradient">hear from you</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our services? Our team is here to help. 
              Reach out and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <motion.div 
                whileHover={{ rotate: 10 }}
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}
              >
                <item.icon className="w-7 h-7 text-white" />
              </motion.div>
              <h3 className="font-display font-semibold mb-1">{item.title}</h3>
              <p className="font-medium text-sm mb-1">{item.value}</p>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-card rounded-3xl p-8 lg:p-10 border border-border shadow-lg">
              <h2 className="font-display text-2xl lg:text-3xl font-bold mb-2">Send us a message</h2>
              <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you soon.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full h-12 px-4 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full h-12 text-base group">
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Live Chat Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-primary rounded-3xl p-8 text-primary-foreground"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-14 h-14 rounded-2xl bg-primary-foreground/20 flex items-center justify-center"
                >
                  <MessageCircle className="w-7 h-7" />
                </motion.div>
                <div>
                  <h3 className="font-display text-xl font-semibold">Live Chat</h3>
                  <p className="text-primary-foreground/70 text-sm">Get instant help</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 mb-6">
                Chat with our support team in real-time. Average response time: under 2 minutes.
              </p>
              <Button variant="secondary" className="w-full group">
                Start Live Chat
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Quick Support Info */}
            <div className="bg-card rounded-3xl p-6 lg:p-8 border border-border">
              <h3 className="font-display text-xl font-semibold mb-6">Why Choose ZENSTREAM Support?</h3>
              <div className="space-y-4">
                {[
                  { title: 'Expert Team', description: 'Trained professionals ready to assist' },
                  { title: 'Fast Resolution', description: 'Most issues solved in under an hour' },
                  { title: 'Always Available', description: '24/7/365 support, no holidays' },
                  { title: 'Multiple Channels', description: 'Phone, chat, or submit a form' },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* FAQ Link */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-secondary/50 rounded-2xl p-6 border border-border"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">Check our FAQ first</h4>
                  <p className="text-sm text-muted-foreground">You might find your answer there</p>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <a href="/support">
                    View FAQ
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}