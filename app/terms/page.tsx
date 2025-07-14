import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Snapsite',
  description: 'Terms and conditions for using Snapsite services.',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
          Terms of Service
        </h1>
        <p className="text-lg text-muted-foreground">
          Last updated: {new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>

      <div className="prose prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground mb-4">
            By accessing or using Snapsite ("the Service"), you agree to be bound by these Terms of Service ("Terms"). 
            If you disagree with any part of the terms, you may not access the Service.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
          <p className="text-muted-foreground mb-4">
            Snapsite provides a platform that converts screenshots into clean, responsive HTML/CSS/JS code. 
            The Service is provided "as is" and we make no warranties regarding its accuracy or reliability.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Accounts</h2>
          <p className="text-muted-foreground mb-4">
            To access certain features of the Service, you may be required to create an account. You are responsible for maintaining 
            the confidentiality of your account information and for all activities that occur under your account.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">4. User Content</h2>
          <p className="text-muted-foreground mb-4">
            You retain ownership of any content you upload to the Service. By uploading content, you grant us a worldwide, 
            non-exclusive, royalty-free license to use, reproduce, modify, and display such content for the purpose of providing the Service.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">5. Prohibited Uses</h2>
          <p className="text-muted-foreground mb-4">
            You agree not to use the Service to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
            <li>Upload or transmit any content that is illegal, harmful, or offensive</li>
            <li>Impersonate any person or entity, or falsely state your affiliation</li>
            <li>Interfere with or disrupt the Service or servers</li>
            <li>Attempt to gain unauthorized access to any portion of the Service</li>
            <li>Use the Service for any illegal or unauthorized purpose</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
          <p className="text-muted-foreground mb-4">
            The Service and its original content, features, and functionality are owned by Snapsite and are protected by international 
            copyright, trademark, and other intellectual property laws.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
          <p className="text-muted-foreground mb-4">
            In no event shall Snapsite, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, 
            incidental, special, consequential or punitive damages resulting from your access to or use of, or inability to access or use, the Service.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to Terms</h2>
          <p className="text-muted-foreground mb-4">
            We reserve the right to modify these Terms at any time. We will provide notice of any changes by updating the "Last updated" date. 
            Your continued use of the Service after any changes constitutes your acceptance of the new Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about these Terms, please contact us at{' '}
            <Link href="mailto:support@snapsite.app" className="text-cyan-500 hover:underline">
              support@snapsite.app
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
