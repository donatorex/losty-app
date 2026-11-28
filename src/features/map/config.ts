const MAPTILER_KEY = process.env.EXPO_PUBLIC_MAPTILER_KEY;

const MAPTILER_STYLE_ID = 'streets-v2';

export const ALMATY_CENTER: [number, number] = [76.889709, 43.238949];
export const ALMATY_ZOOM = 11.5;

export const ALMATY_BOUNDS = {
  west: 76.75,
  south: 43.05,
  east: 77.15,
  north: 43.4,
} as const;

export const ALMATY_MAX_BOUNDS: [number, number, number, number] = [
  ALMATY_BOUNDS.west,
  ALMATY_BOUNDS.south,
  ALMATY_BOUNDS.east,
  ALMATY_BOUNDS.north,
];

export const RADIUS_PRESETS_M = [500, 1000, 3000, 5000] as const;
export type RadiusPresetM = (typeof RADIUS_PRESETS_M)[number];

export function hasMapTilerKey(): boolean {
  return typeof MAPTILER_KEY === 'string' && MAPTILER_KEY.length > 0;
}

export function getMapStyleUrl(): string {
  if (!hasMapTilerKey()) {
    throw new Error(
      'EXPO_PUBLIC_MAPTILER_KEY is missing. Add it to .env and restart the dev server.',
    );
  }

  return `https://api.maptiler.com/maps/${MAPTILER_STYLE_ID}/style.json?key=${MAPTILER_KEY}`;
}
