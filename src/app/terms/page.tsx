import { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Trusty Escrow",
  description: "Understand the rules that govern how Trusty Escrow protects buyers and sellers.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 border-y bg-muted/40">
        <div className="container max-w-4xl mx-auto py-14 md:py-20">
          <header className="mb-10 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Legal</p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Terms of Service</h1>
            <p className="text-sm text-muted-foreground">
              These terms explain how Trusty Escrow works, what you can expect from us, and what we
              expect from you as a buyer or seller using our escrow rails.
            </p>
          </header>

          <div className="prose prose-sm md:prose-base max-w-none prose-headings:scroll-mt-24 prose-a:text-primary">
            <section id="overview" className="mb-8">
              <h2>1. Overview</h2>
              <p>
                Trusty Escrow is a neutral third party that holds funds on behalf of two or more
                parties until agreed conditions are met. By using our platform, you agree to these
                Terms of Service and our Privacy Policy.
              </p>
            </section>

            <section id="roles" className="mb-8">
              <h2>2. Roles &amp; Responsibilities</h2>
              <h3>2.1 Buyers (Clients)</h3>
              <p>
                As a buyer, you are responsible for funding escrow, clearly describing the scope of
                work, and approving or disputing milestones in a timely manner.
              </p>
              <h3>2.2 Sellers (Freelancers)</h3>
              <p>
                As a seller, you agree to deliver work according to the agreed scope, timelines, and
                quality standards. You must keep communication and delivery evidence within the
                channels documented for potential dispute review.
              </p>
              <h3>2.3 Trusty Escrow</h3>
              <p>
                We safeguard funds, provide tools for milestone tracking, and apply our internal
                dispute framework when disagreements arise. We are not a party to the underlying
                service contract between buyer and seller.
              </p>
            </section>

            <section id="escrow-lifecycle" className="mb-8">
              <h2>3. Escrow Lifecycle</h2>
              <p>The typical lifecycle of an escrow on Trusty Escrow is:</p>
              <ol>
                <li>Buyer creates a transaction with agreed terms and milestones.</li>
                <li>Buyer funds the escrow via supported payment methods.</li>
                <li>Seller delivers work and marks milestones as complete.</li>
                <li>Buyer approves, requests changes, or opens a dispute.</li>
                <li>
                  Once approved, funds are released to the seller; if cancelled or refunded, funds
                  are returned to the buyer where possible.
                </li>
              </ol>
            </section>

            <section id="disputes" className="mb-8">
              <h2>4. Disputes</h2>
              <p>
                When a dispute is opened, funds related to the disputed milestone are locked until a
                resolution is reached. Our team may request additional evidence from both sides,
                including messages, files, and delivery logs.
              </p>
              <p>
                Our dispute decisions aim to be fair and evidence-based, but by using the platform
                you acknowledge that our decision is final within the limits of our platform and
                payment partners.
              </p>
            </section>

            <section id="fees" className="mb-8">
              <h2>5. Fees</h2>
              <p>
                Platform and processing fees are communicated transparently before you fund escrow.
                By using Trusty Escrow, you agree to the fees shown for each transaction as
                described on our Pricing page.
              </p>
            </section>

            <section id="prohibited" className="mb-8">
              <h2>6. Prohibited Use</h2>
              <p>
                You may not use Trusty Escrow for illegal activities, money laundering, or for
                services that violate local laws, platform policies, or our risk guidelines.
              </p>
            </section>

            <section id="changes" className="mb-8">
              <h2>7. Changes to these Terms</h2>
              <p>
                We may update these Terms from time to time. When we do, we will update the “Last
                updated” date and, where appropriate, provide additional notice within the
                application.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

