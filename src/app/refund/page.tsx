import { Metadata } from "next";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Refund Policy | Trusty Escrow",
  description: "Understand when and how refunds are processed for escrowed funds.",
};

export default function RefundPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 border-y bg-muted/40">
        <div className="container max-w-4xl mx-auto py-14 md:py-20">
          <header className="mb-10 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Legal</p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Refund Policy</h1>
            <p className="text-sm text-muted-foreground">
              This policy explains under what conditions funds are refunded instead of being
              released from escrow.
            </p>
          </header>

          <div className="prose prose-sm md:prose-base max-w-none prose-headings:scroll-mt-24 prose-a:text-primary">
            <section className="mb-8">
              <h2>1. Before Work Begins</h2>
              <p>
                If no work has started and both parties agree to cancel the transaction, funds may
                be fully refunded to the buyer, minus any non-refundable processing fees from
                payment partners where applicable.
              </p>
            </section>

            <section className="mb-8">
              <h2>2. After Work Has Started</h2>
              <p>
                When work has begun, any refunds are subject to the terms agreed between buyer and
                seller, the documented milestone structure, and, where applicable, the outcome of
                our dispute process.
              </p>
            </section>

            <section className="mb-8">
              <h2>3. Disputed Transactions</h2>
              <p>
                If a dispute is opened, funds remain locked until it is resolved. Depending on the
                evidence provided, a partial or full refund may be issued to the buyer, or funds may
                be released to the seller.
              </p>
            </section>

            <section className="mb-8">
              <h2>4. Processing Times</h2>
              <p>
                Once a refund is approved, we initiate the return of funds via the original payment
                method where possible. Processing times depend on banking partners and payment
                networks and are typically several business days.
              </p>
            </section>

            <section className="mb-8">
              <h2>5. Non-Refundable Fees</h2>
              <p>
                Certain third-party payment fees and currency conversion costs may be non-refundable
                or only partially refundable. These details are communicated where applicable before
                you fund an escrow.
              </p>
            </section>

            <section className="mb-8">
              <h2>6. Chargebacks</h2>
              <p>
                In the event of a chargeback initiated through a bank or card provider, we may
                provide evidence to dispute the chargeback. Your access to Trusty Escrow may be
                limited while the chargeback is investigated.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

