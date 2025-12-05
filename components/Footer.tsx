import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/arvintech-blocks-logo.png"
                alt="ArvinTech"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold arvintech-brand">arvintech</span>
            </Link>
            <p className="text-slate-400 text-sm mb-4">
              Building tomorrow's solutions through intelligent collaboration.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com/arvintech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com/company/arvintech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Work With Us */}
          <div>
            <h4 className="font-semibold mb-4">Work With Us</h4>
            <p className="text-slate-400 text-sm mb-3">
              You were never meant to be replaced. Join us in building the future.
            </p>
            <p className="text-slate-400 text-sm mb-2">
              <span className="text-[#00A94F] font-medium">Now Hiring:</span> Producer
            </p>
            <Link href="/work-with-us" className="text-[#00A94F] hover:underline text-sm font-medium">
              View Opportunities →
            </Link>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-slate-400 text-sm">
              <div>
                <p className="text-white font-medium">San Francisco & Bay Area</p>
                <p>785 Oak Grove Rd, Concord CA 94518</p>
              </div>
              <div>
                <p className="text-white font-medium">Portland & Pacific Northwest</p>
                <p>Park Avenue West 11th Floor, SW 9th Ave, Portland OR 97205</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} arvintech.com. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#00A94F] rounded-sm" />
            <div className="w-3 h-3 bg-[#0066B3] rounded-sm" />
            <div className="w-3 h-3 bg-[#FFC107] rounded-sm" />
            <div className="w-3 h-3 bg-[#E31937] rounded-sm" />
          </div>
        </div>
      </div>
    </footer>
  )
}
