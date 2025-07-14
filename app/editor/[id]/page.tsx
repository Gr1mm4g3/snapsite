'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

type Params = {
  id: string;
};

export default function EditorPage() {
  const router = useRouter();
  const params = useParams<Params>();
  const { userId, isLoaded } = useAuth();
  const [fileUrl, setFileUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Get the file ID from params
  const fileId = params?.id;

  useEffect(() => {
    if (!isLoaded) return;
    
    // Redirect to sign-in if not authenticated
    if (!userId) {
      router.push('/sign-in');
      return;
    }
    
    if (!fileId) {
      setError('No file ID provided');
      setIsLoading(false);
      return;
    }
    
    // Validate file ID format (should be a valid timestamp)
    if (isNaN(parseInt(fileId))) {
      console.error('Invalid file ID format:', fileId);
      setError('Invalid file ID format');
      setIsLoading(false);
      return;
    }
    
    // Construct the file URL
    const filePath = `/uploads/${userId}/${fileId}.png`;
    setFileUrl(filePath);
    
    // Check if file exists by trying to load it
    const img = new window.Image();
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      console.error('File not found or access denied:', filePath);
      setError('File not found or access denied');
      setIsLoading(false);
    };
    img.src = filePath;
    
  }, [isLoaded, userId, params, router]);
  
  // Show loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p>Loading editor...</p>
        </div>
      </div>
    );
  }
  
  // Show error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>Error</CardTitle>
            <CardDescription>Unable to load the editor</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-red-500">{error}</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Preview */}
        <div className="flex-1">
          <Card>
            <CardHeader>
              <CardTitle>Image Preview</CardTitle>
              <CardDescription>Edit your uploaded image</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="relative w-full aspect-square max-h-[70vh] bg-gray-100 rounded-lg overflow-hidden">
                {fileUrl ? (
                  <Image
                    src={fileUrl}
                    alt="Uploaded content"
                    width={800}
                    height={600}
                    className="rounded-lg object-contain max-h-[70vh] w-auto"
                    priority
                    unoptimized
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = '/placeholder-image.jpg';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <p className="text-gray-500">No image available</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Editor Controls */}
        <div className="w-full md:w-80">
          <Card>
            <CardHeader>
              <CardTitle>Editor Tools</CardTitle>
              <CardDescription>Enhance your image</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Adjustments</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Brightness</span>
                    <input type="range" min="0" max="200" defaultValue="100" className="w-32" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Contrast</span>
                    <input type="range" min="0" max="200" defaultValue="100" className="w-32" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Saturation</span>
                    <input type="range" min="0" max="200" defaultValue="100" className="w-32" />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Filters</h3>
                <div className="grid grid-cols-3 gap-2">
                  {['None', 'Sepia', 'Grayscale', 'Vintage', 'Cool', 'Warm'].map((filter) => (
                    <button 
                      key={filter}
                      className="border rounded p-2 text-xs hover:bg-gray-50 transition-colors"
                      onClick={() => console.log('Apply filter:', filter.toLowerCase())}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/">Cancel</Link>
              </Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          
          {/* File Info */}
          <Card className="mt-4">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">File Information</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-1">
              <div className="text-sm text-muted-foreground">File ID: {params.id}</div>
              <div className="text-sm text-muted-foreground">
                Uploaded: {new Date(parseInt(params.id)).toLocaleString()}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
