import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Shield, ArrowRight, DollarSign, Clock } from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pricing | Trusty Escrow",
  description: "Transparent, escrow-first pricing for secure freelance transactions.",
};

const plans = [
  {
    name: "Standard Escrow",
    badge: "Most Popular",
    description: "Ideal for one-off freelance projects and small retainers.",
    fee: "2.5%",
    details: "per successful transaction",
    features: [
      "Funds held in secure escrow until both parties approve",
      "Dispute review by our internal team",
      "Email + in-app notifications",
      "Support response within 24 hours",
    ],
    highlight: true,
  },
  {
    name: "Pro Escrow",
    badge: "Teams & Agencies",
    description: "For teams managing multiple projects and higher volumes.",
    fee: "1.8%",
    details: "custom volume pricing available",
    features: [
      "Priority dispute handling",
      "Dedicated account manager",
      "Custom approval workflows",
      "Monthly escrow statements",
    ],
    highlight: false,
  },
  {
    name: "Enterprise",
    badge: "Custom",
    description: "Tailored escrow rails for marketplaces and platforms.",
    fee: "Let’s talk",
    details: "volume-based, usage-based, or hybrid",
    features: [
      "White-label escrow experience",
      "Custom compliance requirements",
      "Dedicated success team",
      "SLA-backed support",
    ],
    highlight: false,
  },
];

const included = [
  "No monthly subscription fees to hold funds in escrow",
  "No fees on cancelled transactions before funds are released",
  "Clear visibility into what is held, released, or disputed",
  "Secure bank transfers in and out of escrow accounts",
];

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="border-b bg-gradient-to-b from-primary/5 to-background py-16 md:py-20">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-1 text-xs font-medium text-primary">
              <Shield className="h-4 w-4" />
              <span>Only pay when escrow protects you</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Simple, transparent pricing for{" "}
              <span className="text-primary">every protected transaction</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Trusty Escrow only charges when we actively protect your funds. No hidden fees,
              lock-in contracts, or surprise markups — just clear, escrow-first pricing.
            </p>
          </div>
        </section>

        <section className="py-14 md:py-18">
          <div className="container max-w-6xl mx-auto space-y-10">
            <div className="grid gap-6 md:grid-cols-3">
              {plans.map((plan) => (
                <Card
                  key={plan.name}
                  className={plan.highlight ? "border-primary shadow-lg shadow-primary/10" : ""}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <CardTitle className="text-lg">{plan.name}</CardTitle>
                      {plan.badge && (
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold">{plan.fee}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{plan.details}</p>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={plan.highlight ? "default" : "outline"} asChild>
                      <Link href="/contact">
                        Talk to sales
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-muted/40">
              <CardContent className="py-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Built for fair payouts</p>
                    <p className="text-xs text-muted-foreground">
                      We only take a fee when funds move — never for simply holding them in escrow.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Fast, predictable releases</p>
                    <p className="text-xs text-muted-foreground">
                      Clear timelines on when funds are released, refunded, or held for disputes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What&apos;s always included</CardTitle>
                <CardDescription>
                  Every transaction on Trusty Escrow is protected by the same core safeguards.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3 md:grid-cols-2 text-sm">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-12 border-t bg-muted/40">
          <div className="container max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-semibold">Need a different model?</h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              We work with marketplaces, agencies, and platforms to design escrow structures that
              match their risk, compliance, and payout needs.
            </p>
            <Button asChild>
              <Link href="/contact">
                Contact our team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

