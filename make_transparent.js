const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processLogo() {
  const inputPath = path.join(__dirname, 'public', 'logo-trimmed.png');
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const output = Buffer.from(data);

  // We want to make pure white (or very near white > 248) transparent,
  // and smoothly feather near-white edges (235-255) to avoid harsh jagged halos.
  for (let i = 0; i < output.length; i += channels) {
    const r = output[i];
    const g = output[i + 1];
    const b = output[i + 2];

    // Distance from pure white
    const minVal = Math.min(r, g, b);
    
    // Check if pixel is white or near-white
    if (r > 245 && g > 245 && b > 245) {
      output[i + 3] = 0; // completely transparent
    } else if (minVal > 230) {
      // Soft transition for anti-aliasing
      const alpha = Math.round(((255 - minVal) / (255 - 230)) * 255);
      output[i + 3] = Math.min(output[i + 3], alpha);
    }
  }

  const pngBuffer = await sharp(output, {
    raw: {
      width,
      height,
      channels: 4
    }
  }).png().toBuffer();

  fs.writeFileSync(path.join(__dirname, 'public', 'logo-transparent.png'), pngBuffer);
  console.log('Saved logo-transparent.png');
}

processLogo().catch(console.error);
