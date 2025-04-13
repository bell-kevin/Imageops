import { useState } from 'react';
import { Download } from 'lucide-react';
import { Header } from './components/Header';
import { FileUploader } from './components/FileUploader';
import { ConversionOptions } from './components/ConversionOptions';
import { ImageAdjustments } from './components/ImageAdjustments';
import { ImageFilters } from './components/ImageFilters';
import { Footer } from './components/Footer';
import { Features } from './pages/Features';
import { About } from './pages/About';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { convertImage } from './utils/imageConverter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function ImageEditor() {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');
  const [extension, setExtension] = useState('');
  const [preview, setPreview] = useState<string>('');
  const [rotation, setRotation] = useState(0);
  const [flipHorizontal, setFlipHorizontal] = useState(false);
  const [flipVertical, setFlipVertical] = useState(false);
  
  // Image adjustments state
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [filter, setFilter] = useState('none');
  const [filterIntensity, setFilterIntensity] = useState(100);

  const handleFileChange = (selectedFile: File) => {
    if (selectedFile?.type.startsWith('image/')) {
      setFile(selectedFile);
      setFileName(selectedFile.name.split('.')[0]);
      const originalExt = selectedFile.name.split('.').pop()?.toLowerCase() || 'png';
      setExtension(originalExt);
      setPreview(URL.createObjectURL(selectedFile));
      resetAdjustments();
    }
  };

  const resetAdjustments = () => {
    setRotation(0);
    setFlipHorizontal(false);
    setFlipVertical(false);
    setBrightness(100);
    setContrast(100);
    setSaturation(100);
    setFilter('none');
    setFilterIntensity(100);
  };

  const handleClear = () => {
    setFile(null);
    setFileName('');
    setPreview('');
    resetAdjustments();
  };

  const handleDownload = () => {
    if (!file) return;
    convertImage(
      file,
      preview,
      fileName,
      extension,
      rotation,
      flipHorizontal,
      flipVertical,
      brightness,
      contrast,
      saturation,
      filter,
      filterIntensity
    );
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-8 md:mb-16 space-y-6">
        <h1 className="text-4xl md:text-7xl font-bold mb-4 tracking-tight">
          <span className="text-white">Convert & Edit </span>
          <span className="gradient-text">Images</span>
          <br />
          <span className="text-white">in One Click</span>
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
          Transform your images with powerful editing tools. Simple, fast, and secure.
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-4 md:p-8 border border-white/10 shadow-2xl">
        <FileUploader
          file={file}
          preview={preview}
          onFileChange={handleFileChange}
          onClear={handleClear}
          rotation={rotation}
          flipHorizontal={flipHorizontal}
          flipVertical={flipVertical}
          onRotationChange={setRotation}
          onFlipHorizontal={() => setFlipHorizontal(!flipHorizontal)}
          onFlipVertical={() => setFlipVertical(!flipVertical)}
          brightness={brightness}
          contrast={contrast}
          saturation={saturation}
          filter={filter}
          filterIntensity={filterIntensity}
        />

        {file && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-8">
                <ImageAdjustments
                  brightness={brightness}
                  contrast={contrast}
                  saturation={saturation}
                  onBrightnessChange={setBrightness}
                  onContrastChange={setContrast}
                  onSaturationChange={setSaturation}
                />
                <ImageFilters
                  currentFilter={filter}
                  filterIntensity={filterIntensity}
                  onFilterChange={setFilter}
                  onFilterIntensityChange={setFilterIntensity}
                  onReset={resetAdjustments}
                />
              </div>
              <ConversionOptions
                fileName={fileName}
                extension={extension}
                onFileNameChange={setFileName}
                onExtensionChange={setExtension}
              />
            </div>

            <button
              onClick={handleDownload}
              className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 md:py-4 rounded-2xl font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 neon-glow"
            >
              <Download className="w-5 h-5" />
              <span>Download Edited Image</span>
            </button>
          </>
        )}
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark">
        <Header />
        <Routes>
          <Route path="/" element={<ImageEditor />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;