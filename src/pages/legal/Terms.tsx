import { LegalPageLayout } from '@/components/legal/LegalPageLayout';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: (
      <>
        <p>
          By accessing or using FiberFlow's services, you agree to be bound by these Terms of Service. 
          If you do not agree to these terms, please do not use our services. These terms constitute a 
          legally binding agreement between you and FiberFlow regarding your use of our fiber internet services.
        </p>
        <p>
          We reserve the right to update these terms at any time. Continued use of our services after 
          any changes constitutes acceptance of the new terms.
        </p>
      </>
    )
  },
  {
    title: 'Service Description',
    content: (
      <>
        <p>
          FiberFlow provides fiber optic internet services to residential and business customers. 
          Our services include high-speed internet connectivity, equipment rental (including routers and modems), 
          and related technical support services.
        </p>
        <p>
          Service speeds are provided on a "up to" basis and may vary based on network conditions, 
          equipment capabilities, and other factors. We strive to maintain optimal performance but 
          cannot guarantee specific speeds at all times.
        </p>
      </>
    )
  },
  {
    title: 'Account Registration',
    content: (
      <>
        <p>
          To use our services, you must create an account and provide accurate, complete, and current information. 
          You are responsible for maintaining the confidentiality of your account credentials and for all 
          activities that occur under your account.
        </p>
        <p>
          You must be at least 18 years old to create an account and subscribe to our services. 
          Business accounts must be registered by authorized representatives of the organization.
        </p>
      </>
    )
  },
  {
    title: 'Acceptable Use Policy',
    content: (
      <>
        <p>You agree not to use our services for any unlawful purpose or in violation of these terms. Prohibited activities include but are not limited to:</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Illegal file sharing or distribution of copyrighted material</li>
          <li>Network attacks, hacking, or unauthorized access attempts</li>
          <li>Distribution of spam, malware, or malicious content</li>
          <li>Activities that degrade service quality for other users</li>
          <li>Reselling or redistributing our services without authorization</li>
        </ul>
      </>
    )
  },
  {
    title: 'Service Level Agreement',
    content: (
      <>
        <p>
          FiberFlow guarantees 99.9% network uptime for residential services and 99.99% for business services. 
          This uptime guarantee excludes scheduled maintenance windows and circumstances beyond our control.
        </p>
        <p>
          If we fail to meet our uptime commitments, credits will be applied to your account as follows: 
          for each hour of unscheduled downtime exceeding our SLA, you will receive a credit equivalent to 
          one day of service charges.
        </p>
      </>
    )
  },
  {
    title: 'Billing and Payment',
    content: (
      <>
        <p>
          Services are billed monthly in advance on your selected billing date. Payment is due within 15 days 
          of the invoice date. We accept major credit cards, debit cards, and bank transfers.
        </p>
        <p>
          Late payments may result in service suspension after 30 days and a late fee of $15 or 1.5% of 
          the outstanding balance, whichever is greater. Repeated late payments may result in service termination.
        </p>
      </>
    )
  },
  {
    title: 'Equipment Terms',
    content: (
      <>
        <p>
          Equipment provided by FiberFlow, including routers, modems, and network terminals, remains our property. 
          You are responsible for maintaining this equipment in good working condition and protecting it from damage, 
          theft, or loss.
        </p>
        <p>
          Upon service termination, you must return all FiberFlow equipment within 14 days. Failure to return 
          equipment will result in charges for the replacement cost of the devices.
        </p>
      </>
    )
  },
  {
    title: 'Limitation of Liability',
    content: (
      <>
        <p>
          FiberFlow's total liability for any claims arising from these terms or our services shall not exceed 
          the amount you paid for services during the three months preceding the claim.
        </p>
        <p>
          We are not liable for indirect, incidental, special, consequential, or punitive damages, including 
          but not limited to loss of profits, data, business opportunities, or goodwill.
        </p>
      </>
    )
  },
  {
    title: 'Termination',
    content: (
      <>
        <p>
          Either party may terminate service with 30 days written notice. Early termination of contract plans 
          may incur fees as specified in your service agreement. FiberFlow may terminate service immediately 
          for violations of these terms.
        </p>
        <p>
          Upon termination, you must pay all outstanding charges and return all equipment. Refunds for 
          prepaid services will be issued in accordance with our refund policy.
        </p>
      </>
    )
  },
  {
    title: 'Contact Information',
    content: (
      <p>
        For questions about these Terms of Service, please contact our legal team at{' '}
        <a href="mailto:legal@fiberflow.com" className="text-primary hover:underline">legal@fiberflow.com</a>{' '}
        or call us at <a href="tel:1-800-342-3700" className="text-primary hover:underline">1-800-FIBER (1-800-342-3700)</a>.
      </p>
    )
  }
];

export default function Terms() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated="December 1, 2024"
      description="Please read these terms carefully before using FiberFlow services. By using our services, you agree to be bound by these terms."
      sections={sections}
    />
  );
}