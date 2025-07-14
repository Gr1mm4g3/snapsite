import { BookOpen, Code, Upload, Zap, Settings, MessageSquare, FileText, Image, Layout, Smartphone, Code2, Palette, Share2, Settings2 } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documentation - Snapsite',
  description: 'Learn how to use Snapsite to turn your screenshots into clean, responsive websites.',
};

const navigation = [
  { name: 'Getting Started', href: '#getting-started', icon: Zap },
  { name: 'Uploading Images', href: '#uploading-images', icon: Upload },
  { name: 'Code Generation', href: '#code-generation', icon: Code },
  { name: 'Customization', href: '#customization', icon: Settings },
  { name: 'Best Practices', href: '#best-practices', icon: BookOpen },
  { name: 'Troubleshooting', href: '#troubleshooting', icon: MessageSquare },
];

const features = [
  {
    name: 'Simple Upload',
    description: 'Drag and drop your screenshot or click to browse files.',
    icon: Upload,
  },
  {
    name: 'Clean Code',
    description: 'Get semantic, well-structured HTML/CSS/JS code.',
    icon: Code2,
  },
  {
    name: 'Responsive Design',
    description: 'Automatically generated responsive layouts for all devices.',
    icon: Smartphone,
  },
  {
    name: 'Customization',
    description: 'Easily customize the generated code to fit your needs.',
    icon: Settings2,
  },
];

const faqs = [
  {
    question: 'What image formats are supported?',
    answer: 'We support JPG, PNG, and WebP image formats.',
  },
  {
    question: 'Is there a file size limit?',
    answer: 'Free accounts can upload images up to 10MB. Pro accounts have a 50MB limit.',
  },
  {
    question: 'Can I edit the generated code?',
    answer: 'Yes! The code is fully editable after generation.',
  },
  {
    question: 'How accurate is the code generation?',
    answer: 'Our AI provides highly accurate code that closely matches your design.',
  },
];

export default function DocsPage() {
  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-200 mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Documentation
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Snapsite Documentation
          </h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about turning your screenshots into beautiful, responsive websites.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1 mb-8 lg:mb-0">
            <nav className="space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-foreground/5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-16">
            {/* Getting Started */}
            <section id="getting-started" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <Zap className="w-6 h-6 mr-2 text-cyan-500" />
                Getting Started
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground mb-6">
                  Welcome to Snapsite! This guide will help you get started with converting your screenshots into clean, responsive websites.
                </p>
                
                <div className="grid gap-6 sm:grid-cols-2 mt-8">
                  {features.map((feature) => (
                    <div key={feature.name} className="bg-background/50 border border-border rounded-xl p-6">
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-500 mb-4">
                        <feature.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-medium text-foreground mb-2">{feature.name}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Uploading Images */}
            <section id="uploading-images" className="scroll-mt-24 pt-8 border-t border-border">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <Upload className="w-6 h-6 mr-2 text-cyan-500" />
                Uploading Images
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground mb-4">
                  Follow these steps to upload your screenshot:
                </p>
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-muted-foreground">
                    <span className="font-medium text-foreground">Prepare your screenshot</span>
                    <p className="mt-1 text-muted-foreground">Take a clear screenshot of the design you want to convert.</p>
                  </li>
                  <li className="text-muted-foreground">
                    <span className="font-medium text-foreground">Upload the image</span>
                    <p className="mt-1 text-muted-foreground">Drag and drop your image or click to browse your files.</p>
                  </li>
                  <li className="text-muted-foreground">
                    <span className="font-medium text-foreground">Wait for processing</span>
                    <p className="mt-1 text-muted-foreground">Our AI will analyze your image and generate the code.</p>
                  </li>
                </ol>

                <div className="mt-8 p-6 bg-foreground/5 border border-border rounded-xl">
                  <h4 className="font-medium text-foreground mb-2 flex items-center">
                    <Image className="w-5 h-5 mr-2 text-cyan-500" />
                    Image Guidelines
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Use high-quality screenshots for best results</li>
                    <li>Ensure good contrast between elements</li>
                    <li>Avoid blurry or low-resolution images</li>
                    <li>Maximum file size: 10MB (Free) / 50MB (Pro)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Code Generation */}
            <section id="code-generation" className="scroll-mt-24 pt-8 border-t border-border">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <Code className="w-6 h-6 mr-2 text-cyan-500" />
                Code Generation
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground mb-4">
                  Our AI analyzes your screenshot and generates clean, semantic HTML, CSS, and JavaScript code.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Generated Code Structure</h3>
                <div className="bg-background border border-border rounded-lg overflow-hidden mb-6">
                  <div className="px-4 py-3 border-b border-border bg-foreground/5 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-3 text-sm font-mono text-muted-foreground">index.html</span>
                  </div>
                  <pre className="p-4 overflow-x-auto text-sm">
                    <code className="language-html">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generated by Snapsite</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <header class="header">
      <!-- Your header content -->
    </header>
    <main>
      <!-- Your main content -->
    </main>
    <footer class="footer">
      <!-- Your footer content -->
    </footer>
  </div>
  <script src="script.js"></script>
</body>
</html>`}
                    </code>
                  </pre>
                </div>

                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Customizing the Output</h3>
                <p className="text-muted-foreground mb-4">
                  After generation, you can easily customize the code to match your exact needs. The code is structured for readability and maintainability.
                </p>
              </div>
            </section>

            {/* Customization */}
            <section id="customization" className="scroll-mt-24 pt-8 border-t border-border">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <Settings className="w-6 h-6 mr-2 text-cyan-500" />
                Customization
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground mb-6">
                  Customize the generated code to perfectly match your design requirements.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">Available Options</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { name: 'Color Scheme', icon: Palette },
                    { name: 'Layout', icon: Layout },
                    { name: 'Typography', icon: FileText },
                    { name: 'Export Options', icon: Share2 },
                  ].map((item) => (
                    <div key={item.name} className="flex items-start p-4 border border-border rounded-lg">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-500 mr-4">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">Customize the {item.name.toLowerCase()} of your generated code</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Best Practices */}
            <section id="best-practices" className="scroll-mt-24 pt-8 border-t border-border">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-2 text-cyan-500" />
                Best Practices
              </h2>
              <div className="prose prose-invert max-w-none">
                <h3 className="text-xl font-semibold text-foreground mb-4">For Best Results</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Use high-contrast, well-lit screenshots</li>
                  <li>Keep text in your designs clear and legible</li>
                  <li>Use standard web fonts for better accuracy</li>
                  <li>Keep your design simple and clean for best results</li>
                  <li>Test the generated code on multiple devices</li>
                </ul>
              </div>
            </section>

            {/* Troubleshooting */}
            <section id="troubleshooting" className="scroll-mt-24 pt-8 border-t border-border">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 mr-2 text-cyan-500" />
                Troubleshooting
              </h2>
              <div className="prose prose-invert max-w-none">
                <h3 className="text-xl font-semibold text-foreground mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border/50 pb-6">
                      <h4 className="text-lg font-medium text-foreground">{faq.question}</h4>
                      <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 bg-foreground/5 border border-border rounded-xl p-6">
                  <h4 className="text-lg font-medium text-foreground mb-2">Need more help?</h4>
                  <p className="text-muted-foreground mb-4">
                    If you can't find what you're looking for, our support team is here to help.
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
