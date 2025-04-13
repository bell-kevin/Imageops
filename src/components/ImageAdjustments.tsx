import React from 'react';
import ReactSlider from 'react-slider';
import { SlidersHorizontal, Contrast, Sun, Droplets } from 'lucide-react';

interface ImageAdjustmentsProps {
  brightness: number;
  contrast: number;
  saturation: number;
  onBrightnessChange: (value: number) => void;
  onContrastChange: (value: number) => void;
  onSaturationChange: (value: number) => void;
}

export function ImageAdjustments({
  brightness,
  contrast,
  saturation,
  onBrightnessChange,
  onContrastChange,
  onSaturationChange,
}: ImageAdjustmentsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Sun className="w-5 h-5 text-white/80" />
        <div className="flex-1">
          <ReactSlider
            className="h-2 bg-white/10 rounded-full"
            thumbClassName="w-4 h-4 bg-primary cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark -mt-1"
            trackClassName="track"
            value={brightness}
            onChange={onBrightnessChange}
            min={0}
            max={200}
          />
        </div>
        <span className="text-white/80 w-8 text-right">{brightness}%</span>
      </div>

      <div className="flex items-center gap-4">
        <Contrast className="w-5 h-5 text-white/80" />
        <div className="flex-1">
          <ReactSlider
            className="h-2 bg-white/10 rounded-full"
            thumbClassName="w-4 h-4 bg-primary cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark -mt-1"
            trackClassName="track"
            value={contrast}
            onChange={onContrastChange}
            min={0}
            max={200}
          />
        </div>
        <span className="text-white/80 w-8 text-right">{contrast}%</span>
      </div>

      <div className="flex items-center gap-4">
        <Droplets className="w-5 h-5 text-white/80" />
        <div className="flex-1">
          <ReactSlider
            className="h-2 bg-white/10 rounded-full"
            thumbClassName="w-4 h-4 bg-primary cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark -mt-1"
            trackClassName="track"
            value={saturation}
            onChange={onSaturationChange}
            min={0}
            max={200}
          />
        </div>
        <span className="text-white/80 w-8 text-right">{saturation}%</span>
      </div>
    </div>
  );
}