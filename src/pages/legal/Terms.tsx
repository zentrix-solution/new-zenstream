import { LegalPageLayout } from '@/components/legal/LegalPageLayout';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: (
      <>
        <p>
          By accessing or using ZENSTREAM's assistance services, you agree to be bound by these Terms of Service. 
          If you do not agree to these terms, please do not use our services. These terms constitute a 
          legally binding agreement between you and ZENSTREAM regarding your use of our independent assistance platform.
        </p>
        <p>
          We reserve the right to update these terms at any time. Continued use of our services after 
          any changes constitutes acceptance of the new terms.
        </p>
      </>
    )
  },
  {
    title: 'Independent Service Notice',
    content: (
      <>
        <p>
          <strong>IMPORTANT:</strong> ZENSTREAM is an independent third-party service assistance startup, launched in 2025, 
          and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.
        </p>
        <p>
          We do NOT:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Operate as an internet service provider (ISP)</li>
          <li>Sell cable, internet, or streaming plans directly</li>
          <li>Represent or act as agents for any service provider</li>
          <li>Have authorization or partnership agreements with providers</li>
          <li>Provide internet connectivity or cable/streaming services</li>
        </ul>
        <p className="mt-4">
          We DO provide:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Guidance and assistance with service selection</li>
          <li>Support navigating entertainment service options</li>
          <li>Educational information about various providers</li>
          <li>Help facilitating your decision-making process</li>
          <li>Independent consultation services</li>
        </ul>
      </>
    )
  },
  {
    title: 'Service Description',
    content: (
      <>
        <p>
          ZENSTREAM provides assistance and guidance services to help customers understand and navigate 
          cable, internet, and streaming service options. Our services include consultations, comparisons, 
          support, and educational guidance.
        </p>
        <p>
          Any references to specific providers™ or services® are for educational and descriptive purposes only. 
          Such references do not imply endorsement, affiliation, partnership, or authorization from those providers.
        </p>
        <p className="mt-4">
          All trademarks, service marks, and trade names referenced belong to their respective owners.
        </p>
      </>
    )
  },
  {
    title: 'Fees and Charges',
    content: (
      <>
        <p>
          ZENSTREAM charges separate service fees for our assistance and guidance services. These fees are:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Completely independent from provider charges</li>
          <li>Clearly communicated before you engage our services</li>
          <li>Non-refundable under certain conditions (see Refund Policy)</li>
          <li>Separate from any costs associated with service providers</li>
        </ul>
        <p className="mt-4">
          <strong>Important:</strong> If you subscribe to services from cable, internet, or streaming providers, 
          you will be billed directly by those providers according to their own terms and rates. ZENSTREAM 
          cannot modify, waive, or refund provider charges.
        </p>
      </>
    )
  },
  {
    title: 'Account Registration',
    content: (
      <>
        <p>
          To use our assistance services, you may need to create an account and provide accurate, complete, 
          and current information. You are responsible for maintaining the confidentiality of your account 
          credentials and for all activities that occur under your account.
        </p>
        <p>
          You must be at least 18 years old to create an account and engage our services.
        </p>
      </>
    )
  },
  {
    title: 'Privacy and Data Protection',
    content: (
      <>
        <p>
          We take your privacy seriously. ZENSTREAM will:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>NEVER request provider account passwords or login credentials</li>
          <li>NEVER ask for sensitive provider account information</li>
          <li>Only collect information necessary to provide our assistance services</li>
          <li>Protect your data with industry-standard encryption (SSL, 256-bit)</li>
        </ul>
        <p className="mt-4">
          <strong>Security Notice:</strong> Never share provider passwords with anyone, including ZENSTREAM staff. 
          Legitimate assistance does not require provider passwords.
        </p>
        <p className="mt-4">
          For complete details on data handling, please review our Privacy Policy.
        </p>
      </>
    )
  },
  {
    title: 'No Guarantees or Warranties',
    content: (
      <>
        <p>
          ZENSTREAM provides assistance and guidance services on an "as is" and "as available" basis. We do not guarantee:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Specific outcomes with service providers</li>
          <li>Provider acceptance or approval</li>
          <li>Particular pricing or service availability</li>
          <li>Provider service quality or performance</li>
          <li>Resolution of provider-related issues</li>
        </ul>
        <p className="mt-4">
          Our role is limited to guidance and facilitation. The contractual relationship for actual services 
          is between you and the provider you choose.
        </p>
      </>
    )
  },
  {
    title: 'Limitation of Liability',
    content: (
      <>
        <p>
          ZENSTREAM shall not be liable for:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Provider service failures, outages, or quality issues</li>
          <li>Provider billing disputes or overcharges</li>
          <li>Provider contract terms or conditions</li>
          <li>Installation issues or delays by providers</li>
          <li>Any indirect, incidental, or consequential damages</li>
        </ul>
        <p className="mt-4">
          Our liability is limited to the fees you paid to ZENSTREAM for assistance services.
        </p>
      </>
    )
  },
  {
    title: 'Provider Relationships',
    content: (
      <>
        <p>
          You acknowledge and understand that:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Any services you obtain from providers are subject to their own terms and conditions</li>
          <li>You will have a direct contractual relationship with providers you choose</li>
          <li>Providers will bill you directly for their services</li>
          <li>ZENSTREAM is not a party to your provider agreements</li>
          <li>Provider refunds must be requested directly from providers</li>
        </ul>
      </>
    )
  },
  {
    title: 'Termination',
    content: (
      <>
        <p>
          ZENSTREAM reserves the right to terminate or suspend your access to our assistance services at any time, 
          with or without cause, with or without notice. Reasons for termination may include violation of these 
          terms, fraudulent activity, or abusive behavior toward our staff.
        </p>
        <p className="mt-4">
          Upon termination, your right to use our services will immediately cease. Refund eligibility upon 
          termination is governed by our Refund Policy.
        </p>
      </>
    )
  },
  {
    title: 'Changes to Terms',
    content: (
      <>
        <p>
          ZENSTREAM reserves the right to modify these Terms of Service at any time. We will post updated 
          terms on this page with a new "Last updated" date. Your continued use of our services after changes 
          constitutes acceptance of the modified terms.
        </p>
        <p className="mt-4">
          We encourage you to review these terms periodically to stay informed of any updates.
        </p>
      </>
    )
  },
  {
    title: 'Contact Information',
    content: (
      <p>
        For questions about these Terms of Service, please contact our team at{' '}
        <a href="mailto:legal@zenstream.com" className="text-primary hover:underline">legal@zenstream.com</a>{' '}
        or call us at <a href="tel:8556837815" className="text-primary hover:underline">(855) 683-7815</a>.
      </p>
    )
  }
];

export default function Terms() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated="December 16, 2025"
      sections={sections}
      notice="ZENSTREAM is an independent third-party service assistance startup, launched in 2025, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider."
    />
  );
}
