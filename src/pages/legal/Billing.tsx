import { motion } from 'framer-motion';

export default function Billing() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-4xl font-bold mb-4">Billing Agreement</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 1, 2024</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Billing Cycle</h2>
              <p className="text-muted-foreground mb-4">
                Services are billed monthly in advance. Your billing cycle begins on your service activation date 
                and recurs on the same date each month. If the date doesn't exist in a month, billing occurs 
                on the last day of that month.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Payment Methods</h2>
              <p className="text-muted-foreground mb-4">
                We accept the following payment methods:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Credit cards (Visa, Mastercard, American Express, Discover)</li>
                <li>Debit cards with Visa or Mastercard logo</li>
                <li>ACH bank transfer</li>
                <li>PayPal</li>
                <li>Check (mailed payments only, additional processing time applies)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">AutoPay</h2>
              <p className="text-muted-foreground mb-4">
                Enrolling in AutoPay provides a $5/month discount. AutoPay charges your selected payment 
                method automatically on your billing date. You can manage AutoPay settings in your account dashboard.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Payment Due Dates</h2>
              <p className="text-muted-foreground mb-4">
                Payment is due within 15 days of the invoice date. Invoices are sent via email and 
                available in your online account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Late Payments</h2>
              <p className="text-muted-foreground mb-4">
                Payments received after the due date are subject to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Late fee of $10 or 1.5% of the outstanding balance (whichever is greater)</li>
                <li>Service suspension after 30 days past due</li>
                <li>Service termination after 60 days past due</li>
                <li>Collection agency referral for unpaid balances</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Disputed Charges</h2>
              <p className="text-muted-foreground mb-4">
                If you believe there's an error on your bill, contact billing@fiberflow.com within 30 days. 
                We'll investigate and respond within 10 business days. Undisputed charges remain due 
                while disputed amounts are under review.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Price Changes</h2>
              <p className="text-muted-foreground mb-4">
                We'll provide at least 30 days notice before any price increases. Contract customers 
                are protected from price increases during their contract term.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Taxes and Fees</h2>
              <p className="text-muted-foreground mb-4">
                Prices shown exclude applicable taxes and regulatory fees. These vary by location 
                and are itemized on your monthly invoice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Contact Billing</h2>
              <p className="text-muted-foreground mb-4">
                Email: billing@fiberflow.com<br />
                Phone: (855) 683-7815<br />
                Hours: Monday-Friday, 8AM-8PM EST
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
