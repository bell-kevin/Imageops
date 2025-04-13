import { Image as ImageIcon, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="p-4 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 max-w-6xl mx-auto">
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity mx-auto md:mx-0">
          <div className="bg-primary p-2 rounded-lg">
            <ImageIcon className="w-6 h-6 text-white" />
          </div>
          <span className="text-white font-bold text-2xl tracking-tight">imageops</span>
        </Link>
        
        <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="flex items-center gap-6">
            <Link to="/features" className="text-white/70 hover:text-white transition-colors">Features</Link>
            <Link to="/about" className="text-white/70 hover:text-white transition-colors">About</Link>
            <a 
              href="https://v0-file-reducer-dpgizjwkqvp.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors flex items-center gap-1"
            >
              More Tools
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
          <a 
            href="https://myportfolio.ovrlzy.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-gradient-to-r from-primary to-secondary px-6 py-2 rounded-full text-white font-medium hover:opacity-90 transition-opacity neon-glow"
          >
            Snehens
          </a>
        </nav>
      </div>
    </header>
  );
}