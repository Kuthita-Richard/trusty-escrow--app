import { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Trusty Escrow",
  description: "Learn how Trusty Escrow collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 border-y bg-muted/40">
        <div className="container max-w-4xl mx-auto py-14 md:py-20">
          <header className="mb-10 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Legal</p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">
              We treat your data like we treat your funds in escrow—carefully, securely, and with
              clear controls over how it is used.
            </p>
          </header>

          <div className="prose prose-sm md:prose-base max-w-none prose-headings:scroll-mt-24 prose-a:text-primary">
            <section className="mb-8">
              <h2>1. Information We Collect</h2>
              <p>We collect information to operate Trusty Escrow safely and effectively, including:</p>
              <ul>
                <li>Account details such as your name, email address, and contact information.</li>
                <li>Verification data such as phone verification, IDs, or KYC details where required.</li>
                <li>Transaction information including amounts, milestones, and dispute history.</li>
                <li>Technical data such as device information, IP address, and usage analytics.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2>2. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul>
                <li>Create and manage your Trusty Escrow account.</li>
                <li>Hold, release, and refund funds according to your instructions.</li>
                <li>Prevent fraud, abuse, and violations of our Terms of Service.</li>
                <li>Improve our product by understanding how features are used.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2>3. Sharing &amp; Third Parties</h2>
              <p>
                We only share your information with third parties where it&apos;s necessary to
                provide the service (for example, payment processors, verification providers, or
                analytics tools), or where we are legally required to do so.
              </p>
            </section>

            <section className="mb-8">
              <h2>4. Data Security</h2>
              <p>
                We use administrative, technical, and physical safeguards to protect your data, and
                continuously review our controls. However, no online service can be completely
                secure, and you share information at your own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2>5. Your Rights</h2>
              <p>
                Depending on your location, you may have rights to access, update, or delete certain
                personal information. You can also request a copy of the data we hold about you,
                subject to applicable law.
              </p>
            </section>

            <section className="mb-8">
              <h2>6. Retention</h2>
              <p>
                We retain your data only as long as necessary to provide the service, comply with
                legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2>7. Contact</h2>
              <p>
                If you have questions about this Privacy Policy or how we handle your data, please
                contact us through the Contact page in the app.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

