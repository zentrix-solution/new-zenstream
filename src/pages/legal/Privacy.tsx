import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 1, 2024</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect information you provide directly, such as name, address, email, and payment information. 
                We also collect usage data, including browsing patterns, connection logs, and network performance metrics.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use your information to provide and improve our services, process payments, communicate with you, 
                ensure network security, and comply with legal obligations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell your personal information. We may share information with service providers who 
                assist in our operations, law enforcement when required, and in connection with business transfers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement industry-standard security measures including encryption, access controls, 
                and regular security audits to protect your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to access, correct, or delete your personal information. 
                You may also opt out of marketing communications at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground mb-4">
                We retain personal information for as long as necessary to provide services and comply with legal obligations. 
                Usage data is typically retained for 12 months.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">7. Children's Privacy</h2>
              <p className="text-muted-foreground mb-4">
                Our services are not directed to children under 13. We do not knowingly collect 
                personal information from children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                For privacy-related inquiries, contact our Privacy Officer at privacy@fiberflow.com.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
