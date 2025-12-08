import { motion } from 'framer-motion';

export default function UsagePolicy() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-4xl font-bold mb-4">Acceptable Usage Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 1, 2024</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Purpose</h2>
              <p className="text-muted-foreground mb-4">
                This Acceptable Usage Policy (AUP) defines the proper use of FiberFlow's internet services 
                to ensure a quality experience for all customers and compliance with applicable laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Prohibited Activities</h2>
              <p className="text-muted-foreground mb-4">
                The following activities are strictly prohibited:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Illegal activities including copyright infringement and distribution of illegal content</li>
                <li>Network attacks, hacking, or unauthorized access attempts</li>
                <li>Distribution of malware, viruses, or other harmful software</li>
                <li>Sending spam or unsolicited bulk messages</li>
                <li>Operating servers that violate our terms (residential plans)</li>
                <li>Reselling or redistributing internet service without authorization</li>
                <li>Activities that degrade network performance for other users</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Fair Use Guidelines</h2>
              <p className="text-muted-foreground mb-4">
                While our plans include unlimited data, extremely heavy usage that impacts network 
                performance may result in traffic management during peak hours. Business plans 
                have no such limitations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Network Management</h2>
              <p className="text-muted-foreground mb-4">
                FiberFlow may implement reasonable network management practices to ensure optimal 
                performance for all users. This may include traffic prioritization during congestion 
                and blocking of known malicious traffic.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Consequences of Violation</h2>
              <p className="text-muted-foreground mb-4">
                Violations may result in: warning notices, temporary service suspension, 
                permanent termination, and legal action where appropriate.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Reporting Violations</h2>
              <p className="text-muted-foreground mb-4">
                To report suspected violations, contact abuse@fiberflow.com with relevant details.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
