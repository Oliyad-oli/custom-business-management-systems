import {
  ArrowRight,
  LayoutDashboard,
  Users,
  ListChecks,
  Activity,
  Sparkles,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  CheckCircle2,
  Clock,
  Loader2,
  Search,
  Bell,
  Settings,
  Briefcase,
  FileText,
  Calendar,
  CreditCard,
  BarChart3,
  MessageSquare,
  Bot,
  Plug,
  Lock,
  FileBarChart,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <ExtraFeatures />
        <DashboardPreview />
        <Workflow />
        <Pricing />
        <FAQ />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#features", label: "Features" },
    { href: "#preview", label: "Dashboard" },
    { href: "#workflow", label: "Workflow" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Briefcase className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight">Flowdesk</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild size="sm" variant="ghost">
            <Link to="/login">Sign in</Link>
          </Button>
          <Button asChild size="sm" className="shadow-sm" style={{ background: "var(--gradient-primary)" }}>
            <Link to="/signup">
              Get started
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <button
          className="md:hidden rounded-md border border-border p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex gap-2">
              <Button asChild size="sm" variant="outline" className="flex-1">
                <Link to="/login">Sign in</Link>
              </Button>
              <Button asChild size="sm" className="flex-1" style={{ background: "var(--gradient-primary)" }}>
                <Link to="/signup">Get started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 text-center md:pt-28 md:pb-32">
        <Badge
          variant="secondary"
          className="mb-6 gap-1.5 border border-primary/20 bg-primary/5 px-3 py-1 text-primary"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Custom Business Management System
        </Badge>
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          Run your business from{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            one beautiful dashboard
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          A scalable web platform that streamlines daily operations — track jobs,
          manage customers, and monitor team performance in real time.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 px-8 text-base shadow-lg"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-elegant)" }}
          >
            <Link to="/signup">
              Start free trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base">
            <a href="#preview">View live demo</a>
          </Button>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          {["Built for scale", "Mobile-ready", "Secure by default", "Maintainable code"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-success" />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const stats = [
    { v: "40+", l: "Custom systems shipped" },
    { v: "99.9%", l: "Uptime delivered" },
    { v: "3×", l: "Faster operations" },
    { v: "24/7", l: "Support & monitoring" },
  ];
  return (
    <section className="border-y border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="text-3xl font-bold tracking-tight md:text-4xl">{s.v}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: ListChecks,
      title: "Job & Task Tracking",
      desc: "Assign, prioritize, and track every job from intake to completion with full audit history.",
    },
    {
      icon: Users,
      title: "Customer Management",
      desc: "A unified CRM-style record of every client, contact, conversation, and job history.",
    },
    {
      icon: Activity,
      title: "Smart Status Updates",
      desc: "Pending, In Progress, Completed and custom workflows — synced across the whole team.",
    },
    {
      icon: LayoutDashboard,
      title: "Insightful Dashboard",
      desc: "Live KPIs, performance trends, and bottleneck alerts in a single executive view.",
    },
    {
      icon: Smartphone,
      title: "Responsive UI",
      desc: "Pixel-perfect experience on desktop, tablet, and mobile — work happens anywhere.",
    },
    {
      icon: ShieldCheck,
      title: "Built to Scale",
      desc: "Modular architecture, role-based access, and clean APIs ready for tomorrow's growth.",
    },
  ];
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <Badge variant="outline" className="mb-4">Core Features</Badge>
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Everything your team needs, nothing they don't
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Each module is purpose-built around how your business actually operates.
        </p>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/30"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div
              className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <section id="preview" className="relative overflow-hidden border-y border-border/60 bg-secondary/30 py-24">
      <div
        className="pointer-events-none absolute -top-20 right-0 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">Live Preview</Badge>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            A dashboard your team will love
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Clean, intuitive, and fast — designed around real workflows.
          </p>
        </div>

        <div
          className="relative mx-auto mt-16 overflow-hidden rounded-2xl border border-border bg-card"
          style={{ boxShadow: "var(--shadow-elegant)" }}
        >
          {/* Mock browser chrome */}
          <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-destructive/70" />
              <div className="h-3 w-3 rounded-full bg-warning" />
              <div className="h-3 w-3 rounded-full bg-success" />
            </div>
            <div className="ml-4 flex flex-1 items-center justify-center">
              <div className="rounded-md bg-background px-4 py-1 text-xs text-muted-foreground">
                app.flowdesk.com/dashboard
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12">
            {/* Sidebar */}
            <aside className="col-span-3 hidden border-r border-border bg-background/60 p-4 md:block">
              <div className="mb-6 flex items-center gap-2">
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-md"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Briefcase className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="text-sm font-bold">Flowdesk</span>
              </div>
              <nav className="space-y-1 text-sm">
                {[
                  { i: LayoutDashboard, l: "Dashboard", a: true },
                  { i: ListChecks, l: "Jobs" },
                  { i: Users, l: "Customers" },
                  { i: Activity, l: "Reports" },
                  { i: Settings, l: "Settings" },
                ].map((n) => (
                  <div
                    key={n.l}
                    className={`flex items-center gap-2.5 rounded-lg px-3 py-2 ${
                      n.a
                        ? "bg-primary/10 font-medium text-primary"
                        : "text-muted-foreground hover:bg-muted/60"
                    }`}
                  >
                    <n.i className="h-4 w-4" />
                    {n.l}
                  </div>
                ))}
              </nav>
            </aside>

            {/* Main */}
            <div className="col-span-12 p-5 md:col-span-9 md:p-7">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">Good morning, Alex 👋</h3>
                  <p className="text-xs text-muted-foreground">Here's what's happening today.</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="hidden items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground md:flex">
                    <Search className="h-3.5 w-3.5" />
                    Search jobs, clients…
                  </div>
                  <div className="rounded-lg border border-border bg-background p-1.5">
                    <Bell className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>

              {/* KPI cards */}
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {[
                  { i: ListChecks, l: "Active Jobs", v: "128", d: "+12%", c: "text-primary" },
                  { i: CheckCircle2, l: "Completed", v: "342", d: "+8%", c: "text-success" },
                  { i: Users, l: "Customers", v: "1,204", d: "+24", c: "text-accent" },
                  { i: TrendingUp, l: "Revenue", v: "$48.2k", d: "+18%", c: "text-warning" },
                ].map((k) => (
                  <div key={k.l} className="rounded-xl border border-border bg-background p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{k.l}</span>
                      <k.i className={`h-4 w-4 ${k.c}`} />
                    </div>
                    <div className="mt-2 text-2xl font-bold">{k.v}</div>
                    <div className="text-xs text-success">{k.d} this week</div>
                  </div>
                ))}
              </div>

              {/* Jobs + Chart */}
              <div className="mt-5 grid gap-4 lg:grid-cols-5">
                <div className="rounded-xl border border-border bg-background p-5 lg:col-span-3">
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="text-sm font-semibold">Recent Jobs</h4>
                    <span className="text-xs text-primary">View all</span>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { n: "Website redesign", c: "Acme Corp", s: "in", t: "In Progress" },
                      { n: "HVAC installation", c: "Riverside Hotel", s: "done", t: "Completed" },
                      { n: "Quarterly audit", c: "Bright Tech", s: "pending", t: "Pending" },
                      { n: "Marketing campaign", c: "Bloom Studio", s: "in", t: "In Progress" },
                    ].map((j) => (
                      <div key={j.n} className="flex items-center justify-between rounded-lg border border-border/60 px-3 py-2.5">
                        <div>
                          <div className="text-sm font-medium">{j.n}</div>
                          <div className="text-xs text-muted-foreground">{j.c}</div>
                        </div>
                        <StatusPill status={j.s as "in" | "done" | "pending"} label={j.t} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-background p-5 lg:col-span-2">
                  <h4 className="mb-4 text-sm font-semibold">Performance</h4>
                  <MiniChart />
                  <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <div className="text-muted-foreground">Avg. completion</div>
                      <div className="text-base font-bold">2.4 days</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">On-time rate</div>
                      <div className="text-base font-bold text-success">94%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusPill({ status, label }: { status: "in" | "done" | "pending"; label: string }) {
  const map = {
    in: { c: "bg-primary/10 text-primary border-primary/20", i: Loader2 },
    done: { c: "bg-success/10 text-success border-success/20", i: CheckCircle2 },
    pending: { c: "bg-warning/10 text-warning border-warning/30", i: Clock },
  } as const;
  const { c, i: Icon } = map[status];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${c}`}>
      <Icon className="h-3 w-3" />
      {label}
    </span>
  );
}

function MiniChart() {
  const bars = [40, 65, 50, 78, 60, 88, 72];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <div className="flex h-32 items-end gap-2">
      {bars.map((h, i) => (
        <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
          <div
            className="w-full rounded-t-md transition-all"
            style={{
              height: `${h}%`,
              background: "var(--gradient-primary)",
              opacity: 0.4 + (h / 100) * 0.6,
            }}
          />
          <span className="text-[10px] text-muted-foreground">{days[i]}</span>
        </div>
      ))}
    </div>
  );
}

function Workflow() {
  const steps = [
    { n: "01", t: "Discovery", d: "We map your operations, pain points, and goals." },
    { n: "02", t: "Design", d: "Wireframes and a clean UI tailored to your team." },
    { n: "03", t: "Build", d: "Scalable architecture, clean code, weekly demos." },
    { n: "04", t: "Launch & Grow", d: "Deploy, train your team, and iterate." },
  ];
  return (
    <section id="workflow" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <Badge variant="outline" className="mb-4">Our Process</Badge>
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">From idea to launch in weeks</h2>
        <p className="mt-4 text-lg text-muted-foreground">A transparent, milestone-driven workflow.</p>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="relative rounded-2xl border border-border/60 bg-card p-6">
            <div
              className="text-sm font-bold text-transparent bg-clip-text"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              STEP {s.n}
            </div>
            <h3 className="mt-2 text-xl font-semibold">{s.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    "Proven experience with custom business systems & CRMs",
    "Scalable architecture built for long-term growth",
    "Clean, maintainable code with full documentation",
    "Reliable delivery with clear, frequent communication",
    "Mobile-first, accessible UI your team will actually use",
    "Post-launch support, training, and iteration included",
  ];
  return (
    <section id="why" className="border-y border-border/60 bg-secondary/30 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <Badge variant="outline" className="mb-4">Why partner with us</Badge>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Reliable delivery. Beautiful results.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We've built dozens of bespoke systems for growing businesses. We treat
            your operations like our own — focused on outcomes, not just code.
          </p>
        </div>
        <ul className="space-y-3">
          {points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4"
            >
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full" style={{ background: "var(--gradient-primary)" }}>
                <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div
        className="relative overflow-hidden rounded-3xl px-8 py-16 text-center text-primary-foreground md:px-16 md:py-20"
        style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 30% 20%, white, transparent 50%)" }} />
        <div className="relative">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Ready to streamline your operations?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">
            Let's build the management system your business deserves. Get a free
            scoping session and a tailored proposal within 48 hours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" variant="secondary" className="h-12 px-8 text-base font-semibold">
              Get your proposal
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 border-white/30 bg-white/10 px-8 text-base text-primary-foreground hover:bg-white/20 hover:text-primary-foreground">
              Schedule a call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md" style={{ background: "var(--gradient-primary)" }}>
            <Briefcase className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-sm font-semibold">Flowdesk</span>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 Flowdesk. Custom business management systems, built to scale.</p>
      </div>
    </footer>
  );
}