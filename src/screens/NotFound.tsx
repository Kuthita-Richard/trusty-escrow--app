"use client";

import Link from "next/link";
import { ShieldAlert, Compass, Home, ArrowLeftRight, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-primary/5 to-background">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-3xl mx-auto">
          <Card className="border-2 border-dashed border-primary/20 shadow-lg bg-background/80 backdrop-blur">
            <CardHeader className="text-center space-y-4">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-xs font-medium text-primary mb-1">
                <ShieldAlert className="mr-2 h-4 w-4" />
                Escrow route not found
              </div>

              <div className="flex items-center justify-center gap-3">
                <span className="text-4xl font-black tracking-tighter text-primary/80">
                  4
                </span>
                <Lock className="h-10 w-10 text-primary" />
                <span className="text-4xl font-black tracking-tighter text-primary/80">
                  4
                </span>
              </div>

              <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight">
                This escrow path doesn&apos;t exist
              </CardTitle>

              <CardDescription className="text-base md:text-lg text-muted-foreground">
                The page you&apos;re looking for isn&apos;t part of this transaction. It may have
                been moved, completed, or never created. Your funds are still safe — let&apos;s get
                you back to a trusted route.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
              <div className="grid gap-4 md:grid-cols-3 text-sm">
                <div className="rounded-lg border bg-muted/40 p-4 flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wide">
                    <Compass className="h-4 w-4" />
                    Step 1
                  </div>
                  <div className="font-medium">Check your route</div>
                  <p className="text-muted-foreground">
                    Make sure the URL matches the escrow, dispute, or transaction you intended to
                    visit.
                  </p>
                </div>

                <div className="rounded-lg border bg-muted/40 p-4 flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wide">
                    <ArrowLeftRight className="h-4 w-4" />
                    Step 2
                  </div>
                  <div className="font-medium">Return to safety</div>
                  <p className="text-muted-foreground">
                    Head back to your dashboard or the home page where all your verified sessions
                    live.
                  </p>
                </div>

                <div className="rounded-lg border bg-muted/40 p-4 flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wide">
                    <ShieldAlert className="h-4 w-4" />
                    Step 3
                  </div>
                  <div className="font-medium">Start a new escrow</div>
                  <p className="text-muted-foreground">
                    Create a fresh, protected transaction so funds move only when both sides agree.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button size="lg" asChild>
                  <Link href="/">
                    <Home className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/transactions/new">
                    <ArrowLeftRight className="mr-2 h-4 w-4" />
                    Create New Escrow
                  </Link>
                </Button>
              </div>

              <p className="text-center text-xs text-muted-foreground">
                If you believe this route should exist, contact support or your escrow administrator
                with the URL and transaction details.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}

