import { motion } from 'framer-motion';

export default function Refund() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-4xl font-bold mb-4">Refund Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 16, 2025</p>

          {/* Independent Service Notice */}
          <div className="mb-8 p-4 rounded-lg bg-muted border border-border">
            <p className="text-sm leading-relaxed">
              <strong>Important Notice:</strong> ZENSTREAM is an independent third-party service assistance startup, launched in 2025, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. This refund policy applies only to ZENSTREAM assistance fees, not to any provider charges.
            </p>
          </div>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Refund Eligibility Period</h2>
              <p className="text-muted-foreground mb-4">
                Refund requests for ZENSTREAM assistance services can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided. The specific refund window for your service will be communicated at the time of purchase.
              </p>
              <p className="text-muted-foreground mb-4">
                Eligibility for refunds depends on several factors including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Whether personalized assistance has already been delivered</li>
                <li>The type of assistance package purchased</li>
                <li>The extent of services already provided</li>
                <li>Time elapsed since purchase</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">What This Refund Policy Covers</h2>
              <p className="text-muted-foreground mb-4">
                This refund policy applies exclusively to fees charged by ZENSTREAM for our assistance and guidance services. This includes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Service assistance fees</li>
                <li>Consultation fees</li>
                <li>Guidance package fees</li>
                <li>Support service charges</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">What This Policy Does NOT Cover</h2>
              <p className="text-muted-foreground mb-4">
                ZENSTREAM cannot process refunds for charges from cable, internet, or streaming service providers. These include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provider subscription fees</li>
                <li>Provider installation charges</li>
                <li>Provider equipment costs</li>
                <li>Provider early termination fees</li>
                <li>Any other charges billed directly by service providers</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                For refunds related to provider charges, you must contact the provider directly. Provider refund policies are governed by their own terms and conditions, over which ZENSTREAM has no control or authority.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Assistance Already Delivered</h2>
              <p className="text-muted-foreground mb-4">
                Refund eligibility is significantly affected if personalized assistance has already been provided. Services considered "delivered" include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Completed consultation sessions</li>
                <li>Personalized guidance provided</li>
                <li>Service comparisons prepared</li>
                <li>Support calls completed</li>
                <li>Assistance facilitated with providers</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                If substantial assistance has been delivered, refunds may be partial or unavailable depending on the circumstances.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">How to Request a Refund</h2>
              <p className="text-muted-foreground mb-4">
                To request a refund of ZENSTREAM assistance fees, please contact our billing department:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Phone:</strong> (855) 683-7815</li>
                <li><strong>Email:</strong> billing@zenstream.com</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Please have your service reference number and purchase information ready. Our team will review your request based on the eligibility criteria outlined in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Refund Processing</h2>
              <p className="text-muted-foreground mb-4">
                Approved refunds are processed within 7-14 business days and will be returned using the original payment method. You will receive email confirmation once your refund has been processed.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Disputes and Questions</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about refund eligibility or wish to dispute a refund decision, please contact our billing department at (855) 683-7815. We will review your case and provide a written explanation of our determination.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground mb-4">
                ZENSTREAM reserves the right to modify this refund policy at any time. Changes will be posted on this page with an updated "Last updated" date. Your continued use of our services after changes constitutes acceptance of the modified policy.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
