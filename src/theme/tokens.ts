export const palette = {
  brand: {
    '100': '#FDE4DB',
    '500': '#F66C46',
    '600': '#E85E38',
  },
  ink: {
    '400': '#9A9488',
    '600': '#6B665D',
    '900': '#1B1A17',
  },
  paper: {
    '0': '#FFFFFF',
    '50': '#FBFAF7',
    '100': '#F3EFE7',
    '200': '#E9E3D6',
    line: '#E7E1D5',
  },
  status: {
    lost: '#F66C46',
    found: '#22A06B',
    seen: '#2F6FED',
  },
  map: {
    ground: '#EFE9DD',
    block: '#E6DECD',
    road: '#FFFDF8',
    roadEdge: '#DCD4C2',
    park: '#D6E7C4',
    water: '#AED2EE',
  },
  glass: {
    bg: 'rgba(255,253,248,.76)',
    line: 'rgba(255,255,255,.62)',
    blur: 18,
  },
} as const;

export const colors = {
  background: '#FBFAF7',
  surface: '#FFFFFF',
  text: '#1B1A17',
  textMuted: '#6B665D',
  border: '#E7E1D5',
  tabActive: '#1B1A17',
  tabInactive: '#9A9488',
  overlay: '#FFFFFF',
  brand: '#F66C46',
  brandPressed: '#E85E38',
  brandTint: '#FDE4DB',
} as const;

export const radii = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 22,
  pill: 999,
} as const;

export const shadows = {
  '1': {
    shadowColor: '#201a10',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 1,
    elevation: 1,
  },
  '2': {
    shadowColor: '#201a10',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.13,
    shadowRadius: 12,
    elevation: 12,
  },
  brand: {
    shadowColor: '#f66c46',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.42,
    shadowRadius: 11,
    elevation: 11,
  },
} as const;

export const typography = {
  largeTitle: {
    fontSize: 34,
    lineHeight: 41,
    fontWeight: '700',
  },
  title1: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
  },
  title2: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700',
  },
  headline: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '600',
  },
  body: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '400',
  },
  callout: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '400',
  },
  subhead: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '400',
  },
  footnote: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '400',
  },
  caption1: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
  },
  caption2: {
    fontSize: 11,
    lineHeight: 13,
    fontWeight: '400',
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
  },
} as const;

export const motion = {
  fast: 120,
  base: 220,
  sheet: 320,
  easeOut: [0.2, 0.7, 0.2, 1],
  easeSheet: [0.32, 0.72, 0, 1],
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;
