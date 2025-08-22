// app/components/Footer.tsx
import Link from "next/link";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12.06C22 6.49 17.52 2 11.94 2S2 6.49 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H8.4v-2.9h2.04V9.86c0-2.02 1.2-3.13 3.04-3.13.88 0 1.8.16 1.8.16v1.98h-1.01c-1 0-1.31.62-1.31 1.26v1.52h2.23l-.36 2.9h-1.87V22c4.78-.8 8.44-4.94 8.44-9.94z" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 5.92c-.75.33-1.55.55-2.4.66a4.2 4.2 0 0 0 1.84-2.32 8.34 8.34 0 0 1-2.66 1.02 4.17 4.17 0 0 0-7.1 3.8A11.82 11.82 0 0 1 3.1 4.86a4.16 4.16 0 0 0 1.29 5.56c-.63-.02-1.22-.2-1.73-.48v.05a4.17 4.17 0 0 0 3.34 4.08c-.3.08-.63.12-.97.12-.23 0-.47-.02-.69-.06a4.17 4.17 0 0 0 3.89 2.89 8.37 8.37 0 0 1-5.18 1.79c-.34 0-.67-.02-1-.06A11.82 11.82 0 0 0 9 21.5c7.55 0 11.69-6.26 11.69-11.69v-.53c.8-.58 1.5-1.3 2.06-2.11z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.59c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.68H9.35V9.56h3.42v1.49h.05c.48-.9 1.65-1.85 3.39-1.85 3.63 0 4.3 2.39 4.3 5.49v5.76zM5.34 8.07a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9.56h3.56v10.89z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
      <path d="M16.8 2H7.2A5.2 5.2 0 0 0 2 7.2v9.6A5.2 5.2 0 0 0 7.2 22h9.6a5.2 5.2 0 0 0 5.2-5.2V7.2A5.2 5.2 0 0 0 16.8 2zm3.5 14.8a3.5 3.5 0 0 1-3.5 3.5H7.2a3.5 3.5 0 0 1-3.5-3.5V7.2a3.5 3.5 0 0 1 3.5-3.5h9.6a3.5 3.5 0 0 1 3.5 3.5v9.6z" />
      <circle cx="17.5" cy="6.5" r="1.1" />
    </svg>
  );
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.56 0 1 .44 1 1V20c0 .56-.44 1-1 1C11.85 21 3 12.15 3 1c0-.56.44-1 1-1h3.5c.56 0 1 .44 1 1 0 1.24.2 2.45.57 3.57.12.35.03.74-.24 1.02l-2.2 2.2z" />
    </svg>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
    </svg>
  );
}

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

export default function Footer() {
  const services = [
    "Technical SEO",
    "Content Marketing",
    "Local SEO",
    "Link Building",
    "PPC Management",
    "SEO Audits",
  ];

  const company = [
    "About Us",
    "Our Team",
    "Careers",
    "Case Studies",
    "Blog",
    "Contact",
  ];

  const resources = [
    "SEO Guide",
    "Free Tools",
    "Industry Reports",
    "Webinars",
    "FAQ",
    "Support",
  ];

  const socialLinks = [
    { icon: <FacebookIcon className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <TwitterIcon className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <LinkedinIcon className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <InstagramIcon className="h-5 w-5" />, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-semibold">OneTree SEO</span>
            </div>

            <p className="text-gray-300 leading-relaxed">
              We&apos;re a digital marketing agency specializing in SEO, helping
              businesses achieve sustainable growth and increased revenue.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MailIcon className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">hello@onetreeseo.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPinIcon className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">New York, NY</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li key={i}>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, i) => (
                <li key={i}>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    {resource}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} OneTree SEO. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
