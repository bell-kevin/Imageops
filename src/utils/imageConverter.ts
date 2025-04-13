export async function convertImage(
  file: File,
  preview: string,
  fileName: string,
  extension: string,
  rotation: number,
  flipHorizontal: boolean,
  flipVertical: boolean,
  brightness: number,
  contrast: number,
  saturation: number,
  filter: string,
  filterIntensity: number
): Promise<void> {
  const canvas = document.createElement('canvas');
  const img = new Image();
  img.src = preview;
  
  await new Promise((resolve) => {
    img.onload = () => {
      // Calculate dimensions based on rotation
      const isRotated90or270 = rotation % 180 !== 0;
      const finalWidth = isRotated90or270 ? img.height : img.width;
      const finalHeight = isRotated90or270 ? img.width : img.height;
      
      canvas.width = finalWidth;
      canvas.height = finalHeight;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Clear the canvas and save state
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        
        // Move to center of canvas
        ctx.translate(canvas.width / 2, canvas.height / 2);
        
        // Apply transformations in correct order
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.scale(flipHorizontal ? -1 : 1, flipVertical ? -1 : 1);
        
        // Draw image centered
        ctx.drawImage(
          img,
          -img.width / 2,
          -img.height / 2,
          img.width,
          img.height
        );
        
        // Apply filters using a temporary canvas
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext('2d');
        
        if (tempCtx) {
          let filterString = `
            brightness(${brightness}%)
            contrast(${contrast}%)
            saturate(${saturation}%)
          `;

          // Add selected filter with intensity
          switch (filter) {
            case 'grayscale':
              filterString += ` grayscale(${filterIntensity}%)`;
              break;
            case 'sepia':
              filterString += ` sepia(${filterIntensity}%)`;
              break;
            case 'invert':
              filterString += ` invert(${filterIntensity}%)`;
              break;
            case 'blur':
              filterString += ` blur(${filterIntensity / 25}px)`;
              break;
            case 'vintage':
              filterString += ` sepia(${filterIntensity / 2}%) contrast(95%) brightness(95%)`;
              break;
            case 'cool':
              filterString += ` saturate(${100 + filterIntensity / 2}%) hue-rotate(${filterIntensity * 1.8}deg)`;
              break;
            case 'warm':
              filterString += ` saturate(${100 + filterIntensity / 2}%) hue-rotate(${-filterIntensity / 3}deg)`;
              break;
          }

          tempCtx.filter = filterString;
          tempCtx.drawImage(canvas, 0, 0);
          
          // Draw filtered image back to main canvas
          ctx.restore();
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(tempCanvas, 0, 0);
        }
        
        // Convert to SVG if needed
        if (extension === 'svg') {
          const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="${canvas.width}" height="${canvas.height}">
            <image width="100%" height="100%" href="${canvas.toDataURL('image/png')}"/>
          </svg>`;
          const blob = new Blob([svgString], { type: 'image/svg+xml' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${fileName}.svg`;
          a.click();
          URL.revokeObjectURL(url);
        } else {
          canvas.toBlob((blob) => {
            if (blob) {
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `${fileName}.${extension}`;
              a.click();
              URL.revokeObjectURL(url);
            }
          }, `image/${extension}`);
        }
      }
      resolve(null);
    };
  });
}