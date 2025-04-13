import { FileText } from 'lucide-react';

export function Terms() {
  return (
    <div className="min-h-screen bg-dark">
      <main className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-white">Terms of </span>
            <span className="gradient-text">Service</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Please read these terms carefully before using our service.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-primary to-secondary p-3 rounded-2xl">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Terms & Conditions</h2>
            </div>
            <div className="space-y-6 text-white/60">
              <section>
                <h3 className="text-xl font-bold text-white mb-2">1. Service Usage</h3>
                <p>
                  By using imageops, you agree to use the service for lawful purposes only. 
                  You are responsible for any content you process through our service.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-white mb-2">2. Privacy & Security</h3>
                <p>
                  All image processing occurs locally in your browser. We do not store, transmit, 
                  or process your images on our servers. Your privacy and data security are paramount.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-white mb-2">3. Intellectual Property</h3>
                <p>
                  You retain all rights to your images. We claim no ownership over any content 
                  processed through our service.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-white mb-2">4. Service Availability</h3>
                <p>
                  While we strive to maintain high availability, we make no guarantees about 
                  the continuous availability of our service. We reserve the right to modify 
                  or discontinue the service at any time.
                </p>
              </section>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-white/60">
              If you have any questions about our terms of service, please contact us at{' '}
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