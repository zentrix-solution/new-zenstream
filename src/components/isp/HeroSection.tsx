import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, MapPin, Users, Wifi, Play, Shield, Clock, Tv, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { icon: Tv, value: '500+', label: 'Streaming Channels' },
  { icon: Zap, value: '10 Gbps', label: 'Internet Speed' },
  { icon: Users, value: '500K+', label: 'Happy Customers' },
];

const floatingCards = [
  { icon: Shield, label: 'DDoS Protection', color: 'text-blue-500', bg: 'bg-blue-500/20' },
  { icon: Clock, label: '24/7 Support', color: 'text-purple-500', bg: 'bg-purple-500/20' },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 lg:pt-0 flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-hero" />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Tv className="w-4 h-4" />
              </motion.div>
              Complete Entertainment Bundle Available Now
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              Premium{' '}
              <span className="text-gradient relative">
              Entertainment
              <motion.span
                className="absolute -inset-2 bg-primary/10 rounded-lg -z-10"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              </span>{' '}
              & High-Speed Internet
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0"
            >
              500+ channels and up to 10 Gbps speeds. Everything you need in one bundle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-2 mb-8 justify-center lg:justify-start"
            >
              <Phone className="w-5 h-5 text-primary" />
              <a href="tel:8556837815" className="text-xl font-semibold text-primary hover:underline">
                (855) 683-7815
              </a>
              <span className="text-muted-foreground">- Call Now!</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button size="lg" asChild className="text-base group">
                <a href="tel:8336601996">
                  View Plans
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base group">
                <a href="tel:8336601996" className="flex items-center gap-2">
                  <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </a>
              </Button>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center lg:text-left p-4 rounded-2xl hover:bg-card/50 transition-colors"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <stat.icon className="w-5 h-5 text-primary" />
                    <span className="font-display text-2xl lg:text-3xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-xs lg:text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Dashboard Card */}
              <motion.div 
                initial={{ rotateY: -15 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 0.8 }}
                className="relative bg-card rounded-3xl p-8 shadow-2xl border border-border overflow-hidden"
              >
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Speed Meter */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Current Speed</p>
                      <motion.p 
                        className="font-display text-4xl font-bold text-primary"
                        animate={{ opacity: [1, 0.7, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        945 Mbps
                      </motion.p>
                    </div>
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-20 h-20 rounded-full border-4 border-primary/30 border-t-primary flex items-center justify-center"
                    >
                      <Wifi className="w-8 h-8 text-primary" />
                    </motion.div>
                  </div>
                  
                  {/* Speed Graph */}
                  <div className="h-32 bg-secondary/50 rounded-2xl p-4 mb-6 overflow-hidden">
                    <div className="flex items-end h-full gap-1">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 bg-primary/40 rounded-t"
                          initial={{ height: 0 }}
                          animate={{ height: `${30 + Math.random() * 70}%` }}
                          transition={{ delay: i * 0.05, duration: 0.5 }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Connection Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: 'Download', value: '945 Mbps', color: 'text-primary' },
                      { label: 'Upload', value: '890 Mbps', color: 'text-blue-500' },
                      { label: 'Ping', value: '3 ms', color: 'text-green-500' },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                        className="text-center p-3 bg-secondary/30 rounded-xl"
                      >
                        <p className={`font-display text-lg font-bold ${item.color}`}>{item.value}</p>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-card rounded-2xl p-4 shadow-xl border border-border"
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center"
                  >
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </motion.div>
                  <div>
                    <p className="text-xs text-muted-foreground">Network Status</p>
                    <p className="font-semibold text-green-500">All Systems Go</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-xl border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Uptime</p>
                    <p className="font-semibold">99.99%</p>
                  </div>
                </div>
              </motion.div>

              {/* Additional floating elements */}
              {floatingCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  animate={{ 
                    y: [0, i % 2 === 0 ? -10 : 10, 0],
                    x: [0, i % 2 === 0 ? 5 : -5, 0]
                  }}
                  transition={{ duration: 3 + i, repeat: Infinity }}
                  className={`absolute ${i === 0 ? 'top-1/4 -left-12' : 'bottom-1/3 -right-8'} bg-card rounded-xl p-3 shadow-lg border border-border hidden lg:flex items-center gap-2`}
                >
                  <div className={`w-8 h-8 rounded-lg ${card.bg} flex items-center justify-center`}>
                    <card.icon className={`w-4 h-4 ${card.color}`} />
                  </div>
                  <span className="text-xs font-medium">{card.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
}