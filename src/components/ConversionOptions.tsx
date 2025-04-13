interface ConversionOptionsProps {
  fileName: string;
  extension: string;
  onFileNameChange: (name: string) => void;
  onExtensionChange: (ext: string) => void;
}

export function ConversionOptions({
  fileName,
  extension,
  onFileNameChange,
  onExtensionChange,
}: ConversionOptionsProps) {
  const supportedExtensions = ['png', 'jpg', 'jpeg', 'webp', 'gif', 'svg'];

  return (
    <div className="space-y-8">
      <div>
        <label className="block text-sm font-medium text-white/80 mb-3">
          File Name
        </label>
        <input
          type="text"
          value={fileName}
          onChange={(e) => onFileNameChange(e.target.value)}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-primary focus:border-primary transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white/80 mb-3">
          Convert To
        </label>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {supportedExtensions.map((ext) => (
            <button
              key={ext}
              onClick={() => onExtensionChange(ext)}
              className={`px-2 py-2.5 rounded-xl font-medium transition-all min-w-[60px] w-full text-center ${
                extension === ext
                  ? 'bg-gradient-to-r from-primary to-secondary text-white neon-glow'
                  : 'bg-white/5 text-white/80 hover:bg-white/10 border border-white/10'
              }`}
            >
              .{ext}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}