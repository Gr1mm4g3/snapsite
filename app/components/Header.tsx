'use client';

import { UserButton, SignInButton, SignedIn, SignedOut, SignUpButton } from '@clerk/nextjs';
import Link from 'next/link';
import { ThemeSwitcher } from './ThemeSwitcher';

export default function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Snapsite Logo" 
                className="h-8 w-auto"
                width={32}
                height={32}
              />
              <span className="ml-2 text-2xl font-bold text-cyan-500">
                Snapsite
              </span>
              <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-magenta-500/10 text-magenta-500 rounded-full">
                BETA
              </span>
            </div>
          </Link>
          <nav className="flex items-center space-x-8">
            <Link 
              href="/pricing" 
              className="text-sm font-medium text-foreground/80"
            >
              Pricing
            </Link>
            <Link 
              href="/docs" 
              className="text-sm font-medium text-foreground/80"
            >
              Docs
            </Link>
            <div className="flex items-center space-x-4">
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors px-3 py-1.5 rounded-md hover:bg-foreground/5">
                    Sign in
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="bg-cyan-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-cyan-600 transition-colors">
                    Get started
                  </button>
                </SignUpButton>
              </SignedOut>
              <ThemeSwitcher />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
