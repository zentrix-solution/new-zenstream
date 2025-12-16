import { motion } from 'framer-motion';
import { Check, Tv, Wifi, Phone, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const bundles = [
  {
    name: 'Basic Assistance',
    tagline: 'One-time guidance',
    price: '$29.99',
    originalPrice: null,
    savings: null,
    features: [
      'Single consultation session',
      'Service comparison guidance',
      'Provider™ options overview',
      'Basic setup assistance',
      'Email support follow-up',
      '7-day refund window',
    ],
    popular: false,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Complete Support',
    tagline: 'Most popular package',
    price: '$79.99',
    originalPrice: null,
    savings: null,
    features: [
      'Multi-session consultations',
      'Detailed service comparisons',
      'Provider™ research assistance',
      'Setup & activation guidance',
      'Priority phone support',
      'Follow-up assistance (30 days)',
      'Troubleshooting help',
      '10-day refund window',
    ],
    popular: true,
    gradient: 'from-primary to-purple-500',
  },
  {
    name: 'Premium Guidance',
    tagline: 'Comprehensive assistance',
    price: '$149.99',
    originalPrice: null,
    savings: null,
    features: [
      'Unlimited consultations (60 days)',
      'Comprehensive service analysis',
      'Multi-provider™ comparisons',
      'Complete setup assistance',
      'Dedicated support specialist',
      'Contract review guidance',
      'Ongoing optimization help',
      '24/7 priority assistance',
      '15-day refund window',
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
            Assistance packages for every need
          </motion.div>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4">
            Choose your{' '}
            <span className="text-gradient">assistance level</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Independent guidance packages designed to help you make informed entertainment service decisions.
          </p>
          <div className="mb-6 p-4 rounded-lg bg-muted/50 border border-border max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Important:</strong> These are assistance service fees only. Provider charges are separate and billed directly by providers. We are not affiliated with any provider.
            </p>
          </div>
          <a 
            href="tel:8556837815" 
            className="inline-flex items-center gap-2 text-xl font-semibold text-primary hover:underline"
          >
            <Phone className="w-5 h-5" />
            (855) 683-7815 - Speak with a specialist
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
                  <div className="text-5xl font-bold text-primary mb-1">{bundle.price}</div>
                  <p className="text-sm text-muted-foreground">Assistance service fee</p>
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
                  <a href="tel:8556837815">
                    Get Assistance
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
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Independent Service</h4>
            <p className="text-sm text-muted-foreground">Not affiliated with any provider</p>
          </div>
          <div className="text-center p-6 bg-card rounded-2xl border border-border">
            <Star className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Transparent Pricing</h4>
            <p className="text-sm text-muted-foreground">Clear fees, no hidden charges</p>
          </div>
          <div className="text-center p-6 bg-card rounded-2xl border border-border">
            <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Refund Eligible</h4>
            <p className="text-sm text-muted-foreground">7-15 day refund window available</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
