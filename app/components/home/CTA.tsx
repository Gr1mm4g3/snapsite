export function CTA() {
  return (
    <div className="bg-gradient-to-r from-cyan-500/10 to-magenta-500/10 p-8 rounded-2xl border border-border/50">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your designs?</h2>
      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
        Join thousands of designers and developers who are already saving hours of development time.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors"
          onClick={() => document.getElementById('file-upload')?.click()}
        >
          Get Started for Free
        </button>
        <button 
          className="px-6 py-3 border border-foreground/20 hover:bg-foreground/5 text-foreground font-medium rounded-lg transition-colors"
        >
          View Demo
        </button>
      </div>
    </div>
  );
}
