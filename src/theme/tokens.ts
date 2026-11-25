export const colors = {
  background: '#FFFFFF',
  surface: '#F2F2F7',
  text: '#111111',
  textMuted: '#6B7280',
  border: '#E5E7EB',
  tabActive: '#111111',
  tabInactive: '#9CA3AF',
  overlay: '#FFFFFF',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const radii = {
  sm: 8,
  md: 12,
  lg: 16,
  pill: 999,
} as const;

export const typography = {
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
  },
  body: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '400',
  },
} as const;
