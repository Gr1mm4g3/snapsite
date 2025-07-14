import { Mail, MapPin, Phone } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Snapsite',
  description: 'Get in touch with the Snapsite team for support and inquiries.',
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-muted-foreground">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-background/80 dark:bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Send us a message</h2>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="How can we help?"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2.5 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Get in touch</h2>
            <p className="text-muted-foreground mb-6">
              Have questions about Snapsite? Fill out the form and we'll get back to you as soon as possible.
              You can also reach us through any of the channels below.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-cyan-500/10 p-3 rounded-full">
                <Mail className="w-5 h-5 text-cyan-500" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Email us</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:support@snapsite.app" className="hover:text-cyan-500 transition-colors">
                    support@snapsite.app
                  </a>
                </p>
                <p className="text-sm text-muted-foreground mt-1">We typically respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-cyan-500/10 p-3 rounded-full">
                <Phone className="w-5 h-5 text-cyan-500" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Call us</h3>
                <p className="text-muted-foreground">
                  <a href="tel:+1234567890" className="hover:text-cyan-500 transition-colors">
                    +1 (555) 123-4567
                  </a>
                </p>
                <p className="text-sm text-muted-foreground mt-1">Monday to Friday, 9am to 5pm EST</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-cyan-500/10 p-3 rounded-full">
                <MapPin className="w-5 h-5 text-cyan-500" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Visit us</h3>
                <p className="text-muted-foreground">
                  123 Tech Street<br />
                  San Francisco, CA 94107<br />
                  United States
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <h3 className="font-medium text-foreground mb-3">Follow us</h3>
            <div className="flex space-x-4">
              {[
                { name: 'Twitter', href: 'https://twitter.com/snapsite' },
                { name: 'GitHub', href: 'https://github.com/snapsite' },
                { name: 'LinkedIn', href: 'https://linkedin.com/company/snapsite' },
                { name: 'Instagram', href: 'https://instagram.com/snapsite' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-cyan-500 transition-colors"
                  aria-label={item.name}
                >
                  <span className="sr-only">{item.name}</span>
                  <div className="w-10 h-10 rounded-full bg-background/50 border border-border flex items-center justify-center hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-colors">
                    <span className="text-lg">{item.name[0]}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
