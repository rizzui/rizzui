/**
 * Converts hex color to OKLCH format
 * Algorithm based on: https://www.w3.org/TR/css-color-4/#oklab-lab
 */
export function hexToOklch(hex: string): string {
  // Remove # if present
  hex = hex.replace(/^#/, '');

  // Handle 3-digit hex codes
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('');
  }

  // Validate hex length
  if (hex.length !== 6) {
    return 'oklch(0% 0 0)'; // Return black for invalid hex
  }

  // Parse hex to RGB (0-255)
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  // Convert RGB to Linear RGB
  const linearR = r <= 0.04045 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  const linearG = g <= 0.04045 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  const linearB = b <= 0.04045 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

  // Convert Linear RGB to OKLab
  const l = 0.4122214708 * linearR + 0.5363325363 * linearG + 0.0514459929 * linearB;
  const m = 0.2119034982 * linearR + 0.6806995451 * linearG + 0.1073969566 * linearB;
  const s = 0.0883024619 * linearR + 0.2817188376 * linearG + 0.6299787005 * linearB;

  const l_ = Math.cbrt(l);
  const m_ = Math.cbrt(m);
  const s_ = Math.cbrt(s);

  const L = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_;
  const a = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_;
  const b_ = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_;

  // Convert OKLab to OKLCH
  const C = Math.sqrt(a * a + b_ * b_);
  let h = Math.atan2(b_, a) * (180 / Math.PI);
  
  // Normalize hue to 0-360
  if (h < 0) {
    h += 360;
  }

  // Format OKLCH values to match existing token format
  // L: 0-100 (as percentage with 2 decimal places)
  // C: 0-0.4 (chroma, 4 decimal places if > 0, otherwise 0)
  // H: 0-360 (hue, 2 decimal places if > 0, otherwise 0)
  const LPercent = (L * 100).toFixed(2);
  const CFormatted = C < 0.0001 ? '0' : C.toFixed(4);
  const HFormatted = h < 0.01 ? '0' : h.toFixed(2);

  return `oklch(${LPercent}% ${CFormatted} ${HFormatted})`;
}

