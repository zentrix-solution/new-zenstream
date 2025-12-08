import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wifi, Smartphone, Home, Monitor, Gamepad2, Video } from 'lucide-react';

const showcases = [
  {
    title: 'Speed Test Results',
    description: 'Real download speeds from our customers',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    stat: '945 Mbps',
    label: 'Download',
  },
  {
    title: 'Smart Home Hub',
    description: 'Connect all your devices seamlessly',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop',
    stat: '50+',
    label: 'Devices',
  },
  {
    title: 'Mobile App Control',
    description: 'Manage your network from anywhere',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    stat: '24/7',
    label: 'Access',
  },
];

const useCases = [
  { icon: Video, label: '4K Streaming', description: 'Multiple simultaneous streams' },
  { icon: Gamepad2, label: 'Low Latency Gaming', description: '<10ms ping times' },
  { icon: Monitor, label: 'Remote Work', description: 'Crystal clear video calls' },
  { icon: Home, label: 'Smart Home', description: 'Connect 100+ devices' },
];

export function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4">
            See FiberFlow in <span className="text-primary">action</span>
          </h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto">
            Real results from real customers. Our fiber network powers everything from 
            casual browsing to enterprise operations.
          </p>
        </motion.div>

        {/* Showcase Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {showcases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-background/5 border border-background/10"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-background/60">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-3xl font-bold text-primary">{item.stat}</p>
                    <p className="text-xs text-background/60">{item.label}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="p-6 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-1">{item.label}</h3>
              <p className="text-sm text-background/60">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
