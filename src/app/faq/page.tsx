import { Metadata } from "next";
import { ChevronDown } from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "FAQ | Trusty Escrow",
  description: "Answers to common questions about how Trusty Escrow works.",
};

const faqs = [
  {
    id: "getting-started",
    category: "Getting Started",
    question: "What is Trusty Escrow?",
    answer:
      "Trusty Escrow is a neutral third party that securely holds funds between clients and freelancers until agreed conditions are met.",
  },
  {
    id: "create-transaction",
    category: "Getting Started",
    question: "How do I create my first escrow transaction?",
    answer:
      "After signing up, go to the Transactions section and click 'New Transaction'. Define the scope, milestones, and parties involved, then fund the escrow.",
  },
  {
    id: "funding-and-payouts",
    category: "Funding & Payouts",
    question: "When are funds released to the freelancer?",
    answer:
      "Funds are only released when the client marks a milestone as approved or when a dispute is resolved in favor of the freelancer.",
  },
  {
    id: "refunds",
    category: "Funding & Payouts",
    question: "Can I get a refund if the work isn’t delivered?",
    answer:
      "If the agreed work is not delivered or is significantly different from the scope, you can open a dispute. Depending on the evidence, a partial or full refund may be issued.",
  },
  {
    id: "disputes",
    category: "Disputes",
    question: "What happens when I open a dispute?",
    answer:
      "The related funds are locked while our team reviews evidence from both sides. We then make an evidence-based decision on whether to release, split, or refund funds.",
  },
  {
    id: "verification",
    category: "Security & Verification",
    question: "Why do I need to verify my identity?",
    answer:
      "Verification helps prevent fraud, protect both parties, and comply with financial regulations where applicable.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="border-b bg-gradient-to-b from-primary/5 to-background py-14 md:py-20">
          <div className="container max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              Short answers to common questions about using escrow for your freelance projects. For
              anything else, reach out to our team.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-base md:text-lg">Escrow basics</CardTitle>
                <CardDescription>
                  Understand the key concepts of protecting your payments with Trusty Escrow.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqs.map((faq) => (
                  <details key={faq.id} id={faq.id} className="group rounded-lg border bg-card/60 p-4">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-medium">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-primary mb-0.5">
                          {faq.category}
                        </p>
                        <p>{faq.question}</p>
                      </div>
                      <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="mt-3 text-sm text-muted-foreground">{faq.answer}</p>
                  </details>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base md:text-lg">Need a human answer?</CardTitle>
                <CardDescription>
                  If your situation is nuanced, we&apos;d be happy to take a closer look.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground max-w-md">
                  Include your transaction ID, the parties involved, and a short summary of what you
                  need help with.
                </p>
                <Button size="sm" asChild>
                  <a href="/contact">Contact support</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

