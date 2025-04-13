import React from 'react';
import { Palette, RotateCcw } from 'lucide-react';
import ReactSlider from 'react-slider';

interface ImageFiltersProps {
  currentFilter: string;
  filterIntensity: number;
  onFilterChange: (filter: string) => void;
  onFilterIntensityChange: (intensity: number) => void;
  onReset: () => void;
}

const filters = [
  { name: 'None', value: 'none' },
  { name: 'Grayscale', value: 'grayscale' },
  { name: 'Sepia', value: 'sepia' },
  { name: 'Invert', value: 'invert' },
  { name: 'Blur', value: 'blur' },
  { name: 'Vintage', value: 'vintage' },
  { name: 'Cool', value: 'cool' },
  { name: 'Warm', value: 'warm' },
];

export function ImageFilters({ 
  currentFilter, 
  filterIntensity,
  onFilterChange, 
  onFilterIntensityChange,
  onReset 
}: ImageFiltersProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-white/80">
        <div className="flex items-center gap-2">
          <Palette className="w-5 h-5" />
          <span>Filters</span>
        </div>
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset</span>
        </button>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => {
              if (filter.value === currentFilter) {
                onFilterChange('none');
              } else {
                onFilterChange(filter.value);
              }
            }}
            className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${
              currentFilter === filter.value
                ? 'bg-gradient-to-r from-primary to-secondary text-white'
                : 'bg-white/5 text-white/80 hover:bg-white/10'
            }`}
          >
            {filter.name}
          </button>
        ))}
      </div>

      {currentFilter !== 'none' && (
        <div className="flex items-center gap-4 pt-2">
          <span className="text-white/80 text-sm">Intensity</span>
          <div className="flex-1">
            <ReactSlider
              className="h-2 bg-white/10 rounded-full"
              thumbClassName="w-4 h-4 bg-primary cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark -mt-1"
              trackClassName="track"
              value={filterIntensity}
              onChange={onFilterIntensityChange}
              min={0}
              max={100}
            />
          </div>
          <span className="text-white/80 w-8 text-right text-sm">{filterIntensity}%</span>
        </div>
      )}
    </div>
  );
}