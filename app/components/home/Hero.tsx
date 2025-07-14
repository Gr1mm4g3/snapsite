import { Upload } from 'lucide-react';

interface HeroProps {
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDrop: (e: React.DragEvent) => void;
}

export function Hero({ onFileChange, onDrop }: HeroProps) {
  return (
    <div className="flex flex-col items-center justify-center px-4 pt-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-magenta-500 bg-clip-text text-transparent">
          Turn Your Screenshots into Stunning Websites
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Upload any design mockup and get clean, responsive HTML/CSS/JS in seconds. No coding required.
        </p>
        
        <div className="bg-background/80 dark:bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-8 mb-12 shadow-sm">
          <div 
            className="border-2 border-dashed border-border rounded-xl h-64 flex items-center justify-center bg-background/50 dark:bg-background/20"
            onDrop={onDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <div className="text-center p-6">
              <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg font-medium mb-2">Drag & drop your screenshot here</p>
              <p className="text-sm text-muted-foreground mb-4">or click to browse files</p>
              <button 
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors"
                onClick={() => document.getElementById('file-upload')?.click()}
              >
                Select File
              </button>
            </div>
          </div>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={onFileChange}
          />
        </div>
      </div>
    </div>
  );
}
