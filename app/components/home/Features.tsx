import { Zap, Smartphone, Download } from 'lucide-react';

const features = [
  {
    title: 'AI-Powered',
    description: 'Our advanced AI analyzes your design and generates clean, semantic code.',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Fully Responsive',
    description: 'Get code that works perfectly on all devices and screen sizes.',
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    title: 'Export Ready',
    description: 'Download production-ready HTML, CSS, and JavaScript files.',
    icon: <Download className="w-6 h-6" />,
  },
];

export function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="bg-background/80 dark:bg-background/50 backdrop-blur-sm border border-border p-6 rounded-xl hover:shadow-lg transition-shadow hover:border-cyan-500/30"
        >
          <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500 mb-4">
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
