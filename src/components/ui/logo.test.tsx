import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';

import { Logo, LogoMark } from './logo';

describe('Logo', () => {
  it('renders the full logo with an accessible label', async () => {
    await render(<Logo />);

    expect(screen.getByLabelText('Losty')).toBeTruthy();
  });

  it('renders the white mark with an accessible label', async () => {
    await render(<LogoMark variant="white" />);

    expect(screen.getByLabelText('Losty')).toBeTruthy();
  });
});
