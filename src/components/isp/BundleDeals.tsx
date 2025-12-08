import { motion } from 'framer-motion';
import { Check, Tv, Wifi, Phone, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const bundles = [
  {
    name: 'Starter Bundle',
    tagline: 'Perfect for individuals',
    price: '$69.99',
    originalPrice: '$99.98',
    savings: '$30',
    features: [
      '200+ Streaming Channels',
      '100 Mbps Internet',
      'Cloud DVR (50 hours)',
      '2 Device streaming',
      'Basic Wi-Fi router',
      '24/7 Support',
    ],
    popular: false,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Family Bundle',
    tagline: 'Most popular choice',
    price: '$99.99',
    originalPrice: '$159.98',
    savings: '$60',
    features: [
      '500+ Streaming Channels',
      '500 Mbps Internet',
      'Cloud DVR (200 hours)',
      '5 Device streaming',
      'Premium Wi-Fi 6 router',
      'Premium Sports Package',
      'Free installation',
      '24/7 Priority Support',
    ],
    popular: true,
    gradient: 'from-primary to-purple-500',
  },
  {
    name: 'Ultimate Bundle',
    tagline: 'For power users',
    price: '$149.99',
    originalPrice: '$249.98',
    savings: '$100',
    features: [
      'All 500+ Channels + Premium',
      '1 Gbps Internet',
      'Unlimited Cloud DVR',
      'Unlimited devices',
      'Mesh Wi-Fi 6E System',
      'All Premium Channels',
      'Free installation + setup',
      'White-glove support',
      '3 months free streaming apps',
    ],
    popular: false,
    gradient: 'from-purple-500 to-pink-500',
  },
];

export function BundleDeals() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4" />
            Save up to $100/month with bundles
          </motion.div>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4">
            Bundle & save{' '}
            <span className="text-gradient">big time</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Complete entertainment and connectivity packages. No contracts, cancel anytime.
          </p>
          <a 
            href="tel:8336601996" 
            className="inline-flex items-center gap-2 text-xl font-semibold text-primary hover:underline"
          >
            <Phone className="w-5 h-5" />
            (833) 660-1996 - Call to order now!
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {bundles.map((bundle, index) => (
            <motion.div
              key={bundle.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative bg-card rounded-3xl overflow-hidden border-2 transition-all ${
                bundle.popular
                  ? 'border-primary shadow-2xl shadow-primary/30 lg:scale-105'
                  : 'border-border hover:border-primary/30'
              }`}
            >
              {/* Popular Badge */}
              {bundle.popular && (
                <div className={`absolute top-0 left-0 right-0 py-3 bg-gradient-to-r ${bundle.gradient} text-white text-center font-bold text-sm`}>
                  <Star className="w-4 h-4 inline mr-2" />
                  BEST VALUE - MOST POPULAR
                  <Star className="w-4 h-4 inline ml-2" />
                </div>
              )}

              <div className={`p-8 ${bundle.popular ? 'pt-16' : ''}`}>
                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${bundle.gradient} mb-4 shadow-lg`}>
                    <Tv className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-1">{bundle.name}</h3>
                  <p className="text-sm text-muted-foreground">{bundle.tagline}</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6 pb-6 border-b border-border">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-lg text-muted-foreground line-through">{bundle.originalPrice}</span>
                    <span className="px-2 py-1 bg-green-500/10 text-green-600 text-xs font-bold rounded">
                      Save {bundle.savings}
                    </span>
                  </div>
                  <div className="text-5xl font-bold text-primary mb-1">{bundle.price}</div>
                  <p className="text-sm text-muted-foreground">/month - No contract</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {bundle.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${bundle.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  asChild 
                  className={`w-full ${bundle.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                  variant={bundle.popular ? 'default' : 'outline'}
                  size="lg"
                >
                  <a href="tel:8336601996">
                    Get This Bundle
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-card rounded-2xl border border-border">
            <Wifi className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Free Installation</h4>
            <p className="text-sm text-muted-foreground">Professional setup included</p>
          </div>
          <div className="text-center p-6 bg-card rounded-2xl border border-border">
            <Tv className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold mb-2">No Contracts</h4>
            <p className="text-sm text-muted-foreground">Cancel anytime, no penalties</p>
          </div>
          <div className="text-center p-6 bg-card rounded-2xl border border-border">
            <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold mb-2">24/7 Support</h4>
            <p className="text-sm text-muted-foreground">Always here to help you</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
