import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Configure which routes should be public
const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/trpc/(.*)',
  '/(.*).(jpg|jpeg|png|gif|ico|svg|css|js|woff|woff2|ttf|eot)$',
]);

// Routes that require authentication but are handled by the middleware
const protectedApiRoutes = ['/api/upload'];

// Check if the path is for a static file
const isStaticFile = (path: string) => {
  return /\.(jpg|jpeg|png|gif|ico|svg|css|js|woff|woff2|ttf|eot)$/i.test(path);
};

// This is needed to handle file uploads in Next.js 13+
export const dynamic = 'force-dynamic';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};

// Define public paths that don't require authentication
const publicPaths = [
  '/',
  '/sign-in',
  '/sign-up',
  '/api/trpc/(.*)',
  '/_next/static/(.*)',
  '/_next/image(.*)',
  '/favicon.ico',
  '/api/webhook',
];

// Define paths that should be ignored by the middleware
const ignoredPaths = [
  '/_next/static/(.*)',
  '/_next/image(.*)',
  '/favicon.ico',
  '/api/webhook',
];

// Helper function to check if a path should be ignored
function isIgnored(path: string): boolean {
  return ignoredPaths.some(ignoredPath => 
    path === ignoredPath || path.startsWith(ignoredPath.replace('(.*)', ''))
  );
}

// Helper function to check if a path is public
function isPublic(path: string): boolean {
  return publicPaths.some(publicPath => 
    path === publicPath || path.startsWith(publicPath.replace('(.*)', ''))
  );
}

// Create the middleware
export default clerkMiddleware(async (auth, request) => {
  const session = await auth();
  const userId = session?.userId;
  const path = request.nextUrl.pathname;
  
  // Log the incoming request for debugging
  console.log(`Middleware processing: ${path}`);
  
  // Skip middleware for ignored paths
  if (isIgnored(path)) {
    console.log('Path ignored by middleware:', path);
    return NextResponse.next();
  }
  
  // Handle static files and public routes
  if (isStaticFile(path) || isPublicRoute(request)) {
    console.log(`Static/Public route allowed: ${path}`);
    return NextResponse.next();
  }
  
  // Handle protected API routes
  if (protectedApiRoutes.some(route => path.startsWith(route))) {
    console.log(`Protected API route: ${path}`);
    // Continue to authentication check
  }
  
  // Handle authenticated routes
  if (!userId) {
    console.log('No user ID found in session');
    
    // For API routes, return 401
    if (path.startsWith('/api/')) {
      return new NextResponse(
        JSON.stringify({ 
          error: 'Unauthorized',
          message: 'You must be logged in to access this resource'
        }), 
        { 
          status: 401, 
          headers: { 
            'Content-Type': 'application/json',
            'WWW-Authenticate': 'Bearer'
          } 
        }
      );
    }
    
    // For pages, redirect to sign-in
    const signInUrl = new URL('/sign-in', request.url);
    signInUrl.searchParams.set('redirect_url', path);
    return NextResponse.redirect(signInUrl);
  }
  
  console.log(`User ${userId} authenticated for path: ${path}`);
  
  // For API routes, add user ID to headers
  if (path.startsWith('/api/')) {
    console.log('Adding user ID to API request headers:', userId);
    
    // Clone the request and add the header
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', userId);
    
    // Create a new response that will be passed to the API route
    const response = NextResponse.next({
      request: {
        // New request headers
        headers: requestHeaders,
      },
    });
    
    // Also set the header in the response for debugging
    response.headers.set('x-user-id', userId);
    
    console.log('Request headers after modification:', Object.fromEntries(requestHeaders.entries()));
    return response;
  }
  
  return NextResponse.next();
});
