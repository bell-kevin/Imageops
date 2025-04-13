import { Image as ImageIcon, Wand2, FileImage, FileVideo, Download } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <FileImage className="w-8 h-8" />,
      title: "Multiple Image Formats",
      description: "Convert between popular formats including PNG, JPG, JPEG, WebP, GIF, and SVG while maintaining quality."
    },
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: "Advanced Filters",
      description: "Apply professional-grade filters and adjustments to enhance your images with real-time preview."
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Local Processing",
      description: "All image processing happens right in your browser. Your files never leave your device."
    }
  ];

  return (
    <div className="min-h-screen bg-dark">
      <main className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-white">Powerful </span>
            <span className="gradient-text">Features</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Transform your images with our powerful suite of tools. Simple, fast, and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-primary/50 transition-all"
            >
              <div className="bg-gradient-to-r from-primary to-secondary w-fit p-3 rounded-2xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 