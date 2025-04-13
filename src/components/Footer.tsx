import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="mt-24 text-center text-white/60">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border-t border-white/10 pt-8 pb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm">
              Made with ❤️ by{' '}
              <a 
                href="https://github.com/snehhens" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors"
              >
                Snehens
              </a>
            </p>
            <div className="flex gap-8 text-sm">
              <a 
                href="mailto:sneh@ovrlzy.com" 
                className="hover:text-white transition-colors"
              >
                Contact
              </a>
              <Link 
                to="/privacy" 
                className="hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link 
                to="/terms" 
                className="hover:text-white transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}