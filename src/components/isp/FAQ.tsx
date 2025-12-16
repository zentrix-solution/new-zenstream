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
    title: 'About Our Service',
    questions: [
      {
        q: 'Are you an official cable or internet service provider?',
        a: 'No. ZENSTREAM is an independent third-party assistance platform. We are not a service provider, nor are we affiliated with, endorsed by, or sponsored by any cable, internet, or streaming company. We provide guidance and support to help you with your entertainment service needs.',
      },
      {
        q: 'Do you sell internet, cable, or streaming plans?',
        a: 'No. We do not sell service plans directly. Our role is to provide assistance, guidance, and support to help you navigate and understand your options with various service providers. We help facilitate your decision-making process.',
      },
      {
        q: 'What exactly is ZENSTREAM?',
        a: 'ZENSTREAM is an independent assistance startup launched in 2025. We specialize in helping customers understand their cable, internet, and streaming options, providing personalized guidance, support with service selection, and ongoing assistance with entertainment service needs.',
      },
      {
        q: 'Are you affiliated with any service providers?',
        a: 'No. We maintain complete independence from all cable, internet, and streaming providers. We may reference various providers™ and services® for educational and guidance purposes only, but we have no partnerships, affiliations, or authorization agreements with any provider.',
      },
    ],
  },
  {
    title: 'Fees & Billing',
    questions: [
      {
        q: 'Do you charge for your services?',
        a: 'Yes. ZENSTREAM charges a separate service fee for our assistance and guidance. This fee is completely independent from any service provider charges you may have. Our fees cover the personalized support, guidance, and assistance we provide.',
      },
      {
        q: 'Will I still be billed by my service provider?',
        a: 'Yes. Any cable, internet, or streaming service you subscribe to will bill you directly according to their own terms and rates. Our assistance fee is separate and does not include or replace provider billing. You will receive separate invoices from your provider and from us.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept major credit cards, debit cards, and secure online payment methods for our assistance services. Payment is processed through our secure platform and is completely separate from any provider payments.',
      },
      {
        q: 'Are there any hidden fees?',
        a: 'No. We believe in transparency. Our assistance fees are clearly stated upfront before you engage our services. There are no hidden charges from ZENSTREAM. However, please note that service providers may have their own fees and terms.',
      },
    ],
  },
  {
    title: 'Refund Policy',
    questions: [
      {
        q: 'Are your services refundable?',
        a: 'Yes. Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided and whether the assistance has already been delivered. Please review our complete Refund Policy page for full eligibility details and conditions.',
      },
      {
        q: 'How do I request a refund?',
        a: 'To request a refund, contact our billing department at (855) 683-7815 or email billing@zenstream.com. Please have your service reference number ready. Refund eligibility will be reviewed based on the terms outlined in our Refund Policy.',
      },
      {
        q: 'Does the refund include provider charges?',
        a: 'No. Our refund policy only applies to ZENSTREAM assistance fees. Any charges from cable, internet, or streaming providers are governed by their own refund policies. We cannot process refunds for provider charges as we are an independent third-party service.',
      },
    ],
  },
  {
    title: 'Privacy & Security',
    questions: [
      {
        q: 'Do you need my account passwords or sensitive information?',
        a: 'No. We never request provider account passwords, login credentials, or sensitive financial information beyond what\'s needed to process our own service fees. We respect your privacy and security. You should never share provider passwords with anyone.',
      },
      {
        q: 'How do you protect my information?',
        a: 'We use industry-standard encryption (SSL, 256-bit) and security measures to protect your personal information. Your data is stored securely and never shared with unauthorized parties. Please review our Privacy Policy for complete details on data handling.',
      },
      {
        q: 'Which providers do you support?',
        a: 'We provide guidance and assistance for a wide range of cable, internet, and streaming services. We may reference multiple providers™ for educational purposes only. This does not imply any affiliation, partnership, or authorization from those providers.',
      },
    ],
  },
  {
    title: 'Support & Assistance',
    questions: [
      {
        q: 'When is support available?',
        a: 'Our assistance team is available 24/7. You can reach us at (855) 683-7815 anytime. When you call, you\'ll hear: "Thank you for calling ZENSTREAM, an independent service assistance platform." Our team is ready to guide and support you with your entertainment service needs.',
      },
      {
        q: 'What type of assistance do you provide?',
        a: 'We provide personalized guidance to help you understand your options, navigate service choices, compare features and pricing, troubleshoot common issues, and make informed decisions about your cable, internet, and streaming needs. We facilitate your understanding but don\'t directly provide or sell services.',
      },
      {
        q: 'Can you set up services for me?',
        a: 'We provide guidance and support throughout the process, but actual service activation is done by the providers themselves. We help facilitate your understanding and decision-making, but the contractual relationship for service is between you and the provider you choose.',
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
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Learn more about our independent assistance services. We're here to guide and support you with your entertainment service needs.
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
