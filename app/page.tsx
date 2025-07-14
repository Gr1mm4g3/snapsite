'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { CTA } from './components/home/CTA';

type UploadState = 'idle' | 'uploading' | 'success' | 'error';

export default function Home() {
  const router = useRouter();
  const auth = useAuth();
  const { isLoaded, userId } = auth;
  
  // Use a ref to track the latest auth state
  const authRef = useRef(auth);
  useEffect(() => {
    authRef.current = auth;
    console.log('Auth state updated:', { isLoaded, userId });
  }, [auth, isLoaded, userId]);

  // Disable upload button until Clerk is fully loaded
  const isReady = isLoaded && !!userId;
  const [uploadState, setUploadState] = useState<UploadState>('idle');
  const [error, setError] = useState<string | null>(null);

  const uploadFile = useCallback(async (file: File) => {
    // Get the latest auth state from the ref
    const { isLoaded: clerkIsLoaded, userId: currentUserId } = authRef.current;
    
    console.log('Upload started, auth state:', { 
      clerkIsLoaded, 
      currentUserId,
      componentState: { isLoaded, userId }
    });

    // Check if Clerk is loaded and user is authenticated
    if (!clerkIsLoaded || !currentUserId) {
      console.error('Upload failed: Clerk not ready or user not authenticated', { 
        authState: { isLoaded: clerkIsLoaded, userId: currentUserId },
        componentState: { isLoaded, userId }
      });
      setUploadState('error');
      setError('Please wait while we verify your session...');
      return;
    }

    setUploadState('uploading');
    setError(null);
    try {
      const formData = new FormData();
      formData.append('file', file);

      // Get the auth token from Clerk
      const token = await authRef.current.getToken();
      
      console.log('Initiating file upload with token:', token ? 'token exists' : 'no token');
      
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
        credentials: 'include', // This ensures cookies are sent with the request
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Upload failed:', { status: response.status, errorData });
        throw new Error(errorData.error || 'Upload failed');
      }

      const data = await response.json();
      console.log('Upload successful:', data);
      
      // Redirect to the editor with the uploaded file
      if (data.fileId) {
        router.push(`/editor/${data.fileId}`);
      } else {
        throw new Error('No file ID returned from server');
      }
      
    } catch (err) {
      console.error('Upload error:', err);
      setUploadState('error');
      setError(err instanceof Error ? err.message : 'Failed to upload file');
      
      // Reset the file input on error
      const fileInput = document.getElementById('file-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    }
  }, []);

  const handleFileChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && isReady) {
      await uploadFile(file);
    } else if (file) {
      setError('Please wait while we finish setting up your session...');
      setUploadState('error');
    }
  }, [uploadFile, isReady]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && isReady) {
      uploadFile(file);
    } else if (file) {
      setError('Please wait while we finish setting up your session...');
      setUploadState('error');
    }
  }, [uploadFile, isReady]);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero 
          onFileChange={handleFileChange}
          onDrop={handleDrop}
          isUploading={uploadState === 'uploading'}
          error={error}
          isReady={isReady}
          isLoaded={isLoaded}
        />
        <div className="max-w-4xl mx-auto px-4">
          <Features />
          <CTA onGetStarted={handleFileChange} />
        </div>
      </main>
    </div>
  );
}
