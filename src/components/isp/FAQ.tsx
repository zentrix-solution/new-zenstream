import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqCategories = [
  {
    title: 'Streaming Service',
    questions: [
      {
        q: 'How many channels are included with ZENSTREAM?',
        a: 'ZENSTREAM offers over 500 premium channels including sports, movies, news, entertainment, kids programming, and international content. All packages include HD and 4K channels where available.',
      },
      {
        q: 'Can I watch on multiple devices at once?',
        a: 'Yes! Depending on your bundle, you can stream on 2-5 devices simultaneously. Our Ultimate Bundle allows unlimited concurrent streams.',
      },
      {
        q: 'Does ZENSTREAM include DVR?',
        a: 'All plans include Cloud DVR. The Starter Bundle gets 50 hours, Family Bundle gets 200 hours, and Ultimate Bundle includes unlimited Cloud DVR storage.',
      },
      {
        q: 'Can I watch ZENSTREAM on my smart TV?',
        a: 'Absolutely! ZENSTREAM works on smart TVs, streaming devices (Roku, Fire TV, Apple TV), smartphones, tablets, and web browsers.',
      },
    ],
  },
  {
    title: 'Internet Service',
    questions: [
      {
        q: 'Are there any data caps?',
        a: 'No! All ZENSTREAM bundles come with truly unlimited data. Stream, download, and game as much as you want without worrying about overages or throttling.',
      },
      {
        q: 'What internet speeds do you offer?',
        a: 'We offer fiber internet speeds from 100 Mbps up to 10 Gbps. Our most popular Family Bundle includes 500 Mbps, perfect for streaming and gaming.',
      },
      {
        q: 'How fast can I download/upload files?',
        a: 'Our fiber internet provides symmetrical speeds - meaning upload and download speeds are the same. With 1 Gbps, you can download a full HD movie in under 30 seconds!',
      },
    ],
  },
  {
    title: 'Bundles & Pricing',
    questions: [
      {
        q: 'How much can I save by bundling?',
        a: 'You can save up to $100/month by bundling streaming and internet together compared to purchasing separately. Plus, no contracts or hidden fees!',
      },
      {
        q: 'Can I customize my bundle?',
        a: 'Yes! Call (833) 660-1996 to speak with an agent who can help customize a bundle that fits your needs and budget perfectly.',
      },
      {
        q: 'Are there any contracts or cancellation fees?',
        a: 'No contracts required! You can cancel anytime without penalties. We believe in earning your business every month, not locking you in.',
      },
    ],
  },
  {
    title: 'Installation & Support',
    questions: [
      {
        q: 'How long does installation take?',
        a: 'Professional installation typically takes 2-4 hours. Our technicians will set up your internet, configure your Wi-Fi, and help you get started with streaming.',
      },
      {
        q: 'Is installation free?',
        a: 'Yes! Free professional installation is included with all ZENSTREAM bundles. We\'ll handle everything from fiber connection to device setup.',
      },
      {
        q: 'What if I need help after installation?',
        a: 'Call (833) 660-1996 anytime! Our 24/7 support team is always available to help with any questions or technical issues.',
      },
    ],
  },
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Frequently asked <span className="text-gradient">questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Got questions? We've got answers. If you can't find what you're looking for, 
            our support team is just a click away.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <h3 className="font-display text-xl font-semibold mb-4">{category.title}</h3>
              <Accordion type="single" collapsible>
                {category.questions.map((item, index) => (
                  <AccordionItem key={index} value={`${category.title}-${index}`}>
                    <AccordionTrigger className="text-left text-sm hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
