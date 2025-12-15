import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Busy Mom of 3',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    content: 'ZENSTREAM is perfect for our family! The kids watch cartoons on Nickelodeon, my husband streams sports, and I work from home - all at the same time with zero buffering. Best bundle deal ever!',
    rating: 5,
    verified: true,
  },
  {
    name: 'Michael Chen',
    role: 'Sports Enthusiast',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    content: 'I never miss a game with ZENSTREAM! Every sports channel I need plus lightning-fast internet for streaming multiple games at once. The 4K quality is absolutely incredible.',
    rating: 5,
    verified: true,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Movie Lover',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    content: 'HBO, Showtime, all the premium movie channels PLUS fast internet for $99/month? I was paying more for internet alone! The Cloud DVR is amazing - I record everything and watch later.',
    rating: 5,
    verified: true,
  },
  {
    name: 'David Park',
    role: 'Remote Worker',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    content: 'Working from home while my family streams Netflix and Disney+ all day - no problem with ZENSTREAM! The internet is blazing fast and we can watch TV on any device. Customer service is excellent too.',
    rating: 5,
    verified: true,
  },
  {
    name: 'Jennifer Lopez',
    role: 'Cord-Cutter Convert',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop',
    content: 'Finally ditched cable and satellite! ZENSTREAM gives me more channels, better internet, and saves me $75/month. Setup was easy and (855) 683-7815 support is available 24/7!',
    rating: 5,
    verified: true,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4">
            Loved by <span className="text-gradient">thousands</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real customers, real results. See why families are switching to ZENSTREAM for streaming and internet.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-3xl p-8 lg:p-12 shadow-lg border border-border"
          >
            <Quote className="w-12 h-12 text-primary/20 mb-6" />
            
            <p className="text-xl lg:text-2xl font-medium mb-8 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-display font-semibold">{testimonials[currentIndex].name}</h4>
                    {testimonials[currentIndex].verified && (
                      <BadgeCheck className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
