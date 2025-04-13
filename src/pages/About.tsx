import { Github, Mail, Globe } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-dark">
      <main className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-white">About </span>
            <span className="gradient-text">imageops</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            A powerful image processing tool built with modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-white/60 mb-6">
              We believe in making professional image editing tools accessible to everyone. Our platform 
              provides powerful features while maintaining simplicity and ensuring your privacy through 
              local processing.
            </p>
            <p className="text-white/60">
              All image processing happens right in your browser - your files never leave your device. 
              No sign-up required, no data collection, just pure functionality.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Connect With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a 
                href="https://github.com/snehhens" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a 
                href="mailto:sneh@ovrlzy.com"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              <a 
                href="https://myportfolio.ovrlzy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span>Portfolio</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 