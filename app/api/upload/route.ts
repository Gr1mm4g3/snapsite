import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';
import { auth } from '@clerk/nextjs/server';

// This is needed to handle file uploads in Next.js 13+
export const dynamic = 'force-dynamic';

// Disable the default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper function to parse multipart form data
async function parseFormData(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file') as File | null;
  
  if (!file) {
    throw new Error('No file found in the request');
  }
  
  // Convert file to buffer
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  
  return {
    file,
    buffer,
    originalname: file.name,
    mimetype: file.type,
    size: file.size,
  };
}

export async function POST(request: Request) {
  try {
    console.log('Upload request received');
    
    // Log all headers for debugging
    const headers = Object.fromEntries(request.headers.entries());
    console.log('Request headers:', headers);
    
    // Get user ID from headers (set by middleware)
    const userId = request.headers.get('x-user-id');
    
    if (!userId) {
      console.error('No authenticated user found in headers');
      return new NextResponse(
        JSON.stringify({ 
          error: 'Authentication required',
          details: 'You must be logged in to upload files',
          authStatus: 'not_authenticated',
          headers: headers
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
    
    console.log('Authenticated user ID:', userId);
    
    console.log('Authenticated user ID:', userId);
    
    const formData = await parseFormData(request).catch(err => {
      console.error('Error parsing form data:', err);
      throw new Error('Invalid form data');
    });
    
    const { buffer, originalname, mimetype, size } = formData;
    
    // Validate file type
    if (!mimetype.startsWith('image/')) {
      return new NextResponse(
        JSON.stringify({ 
          error: 'Invalid file type',
          details: 'Only image files are allowed',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Create uploads directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), 'public/uploads');
    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true });
      console.log('Uploads directory created');
    }
    
    // Create user directory if it doesn't exist
    const userDir = path.join(uploadsDir, userId);
    if (!existsSync(userDir)) {
      await mkdir(userDir, { recursive: true });
      console.log('User directory created:', userDir);
    }
    
    // Generate a unique filename
    const timestamp = Date.now();
    const ext = path.extname(originalname);
    const filename = `${timestamp}${ext}`;
    const filePath = path.join(userDir, filename);
    
    console.log('Saving file to:', filePath);
    
    try {
      // Save the file
      await writeFile(filePath, buffer);
      
      // Create a public URL for the file
      const publicUrl = `/uploads/${userId}/${filename}`;
      
      console.log('File uploaded successfully:', publicUrl);
      
      // Generate a unique file ID (using the filename without extension as ID)
      const fileId = path.basename(filename, path.extname(filename));
      
      // Return success response with file details
      return NextResponse.json({
        success: true,
        message: 'File uploaded successfully',
        fileId: fileId, // Add fileId for the frontend
        file: {
          id: fileId,
          originalname,
          filename,
          path: filePath,
          url: publicUrl,
          size,
          mimetype,
          userId,
          uploadedAt: new Date().toISOString(),
        },
      });
      
    } catch (error) {
      console.error('Error saving file:', error);
      return new NextResponse(
        JSON.stringify({ 
          error: 'Failed to save file',
          details: error instanceof Error ? error.message : 'Unknown error',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('Upload error:', error);
    return new NextResponse(
      JSON.stringify({ 
        error: 'Upload failed',
        details: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
}

// Add this to handle preflight OPTIONS request
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
  });
}
