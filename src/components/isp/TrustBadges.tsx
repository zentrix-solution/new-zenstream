import { motion } from 'framer-motion';
import { Award, Shield, Zap, Clock, Star, CheckCircle, Tv, Phone } from 'lucide-react';

const badges = [
  { icon: Shield, label: 'Independent', sublabel: 'Not Affiliated' },
  { icon: CheckCircle, label: 'Transparent', sublabel: 'Clear Pricing' },
  { icon: Star, label: '4.8/5 Rating', sublabel: 'Customer Reviews' },
  { icon: Clock, label: '24/7 Support', sublabel: 'Always Available' },
  { icon: Award, label: 'Expert Guidance', sublabel: 'Trusted Advice' },
  { icon: Phone, label: '(855) 683-7815', sublabel: 'Call Anytime' },
];

export function TrustBadges() {
  return (
    <section className="py-12 bg-secondary/30 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
          <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Independent assistance since 2025</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-card transition-colors cursor-default"
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3"
              >
                <badge.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <p className="font-semibold text-sm">{badge.label}</p>
              <p className="text-xs text-muted-foreground">{badge.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}