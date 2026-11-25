import { describe, expect, it } from '@jest/globals';

import { colors, motion, palette, radii, shadows, spacing, typography } from './tokens';

describe('design tokens', () => {
  it('uses the approved light palette', () => {
    expect(palette.brand['500']).toBe('#F66C46');
    expect(palette.paper['50']).toBe('#FBFAF7');
    expect(colors.background).toBe('#FBFAF7');
    expect(colors.text).toBe('#1B1A17');
    expect(colors.tabInactive).toBe('#9A9488');
  });

  it('maps semantic aliases to the palette', () => {
    expect(colors.background).toBe(palette.paper['50']);
    expect(colors.surface).toBe(palette.paper['0']);
    expect(colors.overlay).toBe(palette.paper['0']);
    expect(typography.title).toEqual(typography.title1);
  });

  it('exports spacing, radii, shadows and motion', () => {
    expect(spacing.md).toBe(16);
    expect(radii.pill).toBe(999);
    expect(shadows['2'].shadowOffset.height).toBe(8);
    expect(motion.fast).toBe(120);
    expect(motion.base).toBe(220);
    expect(motion.easeOut).toEqual([0.2, 0.7, 0.2, 1]);
  });

  it('has no dark palette', () => {
    expect(Object.keys(palette)).not.toContain('dark');
  });
});
