import { Metadata } from "next";
import Link from "next/link";
import { Search, Shield, Wallet, MessageCircle, AlertTriangle, FileText } from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Help Center | Trusty Escrow",
  description: "Find answers to common questions about using Trusty Escrow.",
};

const topics = [
  {
    icon: Shield,
    title: "Getting Started with Escrow",
    description: "Create your first protected transaction in a few simple steps.",
    href: "/faq#getting-started",
  },
  {
    icon: Wallet,
    title: "Funding & Payouts",
    description: "How deposits, releases, and refunds work on Trusty Escrow.",
    href: "/faq#funding-and-payouts",
  },
  {
    icon: AlertTriangle,
    title: "Disputes & Resolutions",
    description: "What to do when something goes wrong and how we help.",
    href: "/faq#disputes",
  },
  {
    icon: FileText,
    title: "Legal & Compliance",
    description: "Learn about our terms, privacy, and risk policies.",
    href: "/terms",
  },
];

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="border-b bg-gradient-to-b from-primary/5 to-background py-14 md:py-20">
          <div className="container max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-1 text-xs font-medium text-primary">
              <Search className="h-4 w-4" />
              <span>Help Center</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              How can we help you with your escrow?
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              Browse popular topics or reach out to support if you&apos;re stuck on a specific
              transaction, payout, or dispute.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container max-w-5xl mx-auto space-y-10">
            <div className="grid gap-6 md:grid-cols-2">
              {topics.map((topic) => (
                <Card key={topic.title} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-primary/10">
                        <topic.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-base md:text-lg">{topic.title}</CardTitle>
                    </div>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={topic.href}>View details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-base md:text-lg">Still need help?</CardTitle>
                <CardDescription>
                  If your question is about a specific escrow, include the transaction ID so we can
                  help faster.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-primary/10">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Contact our support team</p>
                    <p className="text-xs text-muted-foreground">
                      We typically respond within one business day for standard inquiries.
                    </p>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/contact">Contact support</Link>
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

