import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define public routes that don't require authentication
const publicPaths = [
  '/',
  '/pricing(.*)',
  '/docs(.*)',
  '/api/uploadthing(.*)',
  '/sign-in(.*)',
  '/sign-up(.*)'
];

// Define paths that should be ignored by the middleware
const ignoredPaths = [
  '/api/uploadthing(.*)',
  '/_next/static(.*)',
  '/_next/image(.*)',
  '/favicon.ico'
];

const isPublic = (path: string) => {
  return publicPaths.some(x => 
    path.match(new RegExp(`^${x}$`.replace('*$', '($|/)')))
  );
};

const isIgnored = (path: string) => {
  return ignoredPaths.some(x => 
    path.startsWith(x.replace('(.*)', ''))
  );
};

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for ignored paths
  if (isIgnored(pathname)) {
    return NextResponse.next();
  }

  // Allow access to public paths
  if (isPublic(pathname)) {
    return NextResponse.next();
  }

  try {
    // For all other paths, require authentication
    const { userId } = await auth();
    if (!userId) {
      const signInUrl = new URL('/sign-in', request.url);
      signInUrl.searchParams.set('redirect_url', request.url);
      return NextResponse.redirect(signInUrl);
    }
  } catch (error) {
    // If there's an error with auth, redirect to sign-in
    const signInUrl = new URL('/sign-in', request.url);
    signInUrl.searchParams.set('redirect_url', request.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

// Configure which paths should be processed by the middleware
export const config = {
  matcher: [
    // Skip all internal paths (_next, static, etc.)
    '/((?!_next|static|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
