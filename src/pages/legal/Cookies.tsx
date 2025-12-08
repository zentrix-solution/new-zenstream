import { motion } from 'framer-motion';

export default function Cookies() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 1, 2024</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">What Are Cookies?</h2>
              <p className="text-muted-foreground mb-4">
                Cookies are small text files stored on your device when you visit our website. 
                They help us provide a better user experience and understand how our site is used.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
              
              <h3 className="font-display text-xl font-semibold mb-2 mt-6">Essential Cookies</h3>
              <p className="text-muted-foreground mb-4">
                Required for basic site functionality, including authentication, security, and navigation. 
                These cannot be disabled.
              </p>

              <h3 className="font-display text-xl font-semibold mb-2 mt-6">Performance Cookies</h3>
              <p className="text-muted-foreground mb-4">
                Help us understand how visitors interact with our website by collecting anonymous 
                information about page visits and traffic sources.
              </p>

              <h3 className="font-display text-xl font-semibold mb-2 mt-6">Functional Cookies</h3>
              <p className="text-muted-foreground mb-4">
                Remember your preferences and settings, such as language selection and login information, 
                to provide a personalized experience.
              </p>

              <h3 className="font-display text-xl font-semibold mb-2 mt-6">Marketing Cookies</h3>
              <p className="text-muted-foreground mb-4">
                Used to track visitors across websites for advertising purposes. These help us deliver 
                relevant ads and measure campaign effectiveness.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Managing Cookies</h2>
              <p className="text-muted-foreground mb-4">
                You can control cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>View and delete cookies</li>
                <li>Block all cookies</li>
                <li>Block third-party cookies</li>
                <li>Clear all cookies when you close your browser</li>
                <li>Accept cookies from specific sites only</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Third-Party Cookies</h2>
              <p className="text-muted-foreground mb-4">
                We use services like Google Analytics and social media platforms that may set their own cookies. 
                These are governed by the respective third parties' privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                For questions about our cookie policy, please contact privacy@fiberflow.com.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
