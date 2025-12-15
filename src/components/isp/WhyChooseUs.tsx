import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Zap, Clock, Headphones, Tv, Gift } from 'lucide-react';

const features = [
  {
    icon: Tv,
    title: '500+ Premium Channels',
    description: 'Watch live TV, sports, movies, and shows with crystal-clear 4K streaming.',
  },
  {
    icon: Zap,
    title: '10 Gbps Fiber Internet',
    description: 'Lightning-fast speeds perfect for streaming, gaming, and working from home.',
  },
  {
    icon: Gift,
    title: 'Bundle & Save',
    description: 'Get both services together and save up to $100/month compared to separate plans.',
  },
  {
    icon: Clock,
    title: 'No Contracts or Data Caps',
    description: 'Unlimited streaming and data with no long-term commitments. Cancel anytime.',
  },
  {
    icon: Shield,
    title: '99.99% Uptime Guarantee',
    description: 'Rock-solid reliability with redundant connections and 24/7 monitoring.',
  },
  {
    icon: Headphones,
    title: '24/7 Expert Support',
    description: 'Call (855) 683-7815 anytime - real humans ready to help immediately.',
  },
];

const stats = [
  { value: '920+', label: 'Happy Subscribers' },
  { value: '99.9%', label: 'Uptime Guarantee' },
  { value: '4.9★', label: 'Customer Rating' },
  { value: '<2hr', label: 'Avg. Response Time' },
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=500&fit=crop"
                  alt="Fiber optic cables"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-3xl bg-primary p-6 text-primary-foreground">
                <p className="font-display text-4xl font-bold mb-2">{stats[0].value}</p>
                <p className="text-primary-foreground/80">{stats[0].label}</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-3xl bg-foreground p-6 text-background">
                <p className="font-display text-4xl font-bold mb-2">{stats[1].value}</p>
                <p className="text-background/80">{stats[1].label}</p>
              </div>
              <div className="rounded-3xl overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=500&fit=crop"
                  alt="Network infrastructure"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-display text-3xl lg:text-5xl font-bold mb-6">
              Why choose <span className="text-gradient">ZENSTREAM</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              The ultimate streaming and internet bundle. Enjoy premium entertainment with 500+ channels 
              plus fiber-fast internet that never slows down. All in one affordable package.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4 bg-card/50 p-4 rounded-xl border border-border hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
