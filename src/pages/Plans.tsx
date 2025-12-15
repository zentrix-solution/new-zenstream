import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Building2, Home, Briefcase, ArrowRight, Star, Shield, Clock, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Basic',
    icon: Home,
    speed: '100 Mbps',
    price: 49,
    description: 'Perfect for light browsing and streaming',
    features: [
      'Up to 100 Mbps download',
      'Up to 100 Mbps upload',
      'Unlimited data',
      'Wi-Fi 6 router included',
      'Email support',
    ],
    popular: false,
  },
  {
    name: 'Plus',
    icon: Zap,
    speed: '500 Mbps',
    price: 79,
    description: 'Ideal for families and remote workers',
    features: [
      'Up to 500 Mbps download',
      'Up to 500 Mbps upload',
      'Unlimited data',
      'Wi-Fi 6 router included',
      '24/7 phone support',
      'Free installation',
    ],
    popular: true,
  },
  {
    name: 'Pro',
    icon: Briefcase,
    speed: '1 Gbps',
    price: 99,
    description: 'For power users and content creators',
    features: [
      'Up to 1 Gbps download',
      'Up to 1 Gbps upload',
      'Unlimited data',
      'Wi-Fi 6E mesh system',
      'Priority 24/7 support',
      'Free installation',
      'Static IP available',
    ],
    popular: false,
  },
  {
    name: 'Business',
    icon: Building2,
    speed: '10 Gbps',
    price: 299,
    description: 'Enterprise-grade for businesses',
    features: [
      'Up to 10 Gbps download',
      'Up to 10 Gbps upload',
      'Unlimited data',
      'Enterprise mesh system',
      'Dedicated account manager',
      'Free installation',
      'Multiple static IPs',
      '99.99% SLA guarantee',
    ],
    popular: false,
  },
];

const guarantees = [
  { icon: Star, title: '30-Day Money Back', description: 'Not satisfied? Full refund, no questions asked.' },
  { icon: Shield, title: 'No Hidden Fees', description: 'The price you see is the price you pay.' },
  { icon: Clock, title: 'No Contracts', description: 'Cancel anytime without penalty.' },
  { icon: Wifi, title: 'Free Equipment', description: 'Premium router included with all plans.' },
];

export default function Plans() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
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
            Simple Pricing
          </motion.span>
          <h1 className="font-display text-4xl lg:text-6xl font-bold mb-4">
            Choose your <span className="text-gradient">perfect plan</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            All plans include unlimited data, no contracts, and our 30-day satisfaction guarantee.
          </p>

          {/* Billing Toggle */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-4 p-1.5 bg-secondary rounded-full"
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all",
                billingCycle === 'monthly' 
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2",
                billingCycle === 'annual' 
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Annual 
              <span className={cn(
                "px-2 py-0.5 rounded-full text-xs",
                billingCycle === 'annual' ? 'bg-primary-foreground/20' : 'bg-primary text-primary-foreground'
              )}>
                Save 20%
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className={cn(
                "relative rounded-3xl p-8 border transition-all",
                plan.popular 
                  ? 'bg-primary text-primary-foreground border-primary shadow-2xl shadow-primary/20 scale-105' 
                  : 'bg-card border-border hover:border-primary/30 hover:shadow-lg'
              )}
            >
              {plan.popular && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-foreground text-background text-xs font-semibold rounded-full"
                >
                  Most Popular
                </motion.div>
              )}

              <motion.div 
                whileHover={{ rotate: 10 }}
                className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-6",
                  plan.popular ? 'bg-primary-foreground/20' : 'bg-primary/10'
                )}
              >
                <plan.icon className={cn(
                  "w-7 h-7",
                  plan.popular ? 'text-primary-foreground' : 'text-primary'
                )} />
              </motion.div>

              <h3 className="font-display text-2xl font-bold mb-1">{plan.name}</h3>
              <p className={cn(
                "text-sm mb-4",
                plan.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'
              )}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="font-display text-5xl font-bold">
                  ${billingCycle === 'annual' ? Math.round(plan.price * 0.8) : plan.price}
                </span>
                <span className={cn(
                  "text-sm",
                  plan.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'
                )}>/mo</span>
              </div>

              <div className={cn(
                "inline-block px-4 py-2 rounded-full text-sm font-bold mb-6",
                plan.popular ? 'bg-primary-foreground/20' : 'bg-secondary'
              )}>
                {plan.speed}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <motion.li 
                    key={feature} 
                    className="flex items-start gap-3 text-sm"
                    whileHover={{ x: 3 }}
                  >
                    <Check className={cn(
                      "w-5 h-5 flex-shrink-0 mt-0.5",
                      plan.popular ? 'text-primary-foreground' : 'text-primary'
                    )} />
                    <span className={plan.popular ? 'text-primary-foreground/90' : ''}>
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <Button 
                className="w-full group" 
                variant={plan.popular ? 'secondary' : 'default'}
                asChild
              >
                <a href="tel:8556837815">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {guarantees.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4"
              >
                <item.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="font-display font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Speed Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl lg:text-4xl font-bold text-center mb-12">
            Speed comparison
          </h2>
          <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-lg">
            <div className="grid grid-cols-5 gap-4 p-6 bg-secondary/50 font-semibold text-sm">
              <div>Activity</div>
              <div className="text-center">Basic</div>
              <div className="text-center text-primary">Plus</div>
              <div className="text-center">Pro</div>
              <div className="text-center">Business</div>
            </div>
            {[
              ['4K Streaming', '1 stream', '4 streams', '8+ streams', 'Unlimited'],
              ['Video Conferencing', 'Good', 'Excellent', 'Perfect', 'Perfect'],
              ['Online Gaming', 'Casual', 'Competitive', 'Pro-level', 'LAN Party'],
              ['Large File Downloads', '~13 min/10GB', '~3 min/10GB', '~1.5 min/10GB', '~8 sec/10GB'],
              ['Smart Home Devices', 'Up to 10', 'Up to 30', 'Up to 100', 'Unlimited'],
            ].map((row, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-5 gap-4 p-6 border-t border-border text-sm hover:bg-secondary/30 transition-colors"
              >
                <div className="font-medium">{row[0]}</div>
                {row.slice(1).map((cell, j) => (
                  <div key={j} className={cn(
                    "text-center",
                    j === 1 ? "text-primary font-medium" : "text-muted-foreground"
                  )}>{cell}</div>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4">Have questions?</h2>
          <p className="text-muted-foreground mb-6">
            Check out our FAQ or contact our sales team for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/support">View FAQ</Link>
            </Button>
            <Button size="lg" asChild>
              <a href="tel:8336601996">
                Contact Sales
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}