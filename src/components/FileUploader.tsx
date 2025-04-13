import { Upload, X, RotateCw, FlipHorizontal, FlipVertical } from 'lucide-react';
import { useRef, useState } from 'react';

interface FileUploaderProps {
  file: File | null;
  preview: string;
  rotation: number;
  flipHorizontal: boolean;
  flipVertical: boolean;
  brightness: number;
  contrast: number;
  saturation: number;
  filter: string;
  filterIntensity: number;
  onFileChange: (file: File) => void;
  onClear: () => void;
  onRotationChange: (degrees: number) => void;
  onFlipHorizontal: () => void;
  onFlipVertical: () => void;
}

export function FileUploader({
  file,
  preview,
  rotation,
  flipHorizontal,
  flipVertical,
  brightness,
  contrast,
  saturation,
  filter,
  filterIntensity,
  onFileChange,
  onClear,
  onRotationChange,
  onFlipHorizontal,
  onFlipVertical
}: FileUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showOriginal, setShowOriginal] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile?.type.startsWith('image/')) {
      onFileChange(selectedFile);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile?.type.startsWith('image/')) {
      onFileChange(droppedFile);
    }
  };

  const handleContainerClick = () => {
    if (!file) {
      fileInputRef.current?.click();
    }
  };

  const getFilterStyle = () => {
    if (filter === 'none') return '';
    
    switch (filter) {
      case 'grayscale':
        return `grayscale(${filterIntensity}%)`;
      case 'sepia':
        return `sepia(${filterIntensity}%)`;
      case 'invert':
        return `invert(${filterIntensity}%)`;
      case 'blur':
        return `blur(${filterIntensity / 25}px)`;
      case 'vintage':
        return `sepia(${filterIntensity / 2}%) contrast(95%) brightness(95%)`;
      case 'cool':
        return `saturate(${100 + filterIntensity / 2}%) hue-rotate(${filterIntensity * 1.8}deg)`;
      case 'warm':
        return `saturate(${100 + filterIntensity / 2}%) hue-rotate(${-filterIntensity / 3}deg)`;
      default:
        return '';
    }
  };

  const getImageStyle = () => {
    return {
      transform: `
        rotate(${rotation}deg)
        scaleX(${flipHorizontal ? -1 : 1})
        scaleY(${flipVertical ? -1 : 1})
      `,
      filter: showOriginal ? 'none' : `
        brightness(${brightness}%)
        contrast(${contrast}%)
        saturate(${saturation}%)
        ${getFilterStyle()}
      `.trim(),
      transition: 'all 0.3s ease'
    };
  };

  return (
    <div
      ref={containerRef}
      className="border-2 border-dashed border-white/10 rounded-3xl p-6 md:p-12 mb-8 text-center bg-white/5 transition-all hover:border-primary/50 cursor-pointer"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      onClick={handleContainerClick}
    >
      {!file ? (
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="p-4 bg-gradient-to-r from-primary to-secondary rounded-2xl">
              <Upload className="w-8 h-8 text-white" />
            </div>
          </div>
          <div>
            <p className="text-xl text-white/80 mb-2">
              Drag and drop your image here
            </p>
            <p className="text-primary font-medium">
              or click anywhere to browse files
            </p>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
          </div>
        </div>
      ) : (
        <div 
          className="relative flex justify-center items-center min-h-[200px]" 
          onClick={(e) => e.stopPropagation()}
          onMouseDown={() => setShowOriginal(true)}
          onMouseUp={() => setShowOriginal(false)}
          onMouseLeave={() => setShowOriginal(false)}
          onTouchStart={() => setShowOriginal(true)}
          onTouchEnd={() => setShowOriginal(false)}
        >
          <div className="relative max-w-full max-h-[500px] overflow-hidden rounded-2xl">
            <img
              src={preview}
              alt="Preview"
              className="max-w-full max-h-[500px] object-contain rounded-2xl"
              style={getImageStyle()}
            />
            <div className="absolute bottom-4 right-4 flex gap-2 bg-black/50 backdrop-blur-sm p-2 rounded-full">
              <button
                onClick={() => onRotationChange((rotation + 90) % 360)}
                className="p-2 text-white rounded-full hover:bg-white/10 transition-colors"
                title="Rotate 90°"
              >
                <RotateCw className="w-4 h-4" />
              </button>
              <button
                onClick={onFlipHorizontal}
                className={`p-2 rounded-full transition-colors ${
                  flipHorizontal ? 'text-primary' : 'text-white'
                } hover:bg-white/10`}
                title="Flip Horizontal"
              >
                <FlipHorizontal className="w-4 h-4" />
              </button>
              <button
                onClick={onFlipVertical}
                className={`p-2 rounded-full transition-colors ${
                  flipVertical ? 'text-primary' : 'text-white'
                } hover:bg-white/10`}
                title="Flip Vertical"
              >
                <FlipVertical className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={onClear}
              className="absolute top-4 right-4 p-2 bg-red-500/90 text-white rounded-full hover:bg-red-600/90 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            {showOriginal && (
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full">
                Original Image
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}