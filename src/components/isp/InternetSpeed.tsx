import { motion } from 'framer-motion';
import { Zap, Download, Upload, Wifi, Gamepad2, Video, Laptop, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const speedTiers = [
  {
    speed: '100 Mbps',
    price: '$39.99',
    features: ['Perfect for 1-2 users', 'HD streaming', 'Basic gaming', 'Work from home'],
    popular: false,
  },
  {
    speed: '500 Mbps',
    price: '$59.99',
    features: ['Great for families', '4K streaming', 'Online gaming', 'Multiple devices'],
    popular: true,
  },
  {
    speed: '1 Gbps',
    price: '$79.99',
    features: ['Power users', '8K streaming', 'Pro gaming', 'Smart home'],
    popular: false,
  },
  {
    speed: '10 Gbps',
    price: '$149.99',
    features: ['Ultimate speed', 'Commercial use', 'Unlimited devices', 'Maximum performance'],
    popular: false,
  },
];

const useCases = [
  {
    icon: Video,
    title: 'Stream in 4K/8K',
    description: 'Watch multiple 4K streams simultaneously without buffering',
  },
  {
    icon: Gamepad2,
    title: 'Zero-Lag Gaming',
    description: 'Ultra-low latency for competitive gaming',
  },
  {
    icon: Laptop,
    title: 'Work From Home',
    description: 'Video calls, file transfers, cloud apps - no problem',
  },
  {
    icon: Smartphone,
    title: 'Smart Home Ready',
    description: 'Connect hundreds of IoT devices seamlessly',
  },
];

export function InternetSpeed() {
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
            Fiber-Fast Internet
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4">
            Internet speeds that{' '}
            <span className="text-gradient">never slow down</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect speed for your lifestyle. All plans include unlimited data and no contracts.
          </p>
        </motion.div>

        {/* Speed Tiers */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {speedTiers.map((tier, index) => (
            <motion.div
              key={tier.speed}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative bg-card rounded-3xl p-6 border-2 transition-all ${
                tier.popular
                  ? 'border-primary shadow-xl shadow-primary/20'
                  : 'border-border hover:border-primary/30'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-3xl font-bold mb-2">{tier.speed}</h3>
                <div className="text-4xl font-bold text-primary mb-1">{tier.price}</div>
                <p className="text-sm text-muted-foreground">/month</p>
              </div>

              <ul className="space-y-3 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Wifi className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="w-full" variant={tier.popular ? 'default' : 'outline'}>
                <a href="tel:8556837815">Get Started</a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/5 to-transparent rounded-3xl p-8 lg:p-12 border border-primary/10"
        >
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl lg:text-3xl font-bold mb-3">
              What can you do with fiber internet?
            </h3>
            <p className="text-muted-foreground">Endless possibilities with ZENSTREAM's lightning-fast speeds</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
                  <useCase.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{useCase.title}</h4>
                <p className="text-sm text-muted-foreground">{useCase.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-sm text-muted-foreground mb-4">
              <Download className="w-4 h-4 inline mr-1" />
              Symmetrical upload & download speeds
              <Upload className="w-4 h-4 inline ml-3 mr-1" />
            </p>
            <p className="text-lg font-semibold">
              Call <a href="tel:8556837815" className="text-primary hover:underline">(855) 683-7815</a> to upgrade today
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
