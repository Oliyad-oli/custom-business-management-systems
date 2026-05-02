import { Link } from "@tanstack/react-router";
import { Briefcase, ArrowLeft } from "lucide-react";

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left: form */}
      <div className="flex flex-col px-6 py-8 sm:px-10">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Briefcase className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold tracking-tight">Flowdesk</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </div>

        <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-12">
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
          <div className="mt-8">{children}</div>
          {footer && <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div>}
        </div>

        <p className="text-center text-xs text-muted-foreground">
          © 2026 Flowdesk. All rights reserved.
        </p>
      </div>

      {/* Right: visual */}
      <div className="relative hidden overflow-hidden lg:block" style={{ background: "var(--gradient-hero)" }}>
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 20%, white, transparent 50%)" }} />
        <div className="relative flex h-full flex-col justify-between p-12 text-primary-foreground">
          <div className="text-sm opacity-90">A custom business management system</div>
          <div>
            <h2 className="text-4xl font-bold leading-tight">
              "Flowdesk cut our admin time in half and gave our team total clarity."
            </h2>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur" />
              <div>
                <div className="font-semibold">Sarah Mitchell</div>
                <div className="text-sm opacity-80">Operations Director, Bright Tech</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}