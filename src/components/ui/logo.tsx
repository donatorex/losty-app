import LogoBlack from '@/assets/brand/losty-logo-black.svg';
import LogoWhite from '@/assets/brand/losty-logo-white.svg';
import MarkBlack from '@/assets/brand/losty-icon-black.svg';
import MarkWhite from '@/assets/brand/losty-icon-white.svg';

const LOGO_ASPECT = 1649.15 / 616.65;
const MIN_HEIGHT = 28;

type LogoVariant = 'black' | 'white';

type LogoProps = {
  variant?: LogoVariant;
  height?: number;
  accessibilityLabel?: string;
};

type LogoMarkProps = {
  variant?: LogoVariant;
  size?: number;
  accessibilityLabel?: string;
};

export function Logo({ variant = 'black', height = 32, accessibilityLabel = 'Losty' }: LogoProps) {
  const Source = variant === 'white' ? LogoWhite : LogoBlack;
  const safeHeight = Math.max(MIN_HEIGHT, height);

  return (
    <Source
      accessible
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="image"
      width={Math.round(safeHeight * LOGO_ASPECT)}
      height={safeHeight}
    />
  );
}

export function LogoMark({
  variant = 'black',
  size = 32,
  accessibilityLabel = 'Losty',
}: LogoMarkProps) {
  const Source = variant === 'white' ? MarkWhite : MarkBlack;
  const safeSize = Math.max(MIN_HEIGHT, size);

  return (
    <Source
      accessible
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="image"
      width={safeSize}
      height={safeSize}
    />
  );
}
