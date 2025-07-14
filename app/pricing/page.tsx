import { Check, Zap, Sparkles, Rocket } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing - Snapsite',
  description: 'Simple, transparent pricing for Snapsite. Choose the plan that fits your needs.',
};

const features = [
  'Unlimited image uploads',
  'High-quality HTML/CSS/JS output',
  'Responsive design',
  'Code export',
  'Basic support',
  '1 project',
  '10 conversions per day',
];

const proFeatures = [
  ...features,
  'Priority support',
  'Unlimited projects',
  'Unlimited conversions',
  'Team collaboration',
  'Advanced customization',
  'API access',
  'Early access to new features',
];

export default function PricingPage() {
  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-muted-foreground">
            Start for free. No credit card required. Upgrade anytime.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <div className="bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Free</h2>
                <p className="text-muted-foreground mt-1">Perfect for trying out</p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold text-foreground">$0</p>
                <p className="text-sm text-muted-foreground">forever</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="h-5 w-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Link 
              href="/sign-up"
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-cyan-500 rounded-md hover:bg-cyan-600 transition-colors"
            >
              Get started for free
            </Link>
          </div>

          {/* Pro Tier */}
          <div className="bg-gradient-to-br from-cyan-500/5 to-magenta-500/5 border border-cyan-500/30 rounded-2xl p-8 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-cyan-500 text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
              POPULAR
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Pro</h2>
                <p className="text-muted-foreground mt-1">For professionals & teams</p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold text-foreground">$19</p>
                <p className="text-sm text-muted-foreground">per month</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {proFeatures.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="h-5 w-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Link 
              href="/sign-up?plan=pro"
              className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md bg-gradient-to-r from-cyan-500 to-magenta-500 hover:from-cyan-600 hover:to-magenta-600 transition-colors"
            >
              Start 14-day free trial
            </Link>

            <p className="text-xs text-center text-muted-foreground mt-3">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Frequently asked questions</h2>
          
          <div className="space-y-6">
            {[
              {
                question: 'Is there a free trial?',
                answer: 'Yes! You can try Pro free for 14 days. No credit card required.'
              },
              {
                question: 'Can I cancel anytime?',
                answer: 'Absolutely. Cancel your subscription at any time with one click.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards and PayPal.'
              },
              {
                question: 'Do you offer team plans?',
                answer: 'Yes! Contact our sales team for custom team plans and enterprise pricing.'
              },
              {
                question: 'How does the free plan work?',
                answer: 'The free plan includes basic features with some limitations. You can upgrade anytime to unlock all features.'
              },
            ].map((item, index) => (
              <div key={index} className="border-b border-border/50 pb-6">
                <h3 className="text-lg font-medium text-foreground mb-2">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded-md border-border hover:bg-foreground/5"
            >
              <span>Contact our team</span>
              <Rocket className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
