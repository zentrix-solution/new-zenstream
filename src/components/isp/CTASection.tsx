import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Phone, Tv } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 gradient-primary" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop')] bg-cover bg-center opacity-20" />
          
          {/* Content */}
          <div className="relative z-10 py-16 lg:py-24 px-8 lg:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6"
            >
              <Tv className="w-4 h-4" />
              Limited time: Save $100/month on bundles!
            </motion.div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 max-w-4xl mx-auto">
              Ready to stream and connect? Call now to get started!
            </h2>

            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join thousands enjoying ZENSTREAM's premium streaming + ultra-fast internet bundle. 
              Available in your area now!
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-10"
            >
              <a 
                href="tel:8556837815"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground text-primary rounded-2xl text-2xl font-bold hover:bg-primary-foreground/90 transition-all shadow-2xl hover:scale-105"
              >
                <Phone className="w-6 h-6" />
                (855) 683-7815
              </a>
              <p className="text-primary-foreground/80 mt-4">Call now - Agents available 24/7</p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="text-base bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <a href="tel:8556837815">
                  View All Bundles
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="tel:8556837815">Get a Quote</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
