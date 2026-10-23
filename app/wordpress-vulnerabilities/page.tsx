"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function WordPressVulnerabilitiesPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/arvintech-blocks-logo.png" alt="ArvinTech" width={48} height={48} className="w-12 h-12" priority />
              <span className="text-2xl font-bold arvintech-brand">arvintech</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/about" className="text-foreground/70 hover:text-brand-blue transition-colors font-medium">About</Link>
              <Link href="/how-we-build" className="text-foreground/70 hover:text-brand-blue transition-colors font-medium">How We Build</Link>
              <Link href="/support" className="text-foreground/70 hover:text-brand-blue transition-colors font-medium">Support</Link>
              <Link href="/work-with-us" className="btn-green text-sm">Work With Us</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Cover / Hero */}
      <section className="pt-28 pb-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-red rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex flex-wrap items-center gap-3 mb-8 text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-700 pb-6">
              <span className="text-brand-blue">ArvinTech Insights</span>
              <span>·</span>
              <span>Security Briefing</span>
              <span>·</span>
              <span>WordPress Conversion</span>
              <span>·</span>
              <span className="text-brand-green">28 min read</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red/20 border border-brand-red/40 rounded-full mb-6">
              <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
              <span className="text-brand-red font-bold text-xs uppercase tracking-widest">Vulnerability Analysis</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              WordPress Vulnerabilities
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 font-light mb-8 leading-snug">
              Conversion to a static or SSR Next.js front end eliminates some vulnerability classes outright and only shrinks others. The right candidates depend on which category a site falls into.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-slate-700">
              {[
                { stat: "Most CVEs", label: "live in plugins and themes, not core" },
                { stat: "5 classes", label: "largely removed by conversion" },
                { stat: "Not all", label: "sites are conversion candidates" },
                { stat: "4 steps", label: "to triage an existing WordPress site" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-3xl font-black text-brand-yellow mb-1">{s.stat}</p>
                  <p className="text-slate-400 text-xs leading-tight uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>

            <p className="text-slate-500 text-xs mt-6 italic">
              Sources: Wordfence, Patchstack, WPScan vulnerability databases; CVE records for WordPress plugins and themes; Next.js security advisories including the 2025 middleware CVE; <span className="arvintech-brand font-semibold">arvintech</span> site conversions 2023–2026.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-10 bg-brand-blue rounded-full" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Contents</span>
          </div>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
            {[
              "The conversion thesis",
              "What a Next.js front end largely removes",
              "Plugin vulnerabilities in depth",
              "PHP runtime and file-system risk",
              "Strongest conversion candidates",
              "Weaker candidates",
              "What conversion does not fix",
              "A practical triage for existing sites",
              "Scoring checklist",
              "How we convert — and when we don't",
            ].map((item, i) => (
              <a key={i} href={`#section-${i + 1}`} className="flex items-baseline gap-3 py-2 border-b border-slate-200 hover:border-brand-blue transition-colors group">
                <span className="text-slate-400 text-xs font-mono w-6">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-slate-700 group-hover:text-brand-blue transition-colors font-medium">{item}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 1. Thesis */}
      <section id="section-1" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">01</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Thesis</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
            Conversion is not a security silver bullet. It is a surface-area decision.
          </h2>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-10 text-white mb-10">
            <p className="text-sm text-brand-yellow font-bold uppercase tracking-widest mb-3">The point</p>
            <p className="text-2xl font-semibold leading-snug mb-4">
              Moving a WordPress site to a static or SSR Next.js front end eliminates some vulnerability classes outright and only shrinks others. The best candidates depend on which category a site falls into.
            </p>
            <p className="text-slate-300 leading-relaxed">
              WordPress is not uniquely poorly written. It is uniquely exposed: a public PHP application, a public admin, a live database, and a plugin marketplace that most sites depend on. Automated scanners hammer that surface continuously. Conversion is useful when that surface is the problem — and it is the problem for a large share of brochure, marketing, and blog sites.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Eliminated", body: "Plugin/theme CVEs on the public site, wp-admin and xmlrpc.php, PHP web shells, front-end SQL injection.", accent: "border-brand-green", label: "text-brand-green" },
              { title: "Shrunk", body: "Backend risk if WordPress stays headless and locked down. Editor workflows move behind authenticated tooling.", accent: "border-brand-yellow", label: "text-brand-yellow" },
              { title: "Unchanged or new", body: "npm dependency risk, Next.js middleware and SSRF issues, forms, analytics, and third-party scripts.", accent: "border-brand-red", label: "text-brand-red" },
            ].map((card) => (
              <div key={card.title} className={`border-l-4 ${card.accent} bg-slate-50 p-6 rounded-r-xl`}>
                <p className={`${card.label} text-xs font-bold uppercase tracking-widest mb-2`}>{card.title}</p>
                <p className="text-slate-700 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. What conversion removes */}
      <section id="section-2" className="py-20 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">02</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Attack Surface</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            Vulnerabilities a static or SSR Next.js front end largely removes
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">
            These are the classes that disappear when the public site is not WordPress — not because Next.js is magically secure, but because the attack surface is no longer there.
          </p>

          <div className="space-y-6">
            {[
              {
                num: "01",
                title: "Plugin and theme flaws",
                body: "The vast majority of WordPress CVEs are in third-party plugins and themes: SQL injection, XSS, arbitrary file upload, privilege escalation, and auth bypass. A Next.js front end has no plugin layer exposed to the public. Capabilities live in explicit code and declared npm dependencies, not in a marketplace of independently maintained PHP packages.",
                href: "#section-3",
              },
              {
                num: "02",
                title: "Public wp-admin, wp-login.php, and xmlrpc.php",
                body: "Brute force, credential stuffing, and XML-RPC amplification attacks disappear when those endpoints are not on the public site. Content changes go through Cursor, Git, and a host — not through a browser login that scanners probe with credential lists around the clock.",
              },
              {
                num: "03",
                title: "PHP runtime and file-system exposure",
                body: "Web shells, malicious file uploads, and writable directories matter much less when the public site is static files or a serverless function. There is no PHP process writing into a public uploads directory on every request.",
                href: "#section-4",
              },
              {
                num: "04",
                title: "Database exposure from the front end",
                body: "SQL injection through plugin search forms, filters, and custom queries goes away when the page does not query the database at request time. A visitor reading a marketing page gets a pre-built document from the edge — not a live MySQL round-trip.",
              },
              {
                num: "05",
                title: "Abandoned plugins",
                body: "Sites running unmaintained plugins are the highest-risk group, since these never get patched. Conversion removes the entire class: there is no abandoned plugin to forget, because there is no plugin runtime on the public site.",
              },
            ].map((item) => (
              <div key={item.num} className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center shadow">
                  <span className="text-white font-black text-sm">{item.num}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{item.body}</p>
                  {"href" in item && item.href && (
                    <a href={item.href} className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-brand-blue hover:text-blue-700">
                      Deep dive
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Plugin vulnerabilities in depth */}
      <section id="section-3" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">03</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Plugins</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">Plugin vulnerabilities in depth</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">
            WordPress core is patched on a cadence that most site owners can follow. The plugin graph is not. That is where the volume, the delay, and the worst outcomes live.
          </p>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white mb-10">
            <p className="text-sm text-brand-yellow font-bold uppercase tracking-widest mb-3">Why plugins, not core</p>
            <p className="text-xl font-semibold leading-snug mb-4">
              Every plugin runs inside the same PHP process, with the same file-system rights and the same database credentials as WordPress itself.
            </p>
            <p className="text-slate-300 leading-relaxed">
              There is no sandbox. A contact-form plugin, a slider, a page builder, and a caching plugin all execute as the site. A flaw in any one of them is a flaw in the whole application. Wordfence, Patchstack, and WPScan consistently show that the large majority of published WordPress CVEs sit in third-party plugins and themes — not in WordPress core. Core is a single, well-watched codebase. The plugin directory is tens of thousands of independently written PHP packages, many of them maintained by one person, a small shop, or nobody at all.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">The classes that keep showing up</h3>
          <p className="text-slate-600 mb-6 max-w-3xl">
            These are the recurring bug families. They are listed as categories of failure, not as recipes. The operational fact is that scanners look for known instances of each class across millions of public sites the day a CVE is published.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left p-4 font-bold">Class</th>
                  <th className="text-left p-4 font-bold">What failed in the plugin</th>
                  <th className="text-left p-4 font-bold">What it usually costs the site</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["SQL injection", "User input concatenated into a database query instead of parameterized. Search forms, filters, AJAX handlers, and custom tables are the usual location.", "Read, change, or delete content and accounts. In the worst cases, dump wp_users and reset an admin."],
                  ["Cross-site scripting (XSS)", "Output not escaped. Stored XSS in a review, form, or builder widget is worse than reflected XSS because it runs for every later visitor or editor.", "Session theft, admin takeover from a logged-in editor, malware injected into pages Google then flags."],
                  ["Arbitrary file upload", "The plugin accepts a file and does not restrict type, location, or execution. Upload handlers, import tools, and \"backup restore\" features are frequent.", "A PHP file lands under a web-reachable directory. That is a foothold. Persistence usually follows."],
                  ["Missing capability / nonce checks", "An AJAX or REST action runs without verifying that the caller is allowed to do it, or without a CSRF token.", "A subscriber, or sometimes an unauthenticated visitor, performs an admin-only action: create a user, change settings, install a plugin."],
                  ["Authentication bypass", "A custom login, SSO, membership gate, or \"remember me\" handler trusts a cookie, header, or parameter it should not.", "The membership or admin boundary disappears. The rest of the site's permission model is then irrelevant."],
                  ["Privilege escalation", "A lower-privilege role can change its own role, edit options, or call an admin callback.", "Editor becomes admin. Contributor becomes editor. From there, plugin install and file edit are often one click."],
                  ["Insecure deserialization", "PHP unserialize() on data the visitor can influence. Object injection turns gadget chains in the plugin or core into unexpected code paths.", "Often remote code execution when a usable gadget exists — which is why this class is treated as critical even before a full chain is public."],
                  ["Local/remote file inclusion", "include/require built from a request parameter, or a path that can leave the intended directory.", "The PHP process loads a file the author did not intend — sometimes a remote URL on misconfigured hosts, more often a local file already written by an upload bug."],
                ].map((row, i) => (
                  <tr key={row[0]} className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50"} border-b border-slate-200 align-top`}>
                    <td className="p-4 font-bold text-slate-900 whitespace-nowrap">{row[0]}</td>
                    <td className="p-4 text-slate-700">{row[1]}</td>
                    <td className="p-4 text-slate-700">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">Why \"just update plugins\" is not a strategy</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                title: "The lag window",
                body: "A CVE is public. Exploit kits are updated the same day. The plugin author may patch in hours or in weeks. Site owners patch when they notice, when auto-update is on, or never. That gap is the operational risk — not the existence of a patch in the abstract.",
              },
              {
                title: "Abandoned plugins never patch",
                body: "No update in over a year is the highest-risk group. The author moved on, sold the plugin, or vanished. The CVE still gets a number. The site still runs the code. Auto-update cannot save a plugin that has no new release.",
              },
              {
                title: "Nulled and pirated copies",
                body: "\"Free\" premium themes and plugins are a common infection vector. The zip already contains a backdoor, a phone-home, or a hidden admin. Updates, if they exist, may reintroduce the payload. These installs should be treated as compromised until proven otherwise.",
              },
              {
                title: "Update itself can break the site",
                body: "Owners delay patches because the last update broke Elementor, WooCommerce, or a custom theme. That is rational from a business-uptime view and disastrous from a security view. The plugin model forces that tradeoff. A compiled Next.js site does not: you review a pull request, preview a URL, then deploy.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h4 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h4>
                <p className="text-slate-700 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">Architecture, not just bugs</h3>
          <div className="space-y-5 mb-10">
            {[
              {
                title: "Page builders are large PHP applications",
                body: "Elementor, Divi, WPBakery, and similar tools are not \"a plugin.\" They are full rendering engines with their own widgets, AJAX, file handling, and template language. They concentrate CVEs because they concentrate code — and they run on the public site, not behind a build step.",
              },
              {
                title: "SEO, cache, form, and backup plugins sit on every request",
                body: "These are the plugins almost every SMB site installs. They touch every page view, every form post, or the entire file system (backups). A bug in a ubiquitous plugin is a bug in a large fraction of the WordPress web, which is why they are scanned first.",
              },
              {
                title: "Themes are plugins with a different label",
                body: "A theme is PHP that renders the public site. Nulled themes, purchased-once-and-never-updated themes, and \"multipurpose\" themes with bundled plugins carry the same classes as plugins. Hiding the theme name does not hide the vulnerability; scanners fingerprint anyway.",
              },
              {
                title: "Supply chain is the plugin directory itself",
                body: "Legitimate plugins have been sold, compromised, or had a maintainer account taken over. A trusted slug can ship a bad update. WordPress auto-update then distributes it. That is a supply-chain event, not a \"forgot to patch\" event.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-brand-red bg-slate-50 p-6 rounded-r-xl">
                <p className="font-bold text-slate-900 mb-2">{item.title}</p>
                <p className="text-slate-700 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-2xl p-6">
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong className="text-brand-blue">What conversion changes:</strong> there is no public plugin runtime. A form, a slider, or SEO metadata is a component or a metadata file in a repository you own. Dependencies are declared in package.json and audited. That does not mean npm is risk-free. It means the site is no longer a marketplace of PHP packages executing with full application privilege on every visitor request.
            </p>
          </div>
        </div>
      </section>

      {/* 4. PHP runtime */}
      <section id="section-4" className="py-20 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">04</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">PHP Runtime</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">PHP runtime and file-system risk</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">
            Plugin bugs are how most incidents start. PHP and a writable web root are how they become a persistent compromise. The two are one system.
          </p>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm mb-10">
            <p className="text-brand-red text-xs font-bold uppercase tracking-widest mb-3">The runtime model</p>
            <p className="text-slate-800 text-lg font-semibold leading-snug mb-4">
              On a typical WordPress host, a public HTTP request can cause the server to execute PHP, read and write files, and talk to MySQL — in the same process, with the same user the site runs as.
            </p>
            <p className="text-slate-700 leading-relaxed">
              That is a normal application server. It is also why WordPress incidents look the way they do. Once an attacker can cause PHP to run a file they control, they do not need a new CVE every week. They have a foothold: a small PHP file in uploads or an extra admin user, used to maintain access, inject spam, or pivot. Static files and serverless functions do not offer that loop. A pre-built HTML document at the edge cannot write a new executable into the public site.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                title: "Every .php file is an entry point",
                body: "WordPress, the theme, and every plugin drop PHP files under a web-reachable tree. Scanners enumerate wp-content/plugins/, wp-admin/, xmlrpc.php, and leftover installer files. Unused plugins still expose PHP. \"Deactivated\" is not \"deleted from disk.\"",
              },
              {
                title: "wp-content/uploads is the usual persistence path",
                body: "The uploads directory must be writable for media to work. If the host also executes PHP from that directory — the default on many shared hosts — a successful upload bug becomes a web shell. Hardening (deny PHP execution in uploads) is well-known and still missing on a large share of SMB sites.",
              },
              {
                title: "Web shells are the incident, not the CVE",
                body: "Cleanup companies spend most of their time finding PHP droppers, not patching the original plugin. Files hide under cache folders, old theme copies, and randomly named uploads. If the writable directory remains, reinfection is the next scanner cycle.",
              },
              {
                title: "include, require, and path confusion",
                body: "PHP loads other PHP files by path. Plugins that build that path from a request, a cookie, or a poorly validated option can load a file the author did not intend. Combined with an upload, this is a classic two-bug chain. Neither bug looks dramatic in isolation.",
              },
              {
                title: "unserialize and dynamic evaluation",
                body: "PHP's unserialize(), extract(), eval(), and older patterns like create_function() turn attacker-controlled strings into program behavior. WordPress core has reduced its own use of these. Plugins still ship them, especially older ones copied forward for years.",
              },
              {
                title: "wp-config.php is the keys to the kingdom",
                body: "Database credentials, salts, and often third-party API keys live in wp-config.php on the server. A file-read bug, a backup zip left in the web root, a misconfigured host that serves .php as text, or a directory listing can expose it. From there the database is no longer \"behind\" the application.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 border-t-4 border-brand-red shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-4">Host and version problems that plugins sit on top of</h3>
          <div className="space-y-5 mb-10">
            {[
              {
                title: "End-of-life PHP",
                body: "A surprising number of SMB WordPress sites still run PHP versions that no longer receive security fixes. WordPress may still boot. Plugins may still \"work.\" The runtime underneath them does not get patches. That is a host problem and a plugin problem at once: old plugins often cannot move to current PHP, so the owner stays on the old runtime to keep the site up.",
              },
              {
                title: "Shared hosting and noisy neighbors",
                body: "Many WordPress sites share a machine with other customers. Weak isolation, world-writable directories, and leftover backup files are common. A compromise on an adjacent account is not a WordPress CVE — it is still a WordPress incident if the web root is writable.",
              },
              {
                title: "File permissions that make persistence easy",
                body: "Directories at 777, the web user owning the whole tree, and plugins that \"need write access to install themselves\" are the default story on cheap hosting. The plugin model assumes the application can write to itself. That assumption is convenient for auto-update and lethal after a foothold.",
              },
              {
                title: "Leftover PHP that nobody remembers",
                body: "Old copies of wp-admin, migration scripts, phpinfo files, backup zips of the whole site, and unused plugins remain after a redesign. Each is still executable or downloadable. Conversion to static output is one of the few processes that actually deletes this class, because the new public site is a build artifact, not a living directory of PHP.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-slate-200 flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 bg-brand-red rounded-full mt-2" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border-l-4 border-brand-red">
              <p className="text-brand-red text-xs font-bold uppercase tracking-widest mb-2">Still WordPress</p>
              <ul className="space-y-2 text-slate-700 text-sm">
                {[
                  "Public PHP application on every page request",
                  "Writable uploads next to executable code",
                  "Plugin ZIP can add new PHP without a review",
                  "Database credentials on the same host as the public site",
                  "Cleanup means hunting files, not rolling back a build",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-brand-red mt-0.5">×</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border-l-4 border-brand-green">
              <p className="text-brand-green text-xs font-bold uppercase tracking-widest mb-2">Static / SSR Next.js front end</p>
              <ul className="space-y-2 text-slate-700 text-sm">
                {[
                  "Public site is HTML, assets, and optional serverless functions",
                  "No PHP interpreter on the public host",
                  "No wp-content/uploads executing attacker-controlled files",
                  "Secrets in the host environment store, not a PHP config in the web root",
                  "A bad deploy rolls back to the previous Git commit",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-brand-green mt-0.5">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Strongest candidates */}
      <section id="section-5" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">05</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Candidates</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">Strongest conversion candidates</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">
            These sites get the most security benefit for the least rebuild cost. Conversion here is usually a net win on security, speed, and maintenance.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Brochure, marketing, portfolio, and blog sites",
                body: "Content that changes infrequently does not need a live PHP application assembling every page. Static or ISR delivery is a better fit, and the public attack surface collapses.",
              },
              {
                title: "Long plugin lists and a history of incidents",
                body: "Sites with a long plugin list and a history of hacks, malware cleanups, or Wordfence/Sucuri alerts. Conversion is cheaper than another cleanup cycle plus the next one.",
              },
              {
                title: "Plugins doing what a few lines of code could do",
                body: "Sliders, forms, SEO tags, caching, and page builders often exist because WordPress needs them. On Next.js those are components, metadata, and host-level caching — not extra PHP packages.",
              },
              {
                title: "Slow sites where Core Web Vitals matter",
                body: "Performance and Core Web Vitals are SEO. Pre-rendered pages on an edge network routinely beat plugin-heavy WordPress on LCP, INP, and CLS without a caching plugin stack.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-slate-50 rounded-2xl p-6 border-t-4 border-brand-green shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Weaker candidates */}
      <section id="section-6" className="py-20 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">06</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Limits</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">Weaker candidates</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">
            Conversion still reduces public attack surface. It is just a larger project — and sometimes the honest recommendation is to harden WordPress rather than rebuild it.
          </p>

          <div className="space-y-5">
            {[
              {
                title: "WooCommerce or membership sites",
                body: "Heavy plugin dependence means you would be rebuilding checkout, accounts, and subscriptions. That is a commerce project, not a front-end conversion. Keep WordPress (or move to a dedicated commerce platform) unless the business is ready to fund a rebuild of those flows.",
              },
              {
                title: "Non-technical editors on visual builders",
                body: "Sites where editors rely on the WordPress editor and page builders like Elementor or Divi. Removing the visual builder without a replacement CMS is a people problem, not a security win. Pair conversion with a CMS they can actually use — or do not convert yet.",
              },
              {
                title: "Complex custom post types, integrations, or LMS plugins",
                body: "Custom types, many third-party integrations, or learning-management plugins encode years of operational logic. Rebuilding that is a product rewrite. Security work here is usually lock-down, patching, and reducing the public plugin surface — not a full Next.js migration.",
              },
            ].map((item, i) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border-l-4 border-brand-yellow flex items-start gap-5 shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-yellow rounded-xl flex items-center justify-center shadow">
                  <span className="text-slate-900 font-black">{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. What conversion does not fix */}
      <section id="section-7" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">07</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Honesty</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">What conversion does not fix</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">
            A Next.js front end is a different attack surface, not an empty one. Selling conversion as “no more vulnerabilities” is a lie. These are the remaining and new risks.
          </p>

          <div className="space-y-6">
            {[
              {
                title: "Headless WordPress still needs patching",
                body: "If you keep WordPress as the CMS behind Next.js, the backend and its plugins still need patching. You can lock it down — private network, no public admin, WPGraphQL or REST only through the server — but abandoned plugins on the CMS are still abandoned plugins. Conversion of the public site is not conversion of the CMS.",
              },
              {
                title: "New Next.js risks",
                body: "Dependency vulnerabilities in npm packages, middleware authorization bypass issues (including the 2025 Next.js middleware CVE), SSRF through image optimization or server actions, exposed environment variables, and misconfigured API routes. These are real. They are also smaller, more inspectable, and more routinely audited than a plugin marketplace — but they require the same discipline WordPress owners skipped.",
              },
              {
                title: "Forms and third-party scripts",
                body: "Contact forms, analytics, and embeds still need spam protection and a review of what they load. Conversion does not make a leaked form-submission inbox or a compromised tag manager go away. Third-party scripts remain a supply-chain decision.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-700 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-slate-900 rounded-2xl p-8 text-white">
            <p className="text-brand-yellow text-xs font-bold uppercase tracking-widest mb-3">The honest comparison</p>
            <p className="text-slate-300 leading-relaxed">
              WordPress risk is mostly unmaintained third-party PHP on a public application. Next.js risk is mostly application code, dependencies, and configuration. One is a marketplace of unknown authors. The other is a repository you own. That is the security argument — not that the second stack cannot be broken.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Triage */}
      <section id="section-8" className="py-20 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">08</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Triage</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">A practical triage for existing sites</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">
            Four steps decide whether a WordPress site should be converted, hardened, or left alone.
          </p>

          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Scan the plugin and theme list",
                body: "Run WPScan or the Wordfence/Patchstack vulnerability databases against the plugin and theme list and version numbers. Known CVEs are not theoretical; they are often already in automated exploit kits.",
              },
              {
                step: "2",
                title: "Flag the highest-risk installs",
                body: "Known unpatched CVEs, abandoned plugins (no update in over a year), or nulled/pirated themes. These three flags alone often justify conversion or an emergency plugin cull.",
              },
              {
                step: "3",
                title: "Check content shape and editor need",
                body: "Is the content mostly static? Do editors need a visual builder? A brochure site with a developer updating copy is a conversion. A daily publisher living in Elementor is not — unless you also pick a CMS they will actually use.",
              },
              {
                step: "4",
                title: "Pick a CMS for the new stack",
                body: "Headless WordPress, Sanity, Contentful, MDX, or similar — based on that editor need. If nobody needs a visual editor, MDX in the repo is often enough. If marketing needs to ship pages without a developer, a headless CMS is the conversion, not a Git-only workflow.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-5 border border-slate-200 flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center text-white font-black text-xl">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Scoring checklist */}
      <section id="section-9" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">09</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Checklist</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">Scoring checklist</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">
            Score each row 0–2. Totals of 10 or higher usually mean convert. 5–9 means harden or convert with a CMS. Below 5 means leave WordPress and patch.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left p-4 font-bold">Factor</th>
                  <th className="text-left p-4 font-bold">0 — stay</th>
                  <th className="text-left p-4 font-bold">1 — mixed</th>
                  <th className="text-left p-4 font-bold bg-brand-blue">2 — convert</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Plugin count", "Under 8, all maintained", "8–20, mixed quality", "20+, abandoned, or nulled"],
                  ["Known CVEs", "None unpatched", "Patched but recurring alerts", "Unpatched CVEs in production"],
                  ["Incident history", "Clean", "Malware cleanup once", "Repeat hacks / Sucuri / Wordfence fires"],
                  ["Content change rate", "Daily visual editing", "Weekly in Gutenberg", "Infrequent; developer can ship it"],
                  ["Commerce / membership", "Woo, LMS, subscriptions", "Simple forms and bookings", "Brochure, portfolio, marketing, blog"],
                  ["Editor dependency", "Elementor / Divi daily", "Needs a CMS, not a builder", "No visual builder required"],
                  ["Performance / SEO", "Fast enough; caching OK", "Core Web Vitals uneven", "Slow; Vitals blocking rankings"],
                  ["Integrations / CPT complexity", "Many custom types + APIs", "A few integrations", "Standard pages and posts"],
                ].map((row, i) => (
                  <tr key={row[0]} className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50"} border-b border-slate-200`}>
                    <td className="p-4 font-bold text-slate-900 whitespace-nowrap">{row[0]}</td>
                    <td className="p-4 text-slate-700">{row[1]}</td>
                    <td className="p-4 text-slate-700">{row[2]}</td>
                    <td className="p-4 text-slate-700 bg-brand-blue/5 font-medium">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="rounded-xl border-l-4 border-brand-green bg-slate-50 p-5">
              <p className="text-brand-green text-xs font-bold uppercase tracking-widest mb-1">10–16</p>
              <p className="font-bold text-slate-900 mb-1">Convert</p>
              <p className="text-slate-700 text-sm">Static or SSR Next.js. Pick MDX or a light CMS from editor need.</p>
            </div>
            <div className="rounded-xl border-l-4 border-brand-yellow bg-slate-50 p-5">
              <p className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-1">5–9</p>
              <p className="font-bold text-slate-900 mb-1">Harden or convert with CMS</p>
              <p className="text-slate-700 text-sm">Cull plugins now. Convert if a headless CMS covers editor workflow.</p>
            </div>
            <div className="rounded-xl border-l-4 border-brand-red bg-slate-50 p-5">
              <p className="text-brand-red text-xs font-bold uppercase tracking-widest mb-1">0–4</p>
              <p className="font-bold text-slate-900 mb-1">Keep WordPress</p>
              <p className="text-slate-700 text-sm">Patch, lock down admin, remove abandoned plugins. Rebuild later if the product changes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. How we convert */}
      <section id="section-10" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-brand-blue font-mono text-sm font-bold">10</span>
            <div className="h-0.5 w-10 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest">Next Step</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">How we convert — and when we don&apos;t</h2>

          <div className="space-y-6 text-slate-300 leading-relaxed text-lg mb-10">
            <p>
              <span className="arvintech-brand font-semibold text-white">arvintech</span> still builds WordPress sites when that is the honest fit — WooCommerce, membership, or a team that lives in a visual builder. For brochure, marketing, portfolio, and blog sites with plugin risk, we convert to Next.js on Vercel because the public attack surface those sites carry is no longer justified.
            </p>
            <p className="text-white font-semibold text-xl border-l-4 border-brand-yellow pl-5 italic">
              The question is not “is WordPress insecure?” The question is whether this site still needs a public PHP application, a plugin graph, and a live database to publish pages that barely change.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/how-we-build/security"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-xl"
            >
              Next.js security deep dive
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/work-with-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors"
            >
              Score a WordPress site with us
            </Link>
          </div>

          <div className="pt-8 border-t border-slate-700">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-4">Related reading</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/how-we-build" className="text-slate-300 hover:text-white text-sm underline underline-offset-4">How we build</Link>
              <span className="text-slate-600">·</span>
              <Link href="/how-we-build/security" className="text-slate-300 hover:text-white text-sm underline underline-offset-4">Security</Link>
              <span className="text-slate-600">·</span>
              <Link href="/maintenance" className="text-slate-300 hover:text-white text-sm underline underline-offset-4">PC maintenance</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
