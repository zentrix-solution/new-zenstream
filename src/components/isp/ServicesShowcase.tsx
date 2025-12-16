import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Tv, Wifi, Phone, CheckCircle, Play, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function ServicesShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Premium Streaming Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Tv className="w-4 h-4" />
              Streaming Assistance
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              Expert guidance for{' '}
              <span className="text-gradient">your entertainment needs</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get professional assistance with selecting, setting up, and managing your streaming services. 
              We help you navigate options from various providers and optimize your entertainment experience.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                'Provider™ Plan Comparison',
                'Setup & Configuration Help',
                'Account Management Guidance',
                'Troubleshooting Support',
                'Independent Recommendations',
                'Device Setup Assistance'
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="tel:8556837815">Get Assistance</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:8556837815" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (855) 683-7815
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&h=600&fit=crop"
                alt="Family watching streaming content"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold text-primary">10K+</p>
                  <p className="text-xs text-muted-foreground">Assisted</p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold text-primary">4.8★</p>
                  <p className="text-xs text-muted-foreground">Rating</p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold text-primary">24/7</p>
                  <p className="text-xs text-muted-foreground">Support</p>
                </div>
              </motion.div>

              {/* Play Button Overlay */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.7, type: "spring" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                  <Play className="w-8 h-8 text-primary ml-1" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Ultra-Fast Internet Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                alt="High-speed fiber internet installation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Speed Indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="absolute top-6 left-6 right-6"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-muted-foreground">Service Quality</span>
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : {}}
                    transition={{ delay: 0.8, duration: 1.5 }}
                    className="h-3 bg-gradient-to-r from-primary to-purple-500 rounded-full mb-2"
                  />
                  <p className="text-3xl font-bold text-primary">Expert</p>
                </div>
              </motion.div>

              {/* Connection Quality Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
                className="absolute bottom-6 left-6 right-6 flex gap-3"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium">Available 24/7</span>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Remote Help</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Wifi className="w-4 h-4" />
              Internet Assistance
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              Professional help with{' '}
              <span className="text-gradient">your connectivity</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get expert assistance choosing and setting up internet services from various providers™. 
              We help you understand options, compare speeds, and optimize your home network.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                'Speed Plan Comparison',
                'Provider™ Options Review',
                'Router Setup Help',
                'Network Optimization',
                'Wi-Fi Configuration',
                'Connection Troubleshooting'
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="tel:8556837815">Request Help</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:8556837815" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (855) 683-7815
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
