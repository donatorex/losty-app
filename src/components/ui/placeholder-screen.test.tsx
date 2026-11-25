import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';

import { PlaceholderScreen } from './placeholder-screen';

describe('PlaceholderScreen', () => {
  it('renders the title and subtitle', async () => {
    await render(<PlaceholderScreen title="Карта" subtitle="Скоро здесь появится карта" />);

    expect(screen.getByText('Карта')).toBeTruthy();
    expect(screen.getByText('Скоро здесь появится карта')).toBeTruthy();
  });
});
