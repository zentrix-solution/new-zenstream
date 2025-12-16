import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Tv, Zap, Users, Award, Target, Heart, TrendingUp, Shield, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const stats = [
  { value: '10K+', label: 'Customers Assisted', icon: Users },
  { value: '24/7', label: 'Support Available', icon: Clock },
  { value: '2025', label: 'Year Founded', icon: TrendingUp },
  { value: '4.8★', label: 'Customer Rating', icon: Star },
];

const values = [
  {
    icon: Shield,
    title: 'Independence',
    description: 'Completely independent from providers - unbiased guidance you can trust.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Heart,
    title: 'Customer Care',
    description: 'Every customer receives personalized attention and dedicated support.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Target,
    title: 'Transparency',
    description: 'Clear, upfront pricing and honest guidance without hidden agendas.',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Award,
    title: 'Expertise',
    description: 'Knowledgeable specialists dedicated to helping you make informed decisions.',
    color: 'from-green-500 to-emerald-500',
  },
];

const milestones = [
  { year: '2025', title: 'Company Founded', description: 'Launched as an independent assistance platform for entertainment services' },
  { year: '2025', title: 'First 1K Customers', description: 'Helped our first thousand customers navigate service options' },
  { year: '2025', title: '24/7 Support', description: 'Expanded to round-the-clock assistance availability' },
  { year: '2025', title: 'Growing Team', description: 'Building our team of dedicated assistance specialists' },
  { year: 'Future', title: 'Nationwide Reach', description: 'Committed to helping customers across America' },
];

const team = [
  {
    name: 'Michael Chen',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    name: 'Sarah Johnson',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    name: 'David Martinez',
    role: 'VP of Customer Experience',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  },
  {
    name: 'Emily Rodriguez',
    role: 'VP of Operations',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/5 to-transparent py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              About ZENSTREAM
            </motion.span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6">
              Independent assistance{' '}
              <span className="text-gradient">you can trust</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Launched in 2025, we're an independent startup dedicated to helping customers navigate cable, 
              internet, and streaming options with unbiased guidance and transparent support.
            </p>

            {/* Independent Disclaimer */}
            <div className="max-w-2xl mx-auto p-4 rounded-lg bg-muted/50 border border-border text-left">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Independent Service:</strong> ZENSTREAM is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming provider. We provide independent assistance services for a separate fee.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 lg:px-8 -mt-8 mb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card rounded-3xl p-8 border border-border shadow-lg text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="font-display text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div ref={ref} className="container mx-auto px-4 lg:px-8 mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl lg:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Story</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2025, ZENSTREAM was created to address a critical need: independent, unbiased 
              assistance for customers navigating the complex world of entertainment services. We recognized 
              that people needed trustworthy guidance without provider pressure or hidden agendas.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              As a startup, we're building something different - a company that puts customer education first. 
              We don't sell services; we help you understand your options. We don't work for providers; 
              we work for you.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Every day, we help customers make informed decisions about their entertainment services with 
              honest guidance, transparent pricing, and dedicated support.
            </p>
            <Button size="lg" asChild>
              <a href="tel:8556837815">Speak With Our Team</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="ZENSTREAM team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <TrendingUp className="w-8 h-8 text-primary" />
                    <div>
                      <p className="text-2xl font-bold text-primary">240%</p>
                      <p className="text-sm text-muted-foreground">Growth in 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-secondary/30 py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-card rounded-3xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key milestones in our mission to revolutionize entertainment and connectivity
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-center gap-8 mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index < milestones.length - 1 && (
                <div className="absolute left-[72px] top-24 w-px h-full bg-border" />
              )}

              {/* Year Badge */}
              <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                {milestone.year}
              </div>

              {/* Content */}
              <div className="flex-1 bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all">
                <h3 className="font-display text-xl font-semibold mb-2">{milestone.title}</h3>
                <p className="text-muted-foreground">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary to-purple-500 rounded-3xl p-12 lg:p-16 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTEydjEyaDEyek0wIDBoMTJ2MTJIMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
          
          <div className="relative z-10">
            <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4">
              Join 500,000+ Happy Customers
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Experience the ZENSTREAM difference today. Call us now to get started!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-base">
                <a href="tel:8556837815" className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  (855) 683-7815
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base border-white/30 text-white hover:bg-white/10">
                <a href="tel:8556837815">View Plans</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
