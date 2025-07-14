'use client';

import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { CTA } from './components/home/CTA';

export default function Home() {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      console.log('File selected:', e.target.files[0].name);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      console.log('File to upload:', file.name);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero onFileChange={handleFileChange} onDrop={handleDrop} />
        <div className="max-w-4xl mx-auto px-4">
          <Features />
          <CTA />
        </div>
      </main>
    </div>
  );
}
