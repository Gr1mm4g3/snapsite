'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Editor error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Something went wrong</CardTitle>
          <CardDescription>We couldn't load the editor for this image.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              {error.message || 'An unexpected error occurred while loading the editor.'}
            </p>
            {error.digest && (
              <details className="mt-2 text-sm">
                <summary className="cursor-pointer text-muted-foreground">Error details</summary>
                <pre className="mt-2 p-2 bg-muted rounded overflow-auto text-xs">
                  {error.digest}
                </pre>
              </details>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <a href="/">Back to Home</a>
          </Button>
          <Button onClick={() => reset()}>Try Again</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
