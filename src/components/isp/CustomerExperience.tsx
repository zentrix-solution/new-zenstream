import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote, Users, Heart, TrendingUp, Award } from 'lucide-react';

const experiences = [
  {
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop',
    title: 'Family Entertainment',
    description: 'Keep the whole family entertained with content for all ages',
    icon: Users,
    stats: '500K+ Families',
  },
  {
    image: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=600&h=400&fit=crop',
    title: 'Sports & Live Events',
    description: 'Never miss a game with comprehensive sports coverage',
    icon: TrendingUp,
    stats: 'All Major Sports',
  },
  {
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&h=400&fit=crop',
    title: 'Work From Home',
    description: 'Reliable internet for video calls and cloud applications',
    icon: Award,
    stats: '99.9% Uptime',
  },
];

const testimonialHighlight = {
  quote: "Switching to ZENSTREAM was the best decision! We save $75/month and get way more channels plus faster internet. The kids love it, and so do we!",
  author: "Jennifer Martinez",
  role: "Happy Customer",
  rating: 5,
  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
};

export function CustomerExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            Experience the{' '}
            <span className="text-gradient">ZENSTREAM difference</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join over 500,000 satisfied customers enjoying premium streaming and ultra-fast internet
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-lg h-64">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                      <experience.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-white/80">{experience.stats}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-sm text-white/90">{experience.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-3xl p-8 lg:p-12 border border-primary/10">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=500&fit=crop"
                  alt="Happy customer testimonial"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Rating Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.7, type: "spring" }}
                  className="absolute top-6 right-6 bg-white rounded-2xl px-4 py-3 shadow-xl"
                >
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-center">5.0 Rating</p>
                </motion.div>

                {/* Quote Icon */}
                <div className="absolute bottom-6 left-6 w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonialHighlight.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 leading-relaxed">
                "{testimonialHighlight.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonialHighlight.image}
                  alt={testimonialHighlight.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="font-semibold">{testimonialHighlight.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonialHighlight.role}</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">500K+</p>
                    <p className="text-xs text-muted-foreground">Happy Customers</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">4.9★</p>
                    <p className="text-xs text-muted-foreground">Average Rating</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">24/7</p>
                    <p className="text-xs text-muted-foreground">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
