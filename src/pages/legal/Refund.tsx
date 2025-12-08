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
          <p className="text-muted-foreground mb-8">Last updated: December 1, 2024</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">30-Day Satisfaction Guarantee</h2>
              <p className="text-muted-foreground mb-4">
                FiberFlow offers a 30-day satisfaction guarantee for new customers. If you're not completely 
                satisfied with our service within the first 30 days, you may cancel and receive a full refund 
                of your first month's service fee.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Installation Fee Refunds</h2>
              <p className="text-muted-foreground mb-4">
                Installation fees are refundable within the 30-day satisfaction period. After 30 days, 
                installation fees are non-refundable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Service Credits</h2>
              <p className="text-muted-foreground mb-4">
                If you experience service outages exceeding our SLA commitments, you will automatically 
                receive credits on your next billing statement. Credits are calculated based on the duration 
                of the outage and your monthly service fee.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Prorated Refunds</h2>
              <p className="text-muted-foreground mb-4">
                If you cancel service mid-billing cycle, you will receive a prorated refund for the 
                unused portion of your service period. Prorated refunds are processed within 14 business days.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Equipment Deposits</h2>
              <p className="text-muted-foreground mb-4">
                Equipment deposits are refunded within 30 days of returning equipment in good condition. 
                Equipment must be returned within 30 days of service termination.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Non-Refundable Items</h2>
              <p className="text-muted-foreground mb-4">
                The following are not eligible for refunds: late payment fees, reconnection fees, 
                expedited installation fees (after installation is complete), and services already rendered.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">How to Request a Refund</h2>
              <p className="text-muted-foreground mb-4">
                To request a refund, contact our billing department at billing@fiberflow.com or call 
                1-800-FIBER. Please have your account number ready.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
