import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center">
        <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-2xl">404</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        
        <p className="text-xl text-foreground/70 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}