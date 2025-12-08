import { motion } from 'framer-motion';
import { 
  Wifi, Shield, Zap, Globe, Gamepad2, Video, 
  Home, Cloud, Lock, Headphones, Download, Activity, Tv, Film, Radio, MonitorPlay 
} from 'lucide-react';

const features = [
  {
    icon: Tv,
    title: '500+ Live Channels',
    description: 'Watch premium TV channels including sports, movies, news, and entertainment.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Zap,
    title: '10 Gbps Internet',
    description: 'Experience lightning-fast fiber internet speeds up to 10 Gbps.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Film,
    title: 'On-Demand Library',
    description: 'Access thousands of movies and shows whenever you want.',
    color: 'from-red-500 to-rose-500'
  },
  {
    icon: Video,
    title: '4K/8K Streaming',
    description: 'Crystal-clear ultra HD streaming on all your favorite channels.',
    color: 'from-indigo-500 to-violet-500'
  },
  {
    icon: MonitorPlay,
    title: 'Multi-Device Support',
    description: 'Stream on multiple TVs, phones, and tablets simultaneously.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Radio,
    title: 'Premium Sports Packages',
    description: 'Never miss a game with comprehensive sports channel packages.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Wifi,
    title: 'Whole-Home Wi-Fi',
    description: 'Mesh technology provides strong signal throughout your entire home.',
    color: 'from-teal-500 to-green-500'
  },
  {
    icon: Shield,
    title: 'Advanced Security',
    description: 'Built-in DDoS protection and firewall for safe browsing.',
    color: 'from-sky-500 to-blue-500'
  },
  {
    icon: Cloud,
    title: 'Cloud DVR Included',
    description: 'Record your favorite shows and watch them anywhere, anytime.',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Gamepad2,
    title: 'Gaming Optimized',
    description: 'Low-latency connection perfect for competitive online gaming.',
    color: 'from-fuchsia-500 to-purple-500'
  },
  {
    icon: Download,
    title: 'Unlimited Data',
    description: 'No data caps or throttling. Stream and download without limits.',
    color: 'from-lime-500 to-green-500'
  },
  {
    icon: Headphones,
    title: '24/7 Expert Support',
    description: 'Call (833) 660-1996 anytime for immediate assistance.',
    color: 'from-amber-500 to-yellow-500'
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Complete Entertainment & Connectivity
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4">
            Everything you love,{' '}
            <span className="text-gradient">all in one bundle</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ZENSTREAM combines premium streaming with ultra-fast internet. Watch, game, work, and connect like never before.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}