"use client"

import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/Footer"

export default function Windows10EndOfSupportPage() {
  return (
    <div className="min-h-screen bg-background blocks-pattern">
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/arvintech-blocks-logo.png"
                alt="ArvinTech"
                width={48}
                height={48}
                className="w-12 h-12"
                priority
              />
              <span className="text-2xl font-bold arvintech-brand">arvintech</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/support" className="text-foreground/70 hover:text-brand-green transition-colors font-medium">
                Support
              </Link>
              <Link href="/blog" className="text-brand-green font-semibold">
                Blog
              </Link>
              <Link href="/work-with-us" className="btn-green text-sm">
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-xl">
            <p className="text-sm text-orange-600 font-semibold mb-3">URGENT UPDATE</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Windows 10 End of Support</h1>
            <p className="text-foreground/70 text-lg mb-8">
              Windows 10 support ended on October 14, 2025. Systems may still run, but unsupported devices no longer
              receive regular security updates, increasing exposure to known vulnerabilities. Over time, this also
              creates operational risk as vendors reduce compatibility with older platforms, causing more failures,
              performance issues, and user friction. For many organizations, it can also introduce compliance concerns.
              The best approach is a phased Windows 11 migration: inventory devices, confirm hardware readiness, back
              up data, run a pilot group, then roll out in controlled waves with rollback plans. If devices cannot
              upgrade, replace them strategically. Acting now reduces risk, downtime, and long-term cost.
            </p>

            <div className="space-y-8 text-foreground/80 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold mb-3 text-foreground">What End of Support Means</h2>
                <p>
                  End of support means no regular security updates, bug fixes, or technical support from Microsoft.
                  Systems may continue to run, but risk grows over time as new vulnerabilities are discovered.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3 text-foreground">Suggested Migration Strategy</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Assess and segment first:</strong> inventory all devices, group them by department and
                    business criticality, then classify each endpoint as ready to upgrade, needs remediation, or
                    needs replacement.
                  </li>
                  <li>
                    <strong>Stabilize before changes:</strong> apply pending Windows 10 updates, confirm endpoint
                    security tools are healthy, and standardize backup policies so every device has a current,
                    restorable backup.
                  </li>
                  <li>
                    <strong>Run a pilot wave:</strong> migrate a small mixed group (power users, admins, and typical
                    staff) to validate compatibility with core apps, printers, VPN, line-of-business tools, and
                    authentication flows.
                  </li>
                  <li>
                    <strong>Use phased production rollout:</strong> migrate in controlled batches, preferably outside
                    peak operating hours, with a published schedule and clear owner for each phase.
                  </li>
                  <li>
                    <strong>Define fallback and escalation paths:</strong> create rollback criteria, help-desk playbooks,
                    and escalation contacts so failed upgrades can be recovered quickly with minimal downtime.
                  </li>
                  <li>
                    <strong>Validate and optimize after each wave:</strong> confirm patch compliance, security policy
                    application, user sign-in performance, and application stability before moving to the next batch.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3 text-foreground">Legacy Software Strategy</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Identify legacy dependencies early:</strong> list apps that are business-critical but not
                    officially supported on Windows 11, including old drivers, plugins, and local database tools.
                  </li>
                  <li>
                    <strong>Test compatibility in a controlled lab:</strong> validate each legacy app on Windows 11
                    pilot devices and document what works, what breaks, and what can be fixed with configuration.
                  </li>
                  <li>
                    <strong>Use containment when replacement is not immediate:</strong> isolate legacy workloads in
                    virtual machines, restricted VLANs, or tightly controlled jump-host environments.
                  </li>
                  <li>
                    <strong>Harden access controls:</strong> apply least-privilege permissions, MFA where possible,
                    strict network rules, and aggressive monitoring for legacy systems that must remain online.
                  </li>
                  <li>
                    <strong>Create a retirement roadmap:</strong> assign target dates to replace or modernize each
                    legacy application, tie owners to milestones, and avoid indefinite "temporary" exceptions.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3 text-foreground">Need Help Planning?</h2>
                <p>
                  We can help assess compatibility, back up your data, and perform upgrades with minimal downtime.
                  For older systems that cannot upgrade, we recommend buying new hardware rather than extending risky
                  legacy use. See our{" "}
                  <Link href="/support#intel-or-amd" className="text-sky-700 hover:underline font-semibold">
                    Intel or AMD decision guide
                  </Link>{" "}
                  to choose the right platform.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/support#intel-or-amd"
                className="inline-flex items-center px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-semibold text-sm hover:bg-sky-200 transition-colors"
              >
                Read Intel or AMD Guide
              </Link>
              <a
                href="https://www.amazon.com/s?k=workstation+desktop+32GB+RAM+500GB+SSD+AMD+Intel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm hover:bg-orange-200 transition-colors"
              >
                Check New PCs on Amazon
              </a>
              <a
                href="https://secure.logmein.com/pullinstall_go.asp?page=addacomputer3_pull&lang=en&c=twk9htfslmi85dguy6rtdobpimhzsqkv1tomysuf&bnf=undefined"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full bg-brand-green/10 text-brand-green font-semibold text-sm hover:bg-brand-green/20 transition-colors"
              >
                Start Remote Support
              </a>
            </div>

            <div className="mt-10 pt-6 border-t border-border">
              <Link href="/support" className="text-brand-green font-semibold hover:underline">
                Back to Support →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
