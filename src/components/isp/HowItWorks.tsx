import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, CreditCard, Wifi, Play, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MapPin,
    title: 'Call (833) 660-1996',
    description: 'Speak with our experts to check availability and find the perfect entertainment package for your needs.',
  },
  {
    number: '02',
    icon: CreditCard,
    title: 'Choose Your Bundle',
    description: 'Select from our Starter, Family, or Ultimate bundles. All include streaming channels and high-speed internet.',
  },
  {
    number: '03',
    icon: Wifi,
    title: 'Professional Installation',
    description: 'Our technicians will install your fiber internet and set up your streaming service - usually within 3-5 days.',
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4">
            Getting started is <span className="text-gradient">simple</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From your first call to watching your favorite shows in HD, ZENSTREAM makes it seamless. Start today!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-video bg-foreground">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop"
                alt="Fiber installation process"
                className="w-full h-full object-cover opacity-80"
              />
              {!isPlaying && (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group"
                >
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                </button>
              )}
              
              {/* Video Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                <div className="glass-card rounded-xl px-4 py-3">
                  <p className="text-xs text-muted-foreground">Installation Time</p>
                  <p className="font-display font-bold">~2 hours</p>
                </div>
                <div className="glass-card rounded-xl px-4 py-3">
                  <p className="text-xs text-muted-foreground">Avg. Rating</p>
                  <p className="font-display font-bold">4.9 ★</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                className="flex gap-6"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  {index < steps.length - 1 && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-8 bg-border" />
                  )}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Completion Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-primary/10 border border-primary/20"
            >
              <CheckCircle className="w-8 h-8 text-primary" />
              <div>
                <p className="font-semibold">Ready to experience the difference?</p>
                <p className="text-sm text-muted-foreground">Most installations completed within 5 business days</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
