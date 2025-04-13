import { Shield } from 'lucide-react';

export function Privacy() {
  return (
    <div className="min-h-screen bg-dark">
      <main className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-white">Privacy </span>
            <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we handle your data.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-2xl">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Data Processing</h2>
            </div>
            <div className="space-y-4 text-white/60">
              <p>
                At imageops, we take your privacy seriously. Here's what you should know about how we handle your data:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All image processing happens locally in your browser</li>
                <li>We never store or transmit your images to any servers</li>
                <li>No personal information is collected or tracked</li>
                <li>No cookies are used for tracking purposes</li>
                <li>Your uploaded files remain private and are automatically cleared when you leave</li>
              </ul>
              <p>
                We designed our service with privacy in mind, ensuring that you can edit your images without 
                compromising your data security.
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <p className="text-white/60">
              If you have any questions about our privacy policy, please contact us at{' '}
              <a 
                href="mailto:sneh@ovrlzy.com"
                className="text-primary hover:text-secondary transition-colors"
              >
                sneh@ovrlzy.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 