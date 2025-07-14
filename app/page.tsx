'use client';

import { Upload } from 'lucide-react';

export default function Home() {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      console.log('File to upload:', file.name);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-cyan-100">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 to-purple-900">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-cyan-400/10 text-cyan-300 mb-6 border border-cyan-400/20">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-magenta-400 animate-pulse"></span>
            </span>
            AI-Powered Website Generation
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
            Turn Screenshots into <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">Websites</span>
          </h1>
          <p className="text-xl text-cyan-100/80 mb-8 max-w-3xl mx-auto">
            Upload a screenshot or design mockup and let our AI generate a fully responsive website for you in seconds.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              className="px-8 py-3.5 bg-cyan-500 hover:bg-magenta-500 text-white font-medium rounded-lg text-lg transition-all hover:scale-105"
              onClick={() => document.getElementById('file-upload')?.click()}
            >
              Upload Your First Design
            </button>
            <button className="px-8 py-3.5 bg-transparent text-cyan-100 hover:text-white font-medium rounded-lg text-lg border border-cyan-400/30 hover:border-cyan-200/50 transition-all">
              See How It Works
            </button>
          </div>
          
          <div className="mt-12 relative">
            <div className="relative z-20 p-1 bg-cyan-500 rounded-2xl border border-cyan-500">
              <div className="bg-background rounded-xl p-1">
                <div className="relative aspect-video w-full bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
                  <div className="relative z-10 text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-magenta-500 flex items-center justify-center">
                      <Upload className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-muted-foreground">Drag & drop your screenshot here</p>
                    <p className="text-sm text-muted-foreground/60 mt-1">or click to browse files</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input 
            type="file" 
            id="file-upload" 
            className="hidden" 
            accept="image/png, image/jpeg, image/webp"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                console.log('File selected:', e.target.files[0].name);
              }
            }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-purple-900/20" />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-cyan-100/70 max-w-2xl mx-auto text-lg">Transform your designs into production-ready code in just a few simple steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-2xl h-px bg-muted" />
            </div>
            
            {[
              {
                icon: '📷',
                title: 'Upload',
                description: 'Upload a screenshot or design mockup of your website.'
              },
              {
                icon: '✨',
                title: 'AI Magic',
                description: 'Our AI analyzes your design and generates clean, responsive code.'
              },
              {
                icon: '🚀',
                title: 'Deploy',
                description: 'Download your code or deploy directly to your favorite hosting.'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-8 relative group hover:border-cyan-400/30 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 flex items-center justify-center text-2xl mb-6 text-cyan-400 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-cyan-100/70 text-lg leading-relaxed">{feature.description}</p>
                <div className="absolute -z-10 inset-0 rounded-xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-cyan-900/90 to-purple-900/90">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-400/10 text-cyan-300 mb-6 border border-cyan-400/20">
            Ready to get started?
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Transform your screenshots into <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">websites</span>
          </h2>
          <p className="text-xl text-cyan-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of developers and designers who are already using Snapsite to turn their designs into production-ready code in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <button 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-medium rounded-lg text-lg transition-all hover:scale-105 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
              onClick={() => document.getElementById('file-upload')?.click()}
            >
              Get Started for Free
            </button>
            <button className="px-8 py-4 bg-transparent text-cyan-100 hover:text-white font-medium rounded-lg text-lg border border-cyan-400/30 hover:border-cyan-200/50 transition-all hover:bg-white/5">
              See Examples
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
