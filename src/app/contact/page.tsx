import { Metadata } from "next";
import { Mail, MessageCircle, Shield, Phone } from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Contact Us | Trusty Escrow",
  description: "Get in touch with the Trusty Escrow team about your account or transactions.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="border-b bg-gradient-to-b from-primary/5 to-background py-14 md:py-20">
          <div className="container max-w-3xl mx-auto space-y-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-1 text-xs font-medium text-primary">
              <Shield className="h-4 w-4" />
              <span>Talk to the escrow team</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Contact Trusty Escrow
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              Whether you&apos;re stuck on a transaction, need help with a dispute, or want to
              discuss a partnership, we&apos;re here to help.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container max-w-5xl mx-auto grid gap-8 md:grid-cols-[3fr,2fr]">
            <Card>
              <CardHeader>
                <CardTitle className="text-base md:text-lg">Send us a message</CardTitle>
                <CardDescription>
                  Provide as much detail as possible, including any relevant transaction or dispute
                  IDs.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1">
                      Name
                    </label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1">
                      Email
                    </label>
                    <Input type="email" placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1">
                    Subject
                  </label>
                  <Input placeholder="Question about an escrow, payout, or dispute..." />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1">
                    Message
                  </label>
                  <Textarea rows={5} placeholder="Share details so we can help you faster." />
                </div>
                <Button className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Submit message
                </Button>
                <p className="text-[11px] text-muted-foreground">
                  This is a demo form. In a production deployment, messages would be securely sent
                  to the Trusty Escrow support team.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm md:text-base">Support channels</CardTitle>
                  <CardDescription>
                    Different ways to reach us depending on the urgency of your request.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-xs text-muted-foreground">support@trustyescrow.example</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="mt-0.5 h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">In-app messages</p>
                      <p className="text-xs text-muted-foreground">
                        Use the Help Center and your transaction threads for context-specific
                        questions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">Priority/enterprise support</p>
                      <p className="text-xs text-muted-foreground">
                        Enterprise customers receive dedicated contact details and SLAs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

