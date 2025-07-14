import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground flex items-center gap-1">
              © {currentYear} Snapsite. All rights reserved. Made with
              <span className="mx-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
                  <path d="m18 16 4-4-4-4"></path>
                  <path d="m6 8-4 4 4 4"></path>
                  <path d="m14.5 4-5 16"></path>
                </svg>
              </span>
              and
              <span className="mx-1 text-pink-500">❤️</span>
              by Gr1mm4g3
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
